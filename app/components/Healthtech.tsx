"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Healthtech() {
  const constraintsRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!videoRef || !videoRef.current) return;

    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <motion.div className="w-[50%] relative border-2 border-foreground" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Image
        className={`select-none relative z-20 transition-all duration-300 ${isHovered ? "opacity-0 saturate-100" : "opacity-100 saturate-0"}`}
        src="/images/healthtech.png"
        width={1000}
        height={1000}
        alt="Healthtech - Redesign of Healthtech website"
      />
      <video ref={videoRef} className="absolute inset-0 z-10" src="/videos/healthtech.mp4" autoPlay loop muted preload="none" aria-label="A video of showcasing OPods" />
      <div ref={constraintsRef} className="flex justify-end items-end absolute inset-0 z-30">
        <motion.div drag dragConstraints={constraintsRef} dragElastic={0} dragMomentum={false} className="w-fit h-fit mb-12 m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
          <p className="w-[9rem] text-center">
            This was a personal redesign of the website <span className="font-semibold">Healthtech</span>.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
