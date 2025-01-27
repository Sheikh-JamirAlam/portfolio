"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function IntroductionNarrate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref} className="w-[10.5rem] m-4 p-2 bg-white border-2 border-foreground" initial={{ scale: 0, opacity: 0 }} animate={isInView && { scale: 1, opacity: 1 }}>
      <p className="text-center leading-[1.25]">
        Hi there! This is <span className="font-semibold">Sheikh</span>... I am a <br /> Full Stack Developer &amp; Web Designer.
      </p>
    </motion.div>
  );
}
