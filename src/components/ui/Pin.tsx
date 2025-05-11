"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg) scale(1)");

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.98)`);
  };

  const onMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <div
      className={cn("relative group/pin z-10 cursor-pointer", containerClassName)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{ perspective: "1200px" }}
        className="flex justify-center items-center"
      >
        <div
          style={{ transform }}
          className="relative w-full max-w-[400px] h-full max-h-[520px] bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-3xl border border-white/10 shadow-2xl text-white overflow-hidden transition-transform duration-200 ease-out"
        >
          {/* Title */}
          {title && (
            <a
              href={href}
              target="_blank"
              className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 bg-black/70 backdrop-blur px-4 py-1 rounded-full text-xs font-semibold text-white ring-1 ring-white/10 hover:ring-white/20"
            >
              {title}
            </a>
          )}

          <div className={cn("z-10 w-full h-full pt-10", className)}>
            {children}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <PinPerspective />
    </div>
  );
};

export const PinPerspective = () => {
  return (
    <motion.div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
      <div className="relative w-full h-full">
        {[0, 2, 4].map((delay, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.4, 0.2, 0], scale: 1 }}
            transition={{ duration: 6, repeat: Infinity, delay }}
            className="absolute left-1/2 top-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-2xl"
          />
        ))}

        {/* Laser Beam */}
        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-1 h-24 group-hover/pin:h-40 bg-gradient-to-b from-transparent to-cyan-500 blur-sm transition-all duration-500" />
        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-1 h-24 group-hover/pin:h-40 bg-gradient-to-b from-transparent to-cyan-500 transition-all duration-500" />
        <motion.div className="absolute left-1/2 top-1/2 translate-x-[2px] w-[6px] h-[6px] rounded-full bg-cyan-500 z-50 blur" />
      </div>
    </motion.div>
  );
};
