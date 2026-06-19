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
 * 
 * Key iOS Safari requirements:
 * 1. The <video> element MUST be in the DOM (not just document.createElement)
 * 2. It must have playsinline and muted for autoplay to work
 * 3. drawImage from video is only allowed when video is actually playing
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
  const isProcessingRef = useRef(false);
  const [ready, setReady] = useState(false);

  const processFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video || !canvas || video.paused || video.ended || video.readyState < 2) {
      animFrameRef.current = requestAnimationFrame(processFrame);
      return;
    }

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) {
      animFrameRef.current = requestAnimationFrame(processFrame);
      return;
    }

    // Ensure canvas matches video dimensions
    if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    }

    const w = canvas.width;
    const h = canvas.height;
    if (w === 0 || h === 0) {
      animFrameRef.current = requestAnimationFrame(processFrame);
      return;
    }

    try {
      // Draw current video frame
      ctx.drawImage(video, 0, 0, w, h);

      // Read all pixels
      const imageData = ctx.getImageData(0, 0, w, h);
      const d = imageData.data;

      // Process pixels: green screen → transparent
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i];
        const g = d[i + 1];
        const b = d[i + 2];

        // How much greener is this pixel than other channels?
        const maxRB = r > b ? r : b;
        const greenDominance = g - maxRB;

        if (g > 80 && greenDominance > 25) {
          // Solid green → fully transparent
          d[i + 3] = 0;
        } else if (g > 55 && greenDominance > 10) {
          // Fringe/edge → partial transparency + despill green
          const alpha = 255 - Math.min(255, (greenDominance - 10) * 15);
          d[i + 3] = alpha;
          // Despill: cap green to max of red/blue to remove green tint on edges
          d[i + 1] = Math.min(g, maxRB + 10);
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Signal ready on first successful frame
      if (!isProcessingRef.current) {
        isProcessingRef.current = true;
        setReady(true);
        onReady?.();
      }
    } catch {
      // Security error from tainted canvas — ignore and retry
    }

    animFrameRef.current = requestAnimationFrame(processFrame);
  }, [onReady]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      // Start render loop only when video is actually playing
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(processFrame);
    };

    const handleError = () => {
      onError?.();
    };

    video.addEventListener("playing", handlePlay);
    video.addEventListener("error", handleError);

    // Attempt to play (muted videos can autoplay on iOS)
    video.play().catch(() => {
      // Autoplay blocked — will retry on user interaction
    });

    return () => {
      video.removeEventListener("playing", handlePlay);
      video.removeEventListener("error", handleError);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [src, processFrame, onError]);

  return (
    <div className={className} style={{ ...style, position: "relative" }}>
      {/* Hidden video element IN the DOM — required for iOS Safari */}
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
      {/* Visible canvas where processed (transparent) frames are drawn */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
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
