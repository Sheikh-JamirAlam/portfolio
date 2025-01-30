"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Email, Github, Linkedin, Twitter } from "./Icons";

export default function SocialsContainer() {
  const [isHovered, setIsHovered] = useState<string>("none");

  return (
    <div className="mx-auto my-auto grid grid-cols-2 gap-6 text-7xl">
      <Link className="relative z-10" target="_blank" href="mailto:alamjamir15@gmail.com">
        <div className="flex justify-center cursor-pointer">
          <motion.div initial={{ rotate: 10, y: 0 }} whileHover={{ rotate: 0, y: -10 }} onHoverStart={() => setIsHovered("email")} onHoverEnd={() => setIsHovered("none")}>
            <Email className="saturate-0" />
          </motion.div>
          <p className={`absolute text-sm transition-all ${isHovered === "email" ? "opacity-100 -translate-y-3" : "opacity-0 translate-y-0"}`}>Email</p>
        </div>
      </Link>
      <Link className="relative z-10" target="_blank" href="https://github.com/Sheikh-JamirAlam">
        <div className="flex justify-center cursor-pointer">
          <motion.div initial={{ rotate: -13, y: 0 }} whileHover={{ rotate: 0, y: -10 }} onHoverStart={() => setIsHovered("github")} onHoverEnd={() => setIsHovered("none")}>
            <Github className="saturate-0" />
          </motion.div>
          <p className={`absolute text-sm transition-all ${isHovered === "github" ? "opacity-100 -translate-y-6" : "opacity-0 translate-y-0"}`}>Github</p>
        </div>
      </Link>
      <Link className="relative z-10" target="_blank" href="https://www.linkedin.com/in/sheikhjamiralam">
        <div className="flex justify-center cursor-pointer">
          <motion.div initial={{ rotate: -5, y: 0 }} whileHover={{ rotate: 0, y: -10 }} onHoverStart={() => setIsHovered("linkedin")} onHoverEnd={() => setIsHovered("none")}>
            <Linkedin className="saturate-0" />
          </motion.div>
          <p className={`absolute text-sm transition-all ${isHovered === "linkedin" ? "opacity-100 -translate-y-5" : "opacity-0 translate-y-0"}`}>LinkedIn</p>
        </div>
      </Link>
      <Link className="relative z-10" target="_blank" href="https://x.com/jamirscode">
        <div className="flex justify-center cursor-pointer">
          <motion.div initial={{ rotate: 7, y: 0 }} whileHover={{ rotate: 0, y: -10 }} onHoverStart={() => setIsHovered("twitter")} onHoverEnd={() => setIsHovered("none")}>
            <Twitter className="saturate-0" />
          </motion.div>
          <p className={`absolute text-sm transition-all ${isHovered === "twitter" ? "opacity-100 -translate-y-4" : "opacity-0 translate-y-0"}`}>Twitter</p>
        </div>
      </Link>
    </div>
  );
}
