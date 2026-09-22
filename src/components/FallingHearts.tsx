import React, { useEffect, useRef } from 'react';

interface FallingHeartsProps {
  isOpened?: boolean;
}

export const FallingHearts: React.FC<FallingHeartsProps> = ({ isOpened = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isOpened) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const heartImg = new Image();
    heartImg.src = '/images/heart.png';
    let imgLoaded = false;
    heartImg.onload = () => {
      imgLoaded = true;
    };

    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    };

    resize();
    window.addEventListener('resize', resize);

    // Floating background hearts
    const floatingHearts = Array.from({ length: 12 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 13 + Math.random() * 8,
      vy: 0.35 + Math.random() * 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      angle: (Math.random() - 0.5) * 0.35,
      swayAmp: 15 + Math.random() * 20,
      swayFreq: 0.0012 + Math.random() * 0.0016,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.32 + Math.random() * 0.3,
    }));

    // Interactive pointer trail
    const trail: Array<{
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      angle: number;
      vAngle: number;
      alpha: number;
      life: number;
    }> = [];

    let lastTime = 0;
    let lastX = 0;
    let lastY = 0;

    const spawnTrail = (cx: number, cy: number) => {
      const now = performance.now();
      const dist = Math.hypot(cx - lastX, cy - lastY);
      if (now - lastTime < 65 && dist < 22) return;
      lastTime = now;
      lastX = cx;
      lastY = cy;

      if (trail.length >= 24) trail.shift();
      trail.push({
        x: cx + (Math.random() - 0.5) * 8,
        y: cy + (Math.random() - 0.5) * 8,
        size: 12 + Math.random() * 8,
        vx: (Math.random() - 0.5) * 1.4,
        vy: -1.2 - Math.random() * 1.5,
        angle: (Math.random() - 0.5) * 0.5,
        vAngle: (Math.random() - 0.5) * 0.02,
        alpha: 0.85,
        life: 1,
      });
    };

    const onPointerMove = (e: PointerEvent) => {
      spawnTrail(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        spawnTrail(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchMove, { passive: true });

    const startTime = performance.now();

    const loop = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const elapsed = time - startTime;

      if (imgLoaded) {
        // Draw background floating hearts
        for (let i = 0; i < floatingHearts.length; i++) {
          const h = floatingHearts[i];
          const sway = Math.sin(elapsed * h.swayFreq + h.phase);
          h.x += h.vx + sway * 0.45;
          h.y += h.vy;
          const rot = h.angle + sway * 0.18;

          if (h.y > height + 30) {
            h.y = -30;
            h.x = Math.random() * width;
          }
          if (h.x < -30) h.x = width + 30;
          if (h.x > width + 30) h.x = -30;

          ctx.save();
          ctx.translate(h.x, h.y);
          ctx.rotate(rot);
          ctx.globalAlpha = h.alpha;
          ctx.drawImage(heartImg, -h.size / 2, -h.size / 2, h.size, h.size);
          ctx.restore();
        }

        // Draw trail hearts
        for (let i = trail.length - 1; i >= 0; i--) {
          const t = trail[i];
          t.x += t.vx;
          t.y += t.vy;
          t.angle += t.vAngle;
          t.life -= 0.016;
          t.alpha = Math.max(0, t.life * 0.85);

          if (t.life <= 0) {
            trail.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.translate(t.x, t.y);
          ctx.rotate(t.angle);
          ctx.globalAlpha = t.alpha;
          ctx.drawImage(heartImg, -t.size / 2, -t.size / 2, t.size, t.size);
          ctx.restore();
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchMove);
    };
  }, [isOpened]);

  if (!isOpened) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};
