"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "motion/react";

export default function SocialsTextBubble() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const calculateViewport = () => {
      setViewportWidth(window.innerWidth);
    };
    calculateViewport();
    window.addEventListener("resize", calculateViewport);
    return () => {
      window.removeEventListener("resize", calculateViewport);
    };
  }, []);

  return (
    <div ref={ref} className="w-36 h-[11rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[17rem] mt-auto relative">
      <motion.img
        className="w-36 scale-150 absolute"
        initial={{ x: "-5rem", scale: 0, opacity: 0 }}
        animate={isInView && { x: viewportWidth > 1280 ? 0 : "-20px", scale: viewportWidth > 1280 ? 1.5 : 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
        src="/images/bubble-socials.png"
        width={500}
        height={500}
        alt="Message bubble"
      />
      <motion.p
        className="w-28 mx-auto text-center relative"
        initial={{ x: "-5rem", scale: 0, opacity: 0 }}
        animate={isInView && { x: viewportWidth > 1280 ? 0 : "-20px", scale: viewportWidth > 1280 ? 1 : 0.7, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        These are his socials... Who am I? Eh... just here to narrate some stuff... No I don&apos;t get paid.
      </motion.p>
    </div>
  );
}
