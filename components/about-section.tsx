"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1)

  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            About
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            About Me
          </h2>
        </div>

        <div
          ref={contentRef}
          className={`grid gap-12 md:grid-cols-2 transition-all duration-700 delay-200 ${
            contentVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-muted-foreground">
              {"\uC548\uB155\uD558\uC138\uC694, 3\uB144\uCC28 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790 \uC774\uC601\uD638\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uCE5C\uD654\uC801\uC778 \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC1C\uBC1C\uD558\uB294 \uAC83\uC744 \uC990\uAE30\uBA70, \uD56D\uC0C1 \uC0C8\uB85C\uC6B4 \uAE30\uC220\uC744 \uBC30\uC6B0\uACE0 \uC801\uC6A9\uD558\uB294 \uAC83\uC744 \uC88B\uC544\uD569\uB2C8\uB2E4."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {"React\uC640 Next.js\uB97C \uC911\uC2EC\uC73C\uB85C \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uD574\uC654\uC73C\uBA70, TypeScript\uB97C \uD65C\uC6A9\uD55C \uD0C0\uC785 \uC548\uC804\uD55C \uCF54\uB4DC \uC791\uC131\uC744 \uC120\uD638\uD569\uB2C8\uB2E4. \uC131\uB2A5 \uCD5C\uC801\uD654\uC640 \uC811\uADFC\uC131\uC5D0 \uB300\uD55C \uAD00\uC2EC\uC774 \uB192\uC73C\uBA70, \uD300\uC6D0\uB4E4\uACFC\uC758 \uD611\uC5C5\uC744 \uC911\uC694\uC2DC\uD569\uB2C8\uB2E4."}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                Information
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-muted-foreground">Name</span>
                  <span className="text-foreground">{"\uC774\uC601\uD638"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-muted-foreground">Role</span>
                  <span className="text-foreground">Frontend Developer</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-muted-foreground">Experience</span>
                  <span className="text-foreground">{"3\uB144"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-muted-foreground">Email</span>
                  <span className="text-foreground">leekyoungho@email.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
