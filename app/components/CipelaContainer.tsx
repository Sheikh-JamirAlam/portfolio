"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useHoverStore } from "../providers/counter-store-provider";

export default function CipelaContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHovered = useHoverStore((state) => state.isHovered);
  const setIsHovered = useHoverStore((state) => state.setIsHovered);

  useEffect(() => {
    if (!videoRef || !videoRef.current) return;

    if (videoRef.current) {
      if (isHovered === "cipela") {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <motion.div className="w-[50%] relative border-2 border-foreground overflow-hidden" onMouseEnter={() => setIsHovered("cipela")} onMouseLeave={() => setIsHovered("none")}>
      <Link target="_blank" href="https://cipela.vercel.app">
        <Image
          className={`select-none relative z-20 transition-all duration-300 ${isHovered === "cipela" ? "opacity-0 saturate-100" : "opacity-100 saturate-0"}`}
          src="/images/cipela.png"
          width={1000}
          height={1000}
          alt="Cipela - Shoe website"
        />
        <video ref={videoRef} className="absolute inset-0 z-10" src="/videos/cipela.mp4" autoPlay loop muted preload="none" aria-label="A video of showcasing OPods" />
        <div className="absolute z-30 inset-0">
          <div className="w-fit mt-12 m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
            <p className="w-[8rem] text-center">
              Another portfolio project is <span className="font-semibold">Cipela</span>, which is a shoe selling website inspired by Nike.
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
