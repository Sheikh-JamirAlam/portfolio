"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function OPodsContainer() {
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
        src="/images/opods.png"
        width={1000}
        height={1000}
        alt="OPods - Airpods website"
      />
      <video ref={videoRef} className="absolute inset-0 z-10" src="/videos/opods.mp4" autoPlay loop muted preload="none" aria-label="A video of showcasing OPods" />
      <div ref={constraintsRef} className="flex flex-row-reverse justify-between absolute inset-0 z-30">
        <motion.div drag dragConstraints={constraintsRef} dragElastic={0} dragMomentum={false} className="w-fit h-fit mt-12 m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
          <p className="w-[9rem] text-center">Let&apos;s me show you some of my works...</p>
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0}
          dragMomentum={false}
          className="w-fit h-fit mt-auto mb-[20%] m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer"
        >
          <p className="w-[13rem] text-center">
            <span className="font-semibold">OPods</span> is a portfolio project which is a product showcase website inspired by Apple.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
