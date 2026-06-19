"use client";

import { useRef, useEffect, useCallback, useState } from "react";

interface ChromaKeyVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  onReady?: () => void;
  onError?: () => void;
}

// Vertex shader: full-screen quad
const VERTEX_SHADER = `
  attribute vec2 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_texCoord;
  }
`;

// Fragment shader: chroma key green removal
const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_video;
  
  void main() {
    vec4 color = texture2D(u_video, v_texCoord);
    float r = color.r;
    float g = color.g;
    float b = color.b;
    
    // How much greener is this pixel than the max of red/blue?
    float maxRB = max(r, b);
    float greenDominance = g - maxRB;
    
    // Normalize to 0-255 range for threshold comparison
    float g255 = g * 255.0;
    float gd255 = greenDominance * 255.0;
    
    float alpha = 1.0;
    
    if (g255 > 80.0 && gd255 > 25.0) {
      // Solid green screen → fully transparent
      alpha = 0.0;
    } else if (g255 > 55.0 && gd255 > 10.0) {
      // Edge/fringe → partial transparency
      alpha = 1.0 - clamp((gd255 - 10.0) / 17.0, 0.0, 1.0);
      // Despill: reduce green tint on edges
      g = min(g, maxRB + 0.04);
    }
    
    gl_FragColor = vec4(r, g, b, alpha);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext, vs: WebGLShader, fs: WebGLShader): WebGLProgram | null {
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

/**
 * WebGL-based green screen removal.
 * Uses GPU fragment shaders to process video frames — works on ALL browsers
 * including Safari/iPad without any getImageData security restrictions.
 */
export default function ChromaKeyVideo({
  src,
  className = "",
  style,
  onReady,
  onError,
}: ChromaKeyVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animFrameRef = useRef<number>(0);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const textureRef = useRef<WebGLTexture | null>(null);
  const readyFiredRef = useRef(false);
  const [canvasSize, setCanvasSize] = useState({ w: 640, h: 480 });

  const initWebGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
    });
    if (!gl) return false;

    const vs = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return false;

    const program = createProgram(gl, vs, fs);
    if (!program) return false;

    gl.useProgram(program);

    // Full-screen quad vertices
    const positions = new Float32Array([
      -1, -1,  1, -1,  -1, 1,
      -1,  1,  1, -1,   1, 1,
    ]);
    const texCoords = new Float32Array([
      0, 1,  1, 1,  0, 0,
      0, 0,  1, 1,  1, 0,
    ]);

    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const texBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texBuf);
    gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);
    const texLoc = gl.getAttribLocation(program, "a_texCoord");
    gl.enableVertexAttribArray(texLoc);
    gl.vertexAttribPointer(texLoc, 2, gl.FLOAT, false, 0, 0);

    // Create texture for video frames
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Enable alpha blending
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    glRef.current = gl;
    textureRef.current = texture;
    return true;
  }, []);

  const renderFrame = useCallback(() => {
    const video = videoRef.current;
    const gl = glRef.current;
    const canvas = canvasRef.current;

    if (!video || !gl || !canvas || video.readyState < 2) {
      animFrameRef.current = requestAnimationFrame(renderFrame);
      return;
    }

    // Update canvas size to match video
    if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      setCanvasSize({ w: video.videoWidth, h: video.videoHeight });
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    // Upload video frame as texture (no getImageData needed!)
    gl.bindTexture(gl.TEXTURE_2D, textureRef.current);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);

    // Clear and draw
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    // Signal ready on first successful render
    if (!readyFiredRef.current) {
      readyFiredRef.current = true;
      onReady?.();
    }

    animFrameRef.current = requestAnimationFrame(renderFrame);
  }, [onReady]);

  // Initialize WebGL when canvas is ready
  useEffect(() => {
    if (!canvasRef.current) return;
    const success = initWebGL();
    if (!success) {
      onError?.();
    }
  }, [initWebGL, onError]);

  // Start video playback and render loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start render loop immediately — it will wait for video.readyState >= 2
    animFrameRef.current = requestAnimationFrame(renderFrame);

    const tryPlay = () => {
      video.play().catch(() => {
        // Retry after a short delay (iOS sometimes needs this)
        setTimeout(() => video.play().catch(() => {}), 500);
      });
    };

    video.addEventListener("loadeddata", tryPlay);
    tryPlay();

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [src, renderFrame]);

  return (
    <div className={className} style={{ ...style, position: "relative", overflow: "hidden" }}>
      {/* Video element IN the DOM — required for iOS Safari */}
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          opacity: 0,
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
      {/* WebGL canvas — GPU-processed chroma key output */}
      <canvas
        ref={canvasRef}
        width={canvasSize.w}
        height={canvasSize.h}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
