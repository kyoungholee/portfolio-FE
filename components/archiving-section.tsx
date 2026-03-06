"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const ARCHIVES = [
  {
    title: "GitHub",
    link: "https://github.com/leekyoungho",
    description: "\uC18C\uC2A4 \uCF54\uB4DC \uC800\uC7A5\uC18C",
    details: [
      "\uD504\uB85C\uC81D\uD2B8 \uC18C\uC2A4 \uCF54\uB4DC \uAD00\uB9AC",
      "\uC624\uD508\uC18C\uC2A4 \uCEE8\uD2B8\uB9AC\uBDF0\uC158",
      "1\uC77C 1\uCEE4\uBC0B \uB3C4\uC804 \uAE30\uB85D",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },

]

export function ArchivingSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="archiving" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Archiving
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Archiving
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {ARCHIVES.map((archive, index) => (
            <ArchiveCard key={archive.title} archive={archive} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ArchiveCard({
  archive,
  index,
}: {
  archive: (typeof ARCHIVES)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <a
      href={archive.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className={`group flex flex-col gap-4 rounded-xl border border-border bg-card p-8 transition-all duration-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-primary transition-transform duration-300 group-hover:scale-110">
        {archive.icon}
      </div>
      <div>
        <h3 className="mb-1 text-xl font-bold text-foreground">{archive.title}</h3>
        <p className="text-sm text-muted-foreground">{archive.description}</p>
      </div>
      <ul className="flex flex-col gap-2">
        {archive.details.map((detail) => (
          <li
            key={detail}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
            {detail}
          </li>
        ))}
      </ul>
      <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary">
        {"\uBC14\uB85C\uAC00\uAE30"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </a>
  )
}
