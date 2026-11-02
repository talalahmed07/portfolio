import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talal Ahmed Butt | Finance Portfolio",
  description: "Finance student at UMass Amherst's Isenberg School of Management, focused on Corporate Finance and FP&A.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
