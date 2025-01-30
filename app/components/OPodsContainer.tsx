"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useHoverStore } from "../providers/counter-store-provider";

export default function OPodsContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHovered = useHoverStore((state) => state.isHovered);
  const setIsHovered = useHoverStore((state) => state.setIsHovered);

  useEffect(() => {
    if (!videoRef || !videoRef.current) return;

    if (videoRef.current) {
      if (isHovered === "opods") {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <motion.div className="w-[50%] relative border-2 border-foreground overflow-hidden" onMouseEnter={() => setIsHovered("opods")} onMouseLeave={() => setIsHovered("none")}>
      <Link target="_blank" href="https://opods.vercel.app">
        <Image
          className={`select-none relative z-20 transition-all duration-300 ${isHovered === "opods" ? "opacity-0 saturate-100" : "opacity-100 saturate-0"}`}
          src="/images/opods.png"
          width={1000}
          height={1000}
          alt="OPods - Airpods website"
        />
        <video ref={videoRef} className="absolute inset-0 z-10" src="/videos/opods.mp4" autoPlay loop muted preload="none" aria-label="A video of showcasing OPods" />
        <div className="flex flex-row-reverse justify-between absolute inset-0 z-30">
          <div className="w-fit h-fit mt-12 m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
            <p className="w-[9rem] text-center">Let&apos;s me show you some of my works...</p>
          </div>
          <div className="w-fit h-fit mt-auto mb-[20%] m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
            <p className="w-[13rem] text-center">
              <span className="font-semibold">OPods</span> is a portfolio project which is a product showcase website inspired by Apple.
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
