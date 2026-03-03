"use client";

import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  friction: number;
  ease: number;
  opacity: number;
}

export const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMorphed, setIsMorphed] = useState(false);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const init = () => {
      canvasRef.current!.width = window.innerWidth;
      canvasRef.current!.height = window.innerHeight;

      const image = new Image();
      image.src = '/logo.jpg';
      image.onload = () => {
        // Draw image to offscreen canvas to sample pixels
        const offscreen = document.createElement('canvas');
        const offCtx = offscreen.getContext('2d');
        if (!offCtx) return;

        // Scale logo to fit nicely in center
        const scale = Math.min(window.innerWidth / image.width, window.innerHeight / image.height) * 0.4;
        const w = image.width * scale;
        const h = image.height * scale;
        const x = (window.innerWidth - w) / 2;
        const y = (window.innerHeight - h) / 2;

        offscreen.width = window.innerWidth;
        offscreen.height = window.innerHeight;
        offCtx.drawImage(image, x, y, w, h);

        const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height).data;
        const sampledPoints: {x: number, y: number}[] = [];

        // Sample every 4th pixel for performance
        for (let py = 0; py < offscreen.height; py += 6) {
          for (let px = 0; px < offscreen.width; px += 6) {
            const index = (py * offscreen.width + px) * 4;
            const alpha = imageData[index + 3];
            const r = imageData[index];
            const g = imageData[index + 1];
            const b = imageData[index + 2];

            // Sample if pixel is dark enough (logo is likely dark on white or similar)
            // Or just check brightness. Assuming dark logo on light bg for sampling.
            const brightness = (r + g + b) / 3;
            if (brightness < 128 && alpha > 0) {
              sampledPoints.push({ x: px, y: py });
            }
          }
        }

        // Create particles
        const count = 800;
        const newParticles: Particle[] = [];
        for (let i = 0; i < count; i++) {
          const point = sampledPoints[i % sampledPoints.length] || { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight };
          newParticles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            originX: Math.random() * window.innerWidth,
            originY: Math.random() * window.innerHeight,
            targetX: point.x,
            targetY: point.y,
            vx: 0,
            vy: 0,
            size: Math.random() * 2 + 1,
            friction: 0.95,
            ease: 0.05,
            opacity: Math.random() * 0.5 + 0.3
          });
        }
        particles.current = newParticles;
        
        // Trigger morph after a short delay
        setTimeout(() => setIsMorphed(true), 1000);
      };
    };

    const animate = () => {
      if (!ctx || !canvasRef.current) return;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      particles.current.forEach(p => {
        if (isMorphed) {
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          p.vx += dx * p.ease;
          p.vy += dy * p.ease;
        } else {
          // Floating state
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vy += (Math.random() - 0.5) * 0.1;
        }

        p.vx *= p.friction;
        p.vy *= p.friction;
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 212, 191, ${p.opacity})`; // #2dd4bf
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-init coordinates might be too heavy, just adjust canvas size
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMorphed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ filter: 'blur(1px)' }}
    />
  );
};
