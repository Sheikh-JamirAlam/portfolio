"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function CipelaContainer() {
  const container = useRef(null);
  const constraintsRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState<{ x?: number; y?: number; width?: number; height?: number; centerX?: number; centerY?: number }>({});

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

  useEffect(() => {
    console.log(cursorPosition.x);
  }, [cursorPosition]);

  function getRelativeCoordinates(event: React.MouseEvent<HTMLDivElement>, referenceElement: HTMLDivElement | null) {
    if (!referenceElement) return { x: 0, y: 0, width: 0, height: 0, centerX: 0, centerY: 0 };

    const position = {
      x: event.pageX,
      y: event.pageY,
    };

    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.offsetTop,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight,
    };

    let reference = referenceElement.offsetParent;

    while (reference) {
      offset.left += reference.offsetLeft;
      offset.top += reference.offsetTop;
      reference = reference.offsetParent;
    }

    return {
      x: position.x - offset.left,
      y: position.y - offset.top,
      width: offset.width,
      height: offset.height,
      centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
      centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
    };
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPosition(getRelativeCoordinates(e, container.current));
  };

  return (
    <motion.div
      ref={container}
      className="w-[50%] relative border-2 border-foreground overflow-hidden"
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className={`select-none relative z-20 transition-all duration-300 ${isHovered ? "opacity-0 saturate-100" : "opacity-100 saturate-0"}`}
        src="/images/cipela.png"
        width={1000}
        height={1000}
        alt="Cipela - Shoe website"
      />
      <video ref={videoRef} className="absolute inset-0 z-10" src="/videos/cipela.mp4" autoPlay loop muted preload="none" aria-label="A video of showcasing OPods" />
      <div ref={constraintsRef} className="absolute z-30 inset-0">
        <motion.div drag dragConstraints={constraintsRef} dragElastic={0} dragMomentum={false} className="w-fit mt-12 m-4 p-2 relative bg-white border-2 border-foreground cursor-pointer">
          <p className="w-[8rem] text-center">
            Another portfolio project is <span className="font-semibold">Cipela</span>, which is a shoe selling website inspired by Nike.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 w-20 h-20 z-50 bg-black pointer-events-none"
        animate={{
          x: cursorPosition.x + 20,
          y: cursorPosition.y + 20,
          transition: { duration: 0.2, ease: [0, 0, 0.58, 1] },
        }}
      >
        Hello
      </motion.div>
    </motion.div>
  );
}
