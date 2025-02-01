"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function PicContainer() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      id="pic-container"
      className="lg:w-[25%] col-span-2 sm:col-span-1 row-span-3 border-2 border-foreground relative flex flex-row-reverse justify-between"
      onHoverStart={() => setIsHovered(true)}
    >
      <div className="w-32 sm:w-24 h-fit mt-auto 2xl:mt-6 m-6 p-2 relative bg-white border-2 border-foreground">
        <p className="text-xs sm:text-base text-center leading-[1.25]">This is me. With my nerd glasses!</p>
      </div>
      <div className="w-2 md:w-28 ml-[2%] 2xl:ml-10 m-10 h-fit relative">
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
