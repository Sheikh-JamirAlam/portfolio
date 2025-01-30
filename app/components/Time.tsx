"use client";

import { useEffect, useState } from "react";

export default function Time() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Ensure this runs only on the client side
    const getISTTime = () => {
      const now = new Date();
      const offset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
      const istTime = new Date(now.getTime() + offset);
      return istTime.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    };

    setCurrentTime(getISTTime());
    const interval = setInterval(() => {
      setCurrentTime(getISTTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span className={`font-ubuntu uppercase`}>{currentTime}</span>;
}
