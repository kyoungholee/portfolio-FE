"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const CAREER = [
  {
    period: "2024.01 - Present",
    company: "두손인터내셔널",
    role: "Frontend Developer",
    description:
      "React \uBC0F Next.js \uAE30\uBC18 \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC744 \uB2F4\uB2F9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C \uAD6C\uCD95 \uBC0F \uC131\uB2A5 \uCD5C\uC801\uD654 \uC791\uC5C5\uC744 \uC9C4\uD589\uD558\uACE0 \uC788\uC73C\uBA70, \uC8FC\uB2C8\uC5B4 \uAC1C\uBC1C\uC790 \uBA58\uD1A0\uB9C1\uC5D0\uB3C4 \uCC38\uC5EC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
    tasks: [
      "\uB514\uC790\uC778 \uC2DC\uC2A4\uD15C \uAD6C\uCD95 \uBC0F \uCEF4\uD3EC\uB10C\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uAC1C\uBC1C",
      "Core Web Vitals \uAC1C\uC120 (LCP 40% \uAC10\uC18C)",
      "\uC8FC\uB2C8\uC5B4 \uAC1C\uBC1C\uC790 \uCF54\uB4DC \uB9AC\uBDF0 \uBC0F \uBA58\uD1A0\uB9C1",
    ],
  },
  {
    period: "2022.06 - 2023.12",
    company: "XYZ Solutions",
    role: "Frontend Developer",
    description:
      "B2B SaaS \uC81C\uD488\uC758 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uB2F4\uB2F9\uD588\uC2B5\uB2C8\uB2E4. \uBCF5\uC7A1\uD55C \uD3FC \uCC98\uB9AC\uC640 \uB370\uC774\uD130 \uC2DC\uAC01\uD654 \uAE30\uB2A5\uC744 \uAD6C\uD604\uD588\uC73C\uBA70, \uD14C\uC2A4\uD2B8 \uCEE4\uBC84\uB9AC\uC9C0\uB97C \uB192\uC774\uB294 \uC791\uC5C5\uC744 \uC9C4\uD589\uD588\uC2B5\uB2C8\uB2E4.",
    tasks: [
      "\uBCF5\uC7A1\uD55C \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1 \uD3FC \uAD6C\uD604",
      "\uCC28\uD2B8 \uBC0F \uB300\uC2DC\uBCF4\uB4DC UI \uAC1C\uBC1C",
      "Vitest \uB3C4\uC785 \uBC0F \uD14C\uC2A4\uD2B8 \uCEE4\uBC84\uB9AC\uC9C0 60% \uB2EC\uC131",
    ],
  },
]

export function CareerSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="career" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Career
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Work Experience
          </h2>
        </div>

        <div className="relative flex flex-col gap-12">
          {/* Timeline line */}
          <div className="absolute left-[3px] top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-[1px]" />

          {CAREER.map((item, index) => (
            <CareerCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CareerCard({
  item,
  index,
}: {
  item: (typeof CAREER)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex flex-col gap-4 pl-8 transition-all duration-700 md:w-1/2 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
        } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Timeline dot */}
      <div
        className={`absolute -left-[5px] top-0.5 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-auto md:top-0.5 ${isLeft ? "md:-right-[9px]" : "md:-left-[9px]"
          }`}
      />

      <span className="text-xs font-medium uppercase tracking-wider text-primary">
        {item.period}
      </span>
      <div>
        <h3 className="text-lg font-bold text-foreground">{item.company}</h3>
        <p className="text-sm font-medium text-muted-foreground">{item.role}</p>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
      <ul
        className={`flex flex-col gap-1.5 ${isLeft ? "md:items-end" : ""}`}
      >
        {item.tasks.map((task) => (
          <li
            key={task}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}
