"use client";
import { useState, useEffect } from "react";

export default function FollowGif() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <img
      src="/botpointer.gif" // simpan di /public
      alt="Bot Pointer"
      className="w-24 h-24 fixed pointer-events-none z-50"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
