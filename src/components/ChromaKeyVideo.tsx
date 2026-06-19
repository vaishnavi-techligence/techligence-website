"use client";

import { useRef, useEffect, useCallback, useState } from "react";

interface ChromaKeyVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  onReady?: () => void;
  onError?: () => void;
}

/**
 * Canvas-based green screen removal that works on ALL browsers including Safari/iPad.
 * Reads each video frame, processes pixels to make green → transparent, draws to canvas.
 */
export default function ChromaKeyVideo({
  src,
  className = "",
  style,
  onReady,
  onError,
}: ChromaKeyVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const animFrameRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  const processFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.paused || video.ended) {
      animFrameRef.current = requestAnimationFrame(processFrame);
      return;
    }

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    // Draw current video frame to canvas
    ctx.drawImage(video, 0, 0, w, h);

    // Read all pixels
    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;

    // Process each pixel: detect green and make transparent
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Green screen detection:
      // Green channel must be dominant and above a threshold
      const greenDominance = g - Math.max(r, b);
      
      if (g > 80 && greenDominance > 30) {
        // Pure green screen → fully transparent
        data[i + 3] = 0;
      } else if (g > 60 && greenDominance > 15) {
        // Edge/fringe area → partial transparency + despill
        const alpha = Math.max(0, 255 - (greenDominance - 15) * 12);
        data[i + 3] = Math.min(data[i + 3], alpha);
        // Despill: reduce green fringing on edges
        data[i + 1] = Math.min(g, Math.max(r, b));
      }
    }

    ctx.putImageData(imageData, 0, 0);
    animFrameRef.current = requestAnimationFrame(processFrame);
  }, []);

  useEffect(() => {
    const video = document.createElement("video");
    video.crossOrigin = "anonymous";
    video.playsInline = true;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.preload = "auto";
    // Needed for iOS Safari to allow autoplay
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    
    video.src = src;
    videoRef.current = video;

    video.addEventListener("loadedmetadata", () => {
      const w = video.videoWidth;
      const h = video.videoHeight;
      setDimensions({ w, h });
      if (canvasRef.current) {
        canvasRef.current.width = w;
        canvasRef.current.height = h;
      }
    });

    video.addEventListener("canplay", () => {
      video.play().catch(() => {});
      onReady?.();
    });

    video.addEventListener("error", () => {
      onError?.();
    });

    // Start the render loop
    animFrameRef.current = requestAnimationFrame(processFrame);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      video.pause();
      video.removeAttribute("src");
      video.load();
      videoRef.current = null;
    };
  }, [src, processFrame, onReady, onError]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.w || 1}
      height={dimensions.h || 1}
      className={className}
      style={style}
    />
  );
}
