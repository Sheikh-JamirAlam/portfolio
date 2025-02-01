"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useHoverStore } from "../providers/counter-store-provider";

export default function Healthtech() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHovered = useHoverStore((state) => state.isHovered);
  const setIsHovered = useHoverStore((state) => state.setIsHovered);

  useEffect(() => {
    if (!videoRef || !videoRef.current) return;

    if (videoRef.current) {
      if (isHovered === "healthtech") {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <motion.div className="w-full lg:w-[50%] relative border-2 border-foreground overflow-hidden" onMouseEnter={() => setIsHovered("healthtech")} onMouseLeave={() => setIsHovered("none")}>
      <Link target="_blank" href="https://healthtech-web-psi.vercel.app">
        <Image
          className={`select-none relative z-20 transition-all duration-300 ${isHovered === "healthtech" ? "opacity-0 saturate-100" : "opacity-100 saturate-0"}`}
          src="/images/healthtech.png"
          width={1000}
          height={1000}
          alt="Healthtech - Redesign of Healthtech website"
        />
        <video ref={videoRef} className="absolute inset-0 z-10" src="/videos/healthtech.mp4" autoPlay loop muted preload="none" aria-label="A video of showcasing OPods" />
        <div className="flex justify-end items-end absolute inset-0 z-30">
          <div className="w-fit h-fit sm:mb-12 m-1 sm:m-4 p-1 sm:p-2 relative bg-white border-2 border-foreground cursor-pointer">
            <p className="w-[7rem] sm:w-[9rem] text-xs sm:text-base text-center">
              This was a personal redesign of the website <span className="font-semibold">Healthtech</span>.
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
