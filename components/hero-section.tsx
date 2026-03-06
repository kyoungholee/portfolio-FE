"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-4xl text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Frontend Developer
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          <span className="text-balance">
            {"Hi, I'm "}
            <span className="text-primary">Lee Young Ho</span>
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {"3\uB144\uCC28 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uB85C, \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uCD5C\uC6B0\uC120\uC73C\uB85C \uC0DD\uAC01\uD558\uBA70"}
          <br />
          {"\uBAA8\uB358 \uC6F9 \uAE30\uC220\uB85C \uC9C1\uAD00\uC801\uC778 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uB9CC\uB4ED\uB2C8\uB2E4."}
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  )
}
