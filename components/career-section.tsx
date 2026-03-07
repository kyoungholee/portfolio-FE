"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CAREER = [
  {
    period: "2025.06 - Present",
    company: "두손인터내셔널",
    role: "Frontend Developer",
    description:
      "건설 현장 ERP 시스템과 CCTV 관제 시스템의 프론트엔드 개발을 담당하며, 업무 자동화 및 실시간 데이터 모니터링 환경을 구축했습니다.",
    tasks: [
      "Next.js 기반 건설 현장 ERP 시스템 프론트엔드 개발",
      "Recharts 기반 자재·유류·노무 데이터 시각화 대시보드 구현",
      "대규모 데이터 렌더링 성능 최적화 (로딩 5초 → 2초)",
      "GitHub Actions + AWS EC2 기반 CI/CD 배포 파이프라인 구축",
      "Vue.js + hls.js 기반 CCTV HLS 스트리밍 관제 화면 개발",
      "OpenSearch 기반 차량 출차 데이터 실시간 모니터링 UI 구현",
    ],
  },
  {
    period: "2023.08 - 2025.06",
    company: "마이클컴퍼니",
    role: "Frontend Developer",
    description:
      "연구 데이터 관리 시스템과 공공기관 리포트 관리 시스템의 프론트엔드 개발을 담당하며, 엑셀 기반 업무를 웹 시스템으로 전환하고 인증 및 데이터 관리 기능을 설계·구현했습니다.",
    tasks: [
      "엑셀 기반 연구 데이터 관리 업무를 웹 시스템으로 전환하는 UI/UX 설계 및 개발",
      "ToastUI Spreadsheet 기반 웹 스프레드시트 및 데이터 관리 기능 구현",
      "jsPDF 기반 연구 과제 PDF 변환 및 자료 관리 기능 개발",
      "Access/Refresh Token 기반 로그인 및 인증 로직 설계",
      "Axios 인터셉터 기반 토큰 자동 갱신 및 API 재요청 구조 구현",
      "웹 접근성(WA) 및 다국어(i18n) 구조 적용",
    ],
  },
];

export function CareerSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="career" className="px-6 py-28">
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
  );
}

function CareerCard({
  item,
  index,
}: {
  item: (typeof CAREER)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col gap-4 pl-8 transition-all duration-700 md:w-1/2 md:pl-0 ${
        isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Timeline dot */}
      <div
        className={`absolute  top-0.5 h-4 w-4 rounded-full border-2 border-primary bg-background md:top-0.5 md:transform ${
          isLeft
            ? "md:right-0 md:translate-x-1/2"
            : "md:left-0 md:-translate-x-1/2"
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
      <ul className={`flex flex-col gap-1.5 ${isLeft ? "md:items-end" : ""}`}>
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
  );
}
