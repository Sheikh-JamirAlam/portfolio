"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function SocialsTextBubble() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-36 h-[17rem] mt-auto relative">
      <motion.img
        className="w-36 scale-150 absolute"
        initial={{ x: "-5rem", scale: 0, opacity: 0 }}
        animate={isInView && { x: 0, scale: 1.5, opacity: 1 }}
        transition={{ delay: 0.7 }}
        src="/images/bubble-socials.png"
        width={500}
        height={500}
        alt="Message bubble"
      />
      <motion.p className="w-28 mx-auto text-center relative" initial={{ x: "-5rem", scale: 0, opacity: 0 }} animate={isInView && { x: 0, scale: 1, opacity: 1 }} transition={{ delay: 0.7 }}>
        These are his socials... Who am I? Eh... just here to narrate some stuff... No I don&apos;t get paid.
      </motion.p>
    </div>
  );
}
