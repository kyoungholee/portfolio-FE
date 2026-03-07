"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } =
    useScrollAnimation(0.1);

  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
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
            contentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-muted-foreground">
              사용자 경험을 가장 중요하게 생각하는 프론트엔드 개발자입니다.
              엑셀로 처리하던 수작업 업무를 웹 시스템으로 전환하고, 반복적인
              업무를 자동화해 효율성과 데이터 정확도를 개선하는 프로젝트들을
              경험했습니다. 요구사항의 핵심을 빠르게 파악하고 현실적인 해결
              방법을 찾는 것을 강점으로 가지고 있습니다.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              2026년부터는 서비스 고도화 과정에서 개발뿐만 아니라 화면 흐름과
              기능 개선 기획에도 직접 참여하고 있습니다. 실제 현장과 본사를
              방문해 사용자들이 어떤 점을 불편하게 느끼는지 인터뷰하고, 필요한
              기능과 불필요한 기능을 정리해 ERP 시스템 개선에 반영했습니다. 이
              경험을 통해 사용자 문제를 정의하고 제품의 방향을 고민하는 일에
              흥미를 느끼게 되었고, 앞으로는 개발 경험을 바탕으로 제품 기획까지
              이해하는 프로덕트 매니저로 성장하는 것을 목표로 하고 있습니다.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                Information
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-muted-foreground">
                    Name
                  </span>
                  <span className="text-foreground">{"이경호"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-muted-foreground">
                    Role
                  </span>
                  <span className="text-foreground">Frontend Developer</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-muted-foreground">
                    Experience
                  </span>
                  <span className="text-foreground">{"3\uB144"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-muted-foreground">
                    Email
                  </span>
                  <span className="text-foreground">dlrudgh1205@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
