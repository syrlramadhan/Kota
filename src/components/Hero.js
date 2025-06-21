'use client';

import { Link } from 'react-scroll';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Squares = ({
  direction = 'diagonal',
  speed = 0.2,
  borderColor = '#E5E7EB',
  squareSize = 60,
  hoverFillColor = '#F3F4F6',
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const numSquaresX = useRef(0);
  const numSquaresY = useRef(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquareRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          if (
            hoveredSquareRef.current &&
            Math.floor((x - startX) / squareSize) === hoveredSquareRef.current.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 1;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(249, 250, 251, 0.2)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        default:
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
      const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);

      if (
        !hoveredSquareRef.current ||
        hoveredSquareRef.current.x !== hoveredSquareX ||
        hoveredSquareRef.current.y !== hoveredSquareY
      ) {
        hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
      }
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-auto opacity-70"
    />
  );
};

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.transform = `translateY(${scrollPosition * 0.03}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative bg-white text-gray-900 min-h-screen flex items-center justify-center">
      <Squares
        speed={0.2}
        squareSize={60}
        direction="diagonal"
        borderColor="#E5E7EB"
        hoverFillColor="#F3F4F6"
      />
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white p-2 rounded-full shadow-sm flex justify-center items-center">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <Image
              src="/foto1.png"
              alt="Kota Cloud Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-4 md:mb-6 animate__animated animate__fadeIn">
          Empower Your Business with Seamless Connectivity
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-inter text-gray-600 mb-8 max-w-3xl animate__animated animate__fadeInUp animate__delay-1s">
          Empower your business with intelligent network solutions that connect every device to the right system — instantly and automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cta-button px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold font-inter rounded-lg !text-white animate__animated animate__fadeInUp animate__delay-2s"
          >
            Get Started
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold font-inter rounded-lg border border-gray-300 text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg animate__animated animate__fadeInUp animate__delay-2s"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}