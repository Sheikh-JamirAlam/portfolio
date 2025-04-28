"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function CompanionVetsyncAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-8 h-8 sm:w-10 sm:h-14 lg:w-14 lg:h-20 mt-auto lg:mt-80 2xl:mb-6 relative">
      <motion.img
        className="w-24 scale-[2] absolute rotate-[-20deg] -translate-x-2"
        initial={{ x: "6rem", rotate: "-20deg", scale: 2, opacity: 0 }}
        animate={isInView && { x: "-0.5rem", rotate: "-20deg", scale: 2, opacity: 1 }}
        transition={{ delay: 0.4 }}
        src="/images/companion.png"
        width={500}
        height={500}
        alt="Message bubble"
      />
    </div>
  );
}
