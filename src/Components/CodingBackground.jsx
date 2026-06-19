// src/components/CodingBackground.jsx
import { useEffect, useRef } from 'react';

function CodingBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 20);
    const yPos = Array(cols).fill(0);

    const codeChars = "01<>[]{}#@$%^&*-+=|";
    const getRandomChar = () => codeChars[Math.floor(Math.random() * codeChars.length)];

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00FF00";
      ctx.font = "16px monospace";

      yPos.forEach((y, index) => {
        const text = getRandomChar();
        const x = index * 20;
        ctx.fillText(text, x, y);
        yPos[index] = y > canvas.height + Math.random() * 100 ? 0 : y + 20;
      });
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-20"
    />
  );
}

export default CodingBackground;
