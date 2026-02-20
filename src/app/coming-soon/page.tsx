"use client";

import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-dvh flex flex-col items-center justify-start pt-32 text-center px-6">

      {/* Dotted Background (like your hero) */}
      {/* <div className="absolute inset-0 h-1/2 pointer-events-none">
        <FlickeringGrid
          className="h-full w-full opacity-40"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div> */}

      <div className="relative z-10 max-w-2xl space-y-6">
        
        {/* Badge */}
        <div className="inline-block border bg-primary text-primary-foreground rounded-xl px-4 py-1 text-sm font-medium">
          Coming Soon
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Something Amazing is<span className="text-primary"> Launching Soon</span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg md:text-xl">
          I’m currently building something exciting. Stay tuned for updates.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-110"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}