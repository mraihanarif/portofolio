"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const paths = React.useMemo(() => [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
      "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
      "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
      "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
      "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
      "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
      "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
    ], []);

    return (
      <div
        className={cn(
          "absolute h-screen w-screen inset-0 flex items-center justify-center overflow-hidden",
          className
        )}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            {paths.map((path, index) => (
              <motion.path
                key={`path-${index}`}
                d={path}
                stroke="url(#gradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: 10, repeat: Infinity, repeatType: "reverse" },
                  opacity: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
              />
            ))}
          </g>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
              <stop offset="50%" stopColor="#18CCFC" />
              <stop offset="100%" stopColor="#6344F5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";