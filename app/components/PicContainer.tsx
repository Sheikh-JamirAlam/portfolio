"use client";

import { useRef, useState } from "react";
import { useInView, motion } from "motion/react";

export default function PicContainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div id="pic-container" className="w-[25%] border-2 border-foreground relative flex flex-row-reverse justify-between" onHoverStart={() => setIsHovered(true)}>
      <motion.div ref={ref} className="w-24 h-fit m-6 p-2 relative bg-white border-2 border-foreground" initial={{ scale: 0, opacity: 0 }} animate={isInView && { scale: 1, opacity: 1 }}>
        <p className="text-center leading-[1.25]">This is me. With my nerd glasses!</p>
      </motion.div>
      <div className="w-28 m-10 h-fit relative">
        <motion.img
          className="w-full absolute"
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={isHovered && { opacity: 1, scale: 1, x: 0 }}
          src="/images/bubbles.png"
          width={500}
          height={500}
          alt="Message bubble"
        />
        <motion.p className="w-20 mx-3 my-[2.1rem] relative text-center leading-[1.25]" initial={{ opacity: 0, scale: 0, x: 100 }} animate={isHovered && { opacity: 1, scale: 1, x: 0 }}>
          I am so hungry...
        </motion.p>
      </div>
    </motion.div>
  );
}
