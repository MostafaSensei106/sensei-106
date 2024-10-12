"use client";
import React, { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import styles from './animated_background.module.css';

interface Bubble {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
}

interface Meteor {
    x: number;
    y: number;
    size: number;
    speed: number;
    direction: 'horizontal' | 'vertical';
}

const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const gridSize = isMobile ? 30 : 50;
    const numberOfBubbles = isMobile ? 3 : 15;
    const numberOfMeteors = isMobile ? 1 : 3;
    const maxRadius = isMobile ? 40 : 150;
    const minRadius = isMobile ? 20 : 100;

    useEffect(() => {
        setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    }, []);

    const createBubbles = (width: number, height: number): Bubble[] =>
        Array.from({ length: numberOfBubbles }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * (maxRadius - minRadius) + minRadius,
            vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.5),
            vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.5)
        }));

    const createMeteors = (width: number, height: number): Meteor[] =>
        Array.from({ length: numberOfMeteors }, () => ({
            x: Math.floor(Math.random() * (width / gridSize)) * gridSize,
            y: Math.floor(Math.random() * (height / gridSize)) * gridSize,
            size: Math.random() * (isMobile ? 1 : 2) + (isMobile ? 0.5 : 1),
            speed: Math.random() * (isMobile ? 1 : 2) + (isMobile ? 0.5 : 1),
            direction: Math.random() < 0.5 ? 'horizontal' : 'vertical'
        }));

    const [bubbles, meteors] = useMemo(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        return [createBubbles(width, height), createMeteors(width, height)];
    }, [numberOfBubbles, numberOfMeteors, maxRadius, minRadius, gridSize, isMobile]);

    const drawBubble = (ctx: CanvasRenderingContext2D, bubble: Bubble) => {
        const gradient = ctx.createRadialGradient(bubble.x, bubble.y, 0, bubble.x, bubble.y, bubble.radius);
        gradient.addColorStop(0, 'rgba(252, 240, 225, 0.3)');
        gradient.addColorStop(1, 'rgba(252, 240, 225, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();
    };

    const drawMeteor = (ctx: CanvasRenderingContext2D, meteor: Meteor) => {
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        const endX = meteor.direction === 'horizontal' ? meteor.x - meteor.size * 5 : meteor.x;
        const endY = meteor.direction === 'vertical' ? meteor.y - meteor.size * 5 : meteor.y;
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = 'rgba(252, 240, 225, 0.7)';
        ctx.lineWidth = meteor.size;
        ctx.stroke();
    };

    const animate = () => {
        const canvas = canvasRef.current;
        const ctx = contextRef.current;
        if (!canvas || !ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        bubbles.forEach(bubble => {
            bubble.x += bubble.vx;
            bubble.y += bubble.vy;
            if (bubble.x + bubble.radius > canvas.width || bubble.x - bubble.radius < 0) bubble.vx *= -1;
            if (bubble.y + bubble.radius > canvas.height || bubble.y - bubble.radius < 0) bubble.vy *= -1;
            drawBubble(ctx, bubble);
        });

        meteors.forEach(meteor => {
            if (meteor.direction === 'horizontal') {
                meteor.x += meteor.speed;
                if (meteor.x > canvas.width) {
                    meteor.x = 0;
                    meteor.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
                }
            } else {
                meteor.y += meteor.speed;
                if (meteor.y > canvas.height) {
                    meteor.y = 0;
                    meteor.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
                }
            }
            drawMeteor(ctx, meteor);
        });

        animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        contextRef.current = ctx;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        animationFrameIdRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
        if (isMobile) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        bubbles.forEach(bubble => {
            const dx = mouseX - bubble.x;
            const dy = mouseY - bubble.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                bubble.x += dx * 0.01;
                bubble.y += dy * 0.01;
            }
        });
    }, [isMobile, bubbles]);

    return (
        <canvas
            className={styles.canvas}
            ref={canvasRef}
            onMouseMove={handleMouseMove}
        />
    );
};

export default AnimatedBackground;
