"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useHoverStore } from "../providers/counter-store-provider";

export default function VetSyncContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHovered = useHoverStore((state) => state.isHovered);
  const setIsHovered = useHoverStore((state) => state.setIsHovered);

  useEffect(() => {
    if (!videoRef || !videoRef.current) return;

    if (videoRef.current) {
      if (isHovered === "vetsync") {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <motion.div className="w-full lg:w-[60%] relative border-2 border-foreground overflow-hidden" onMouseEnter={() => setIsHovered("vetsync")} onMouseLeave={() => setIsHovered("none")}>
      <Link target="_blank" href="https://usevetsync.com/">
        <Image
          className={`select-none relative z-20 transition-all duration-300 ${isHovered === "vetsync" ? "opacity-0 saturate-100" : "opacity-100 saturate-0"}`}
          src="/images/vetsync.png"
          width={2000}
          height={2000}
          alt="VetSync - Pet Veterinary Booking website"
        />
        <video ref={videoRef} className="absolute inset-0 z-10" src="/videos/vetsync.mp4" autoPlay loop muted preload="none" aria-label="A video of showcasing OPods" />
        <div className="absolute z-30 flex inset-0">
          <div className="w-fit h-fit mt-auto sm:mt-8 m-1 sm:m-4 p-1 sm:p-2 relative bg-white border-2 border-foreground cursor-pointer">
            <p className="w-[8rem] text-xs sm:text-base text-center">
              Go ahead, take a closer look.
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
