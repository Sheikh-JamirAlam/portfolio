"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function CipelaContainer() {
  const constraintsRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!videoRef || !videoRef.current) return;

    if (isHovered) videoRef.current.play();
    else videoRef.current.pause();
  }, [isHovered]);

  return (
    <motion.div className="w-[50%] relative border-2 border-foreground" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Image
        className={`select-none relative z-20 transition-all duration-300 ${isHovered ? "opacity-0 saturate-100" : "opacity-100 saturate-0"}`}
        src="/images/cipela.png"
        width={1000}
        height={1000}
        alt="Cipela - Shoe website"
      />
      {isHovered && <video ref={videoRef} className="absolute inset-0" src="/videos/cipela.mp4" autoPlay loop muted preload="none" aria-label="A video of showcasing OPods" />}
      <div ref={constraintsRef} className="absolute z-30 inset-0">
        <motion.div drag dragConstraints={constraintsRef} dragElastic={0} dragMomentum={false} className="w-fit mt-12 m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
          <p className="w-[8rem] text-center">Another portfolio project is Cipela, which is a shoe selling website inspired by Nike.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
