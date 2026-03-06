"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const SKILLS = [
  {
    category: "Language",
    items: [
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    category: "Framework & Library",
    items: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "React Query", logo: "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg" },
      { name: "Zustand", logo: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" },
    ],
  },
  {
    category: "Styling",
    items: [
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "Styled Components", logo: "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" },
      { name: "CSS Modules", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },

]

export function SkillsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tech Stack
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, groupIndex) => (
            <SkillCard key={group.category} group={group} index={groupIndex} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  group,
  index,
}: {
  group: (typeof SKILLS)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`rounded-xl border border-border bg-card p-6 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary">
        {group.category}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {group.items.map((skill, i) => (
          <div
            key={skill.name}
            className={`flex items-center gap-3 rounded-lg border border-border bg-secondary/50 px-3 py-3 transition-all duration-500 hover:border-primary/40 hover:bg-secondary ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            style={{ transitionDelay: `${index * 100 + i * 80}ms` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={28}
              height={28}
              className="shrink-0 rounded"
              loading="lazy"
            />
            <span className="text-sm font-medium text-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
