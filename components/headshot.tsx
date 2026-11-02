"use client";
import { useState } from "react";

export default function Headshot() {
  const [ok, setOk] = useState(true);
  return (
    <div className="relative grid h-44 w-44 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-cyan-400 bg-white/5 text-4xl font-bold text-cyan-300">
      TB
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/headshot.jpg" alt="Headshot of Talal Ahmed Butt" onError={() => setOk(false)} className="absolute inset-0 h-full w-full object-cover" />
      )}
    </div>
  );
}
