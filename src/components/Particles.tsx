'use client';

import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    const rate = 60;
    const arc = 200; // Number of particles
    let time = 0;
    const size = 7;
    const speed = 20;
    const parts: any[] = [];
    const colors = ['#FFC56E','#FF6CC6','#4241B8','#F69040','#0EADC9'];
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let animationFrameId: number;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    window.addEventListener('resize', resize);
    resize();

    function create() {
      time = 0;
      for(let i = 0; i < arc; i++) {
        parts[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 - 1,
          toY: Math.random() * 2 - 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size
        };
      }
    }

    function distanceBetween(p1: {x: number, y: number}, p2: {x: number, y: number}) {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx*dx + dy*dy);
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      
      for(let i = 0; i < arc; i++) {
        const li = parts[i];
        let distanceFactor = distanceBetween(mouse, parts[i]);
        distanceFactor = Math.max(Math.min(15 - (distanceFactor / 10), 10), 1);
        
        ctx!.beginPath();
        ctx!.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
        ctx!.fillStyle = li.c;
        ctx!.strokeStyle = li.c;
        
        if(i % 2 === 0)
          ctx!.stroke();
        else
          ctx!.fill();
        
        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);
        
        if(li.x > w) li.x = 0; 
        if(li.y > h) li.y = 0; 
        if(li.x < 0) li.x = w; 
        if(li.y < 0) li.y = h; 
      }
      
      if(time < speed) {
        time++;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Adjust for canvas position if needed, but for full screen fixed canvas clientX/Y is fine
      // If canvas is relative in a section, we might need offset
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    create();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 z-[5] pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
