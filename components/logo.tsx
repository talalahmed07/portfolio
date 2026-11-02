"use client";
import { useState } from "react";

export default function Logo({ src, name }: { src: string; name: string }) {
  const [ok, setOk] = useState(true);
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <div className="relative z-10 grid h-14 w-14 place-items-center overflow-hidden rounded-full border-2 border-white/70 bg-white text-sm font-bold text-black">
      {initials}
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={`${name} logo`} onError={() => setOk(false)} className="absolute inset-0 h-full w-full bg-white object-contain p-1" />
      )}
    </div>
  );
}
