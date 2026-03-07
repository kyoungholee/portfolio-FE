"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ProjectModal, type ProjectDetail } from "@/components/project-modal";

const PROJECTS: ProjectDetail[] = [
  {
    title: "건설 현장 ERP 시스템",
    company: "두손인터내셔널",
    period: "2025.06 - 2026.03 (9개월)",
    description:
      "건설 현장의 자재·유류·노무 데이터를 통합 관리하는 ERP 시스템의 프론트엔드 설계 및 개발을 담당했습니다.",
    fullDescription:
      "기존 건설 현장에서는 자재 사용량, 유류 소모, 출역 정보 등을 종이 문서나 엑셀로 관리하고 있어 데이터 누락과 수기 입력 오류가 자주 발생했습니다. 또한 본사 보고 시 필요한 데이터를 다시 정리해야 해 확인과 집계에 많은 시간이 소요되는 문제가 있었습니다. 이러한 문제를 해결하기 위해 ERP 시스템을 구축하여 자재·노무·외주 데이터를 실시간으로 조회하고 집계할 수 있는 UI/UX를 설계했습니다. React Query 기반 서버 상태 관리와 캐싱 전략을 적용하여 필요한 시점에만 API를 호출하도록 구조를 설계했고, Recharts 기반 데이터 시각화를 통해 현장 데이터를 직관적으로 확인할 수 있도록 개선했습니다. 그 결과 수기 입력과 데이터 검증에 소요되던 시간을 크게 줄이고, 오류와 누락을 최소화하여 현장과 본사 모두에서 효율적으로 데이터를 관리할 수 있는 환경을 구축했습니다.",
    skills: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Zustand",
      "Recharts",
      "Tailwind CSS",
      "GitHub Actions",
    ],
    features: [
      "자재·유류·노무·외주 데이터 통합 관리 ERP UI",
      "Recharts 기반 현장 데이터 시각화 대시보드",
      "현장 및 사용자 권한 기반 데이터 접근 제어",
      "출역 및 장비 데이터 실시간 조회 및 집계 기능",
      "현장 운영 환경을 고려한 반응형 UI 및 사용성 개선",
    ],
    developments: [
      "종이 문서, 엑셀 기반 검증 프로세스를 시스템화하여 비용·수량 검증 소요 시간을 90% 이상 단축",
      "수기 집계로 발생하던 오류 및 누락을 개선하여 월 평균 오류 건수를 20건 → 0건으로 아예 발생하지 않게 구현",
      "출역·장비·유류 데이터를 자동화 처리하여 수작업 입력 비율 70% 이상 감소",
      "Skeleton UI 및 SSR 적용으로 초기 로딩 시 FCP 크게 개선하여 사용자 이탈 및 불확실성 감소",
      "React Query 캐싱 및 요청 구조 최적화를 통해 중복 API 호출을 감소",
      "레이아웃 안정성 개선을 통해 CLS 0.02 이하 달성, 화면 흔들림 문제 해결",
      "GitHub Actions 기반 CI/CD 파이프라인 구축으로 배포 소요 시간을 3분 20초 → 2분 이내로 단축",
      "UI/UX 리뉴얼을 통해 정보 가시성, 접근성, 작업 예측 가능성을 개선하여 사용자 중심의 업무 환경 구축",
    ],
    problemSolving: [
      "대규모 노무명세서 데이터를 렌더링하는 과정에서 31일치 공수 데이터와 공제액 계산 로직으로 인해 발생하던 5초 이상 로딩 문제를 약 2초 수준으로 개선(약 60%)",
      "중첩된 useEffect 기반 상태 업데이트를 제거하고, useMemo 기반 파생 상태 구조로 재설계하여 불필요한 리렌더링 제거",
      "React Query의 병렬 쿼리 및 캐싱 전략을 적용하여 직영·용역·외주 데이터 조회 시 발생하던 네트워크 병목을 해소하고 UI 반응성 개선",
    ],
    deployment: [
      "AWS EC2 환경에서 Next.js Standalone Build 기반 프론트엔드 배포 구조 설계 및 구축",
      "GitHub Actions를 활용해 빌드 → 압축 → EC2 전송 → 무중단 배포까지 자동화된 CI/CD 파이프라인 구현",
      "PM2 기반 Node.js 프로세스 관리 및 무중단 재시작 전략 적용으로 배포 및 장애 발생 시 서비스 안정성 확보",
      "환경 변수 기반 설정 분리를 통해 개발/운영 환경별 API를 독립적으로 관리하는 배포 구조 구현",
      "배포 자동화를 통해 수동 배포 대비 작업 시간 단축 및 휴먼 에러 최소화, 운영 효율성 및 배포 신뢰도 개선",
    ],
    image: "/images/project-erp.jpg",
    detailImages: [
      "/images/project-erp-detail-1.jpg",
      "/images/project-erp-detail-2.jpg",
      "/images/project-erp-detail-3.jpg",
    ],
  },
  {
    title: "건설 현장 CCTV 관제 시스템",
    company: "두손인터내셔널",
    period: "2025.06 - 2026.03 (9개월)",
    description:
      "WebSocket 기반 실시간 채팅 애플리케이션을 개발했습니다. 1:1 채팅, 그룹 채팅, 이미지 전송 등의 기능을 구현했습니다.",
    fullDescription:
      "사내 커뮤니케이션 도구로 사용되는 실시간 채팅 애플리케이션을 처음부터 개발했습니다. Socket.IO를 활용한 양방향 통신으로 실시간 메시지 전송/수신을 구현하고, Redux Toolkit으로 복잡한 채팅방 상태를 관리했습니다. 이미지 업로드 시 클라이언트 사이드 리사이즈를 적용하여 업로드 속도를 60% 개선했으며, 가상 스크롤링으로 대량의 메시지 히스토리를 효율적으로 렌더링했습니다.",
    skills: [
      "React 18",
      "Socket.IO",
      "Styled Components",
      "Redux Toolkit",
      "Vite",
      "Vitest",
    ],
    features: [
      "실시간 메시지 전송/수신 (1:1 및 그룹)",
      "이미지 및 파일 전송 (드래그 앤 드롭)",
      "온라인 상태 표시 및 읽음 확인",
      "메시지 검색 및 고정 기능",
      "알림 설정 및 방해금지 모드",
    ],
    developments: [
      "Socket.IO 기반 실시간 양방향 통신 아키텍처 설계 및 구현",
      "Redux Toolkit으로 채팅방, 메시지, 유저 상태 통합 관리",
      "가상 스크롤링(react-window)으로 1만 건 이상의 메시지 효율적 렌더링",
      "클라이언트 사이드 이미지 리사이즈 및 프리뷰 기능 개발",
      "Service Worker를 활용한 푸시 알림 시스템 구현",
      "Vitest + Testing Library 기반 유닛/통합 테스트 작성 (커버리지 80%+)",
    ],
    image: "/images/project-2.jpg",
    detailImages: [
      "/images/project-2-detail-1.jpg",
      "/images/project-2-detail-2.jpg",
      "/images/project-2-detail-3.jpg",
    ],
  },
  {
    title: "Task Management Tool",
    company: "(주) 프로덕트랩",
    period: "2024.10 - 2025.03 (6개월)",
    description:
      "칸반 보드 형태의 프로젝트 관리 도구를 개발했습니다. 드래그 앤 드롭으로 태스크를 관리하고 팀원별 할당 기능을 구현했습니다.",
    fullDescription:
      "스타트업 내부 생산성 도구로 사용되는 태스크 관리 SaaS를 개발했습니다. Next.js 15 App Router 기반으로 서버 컴포넌트를 적극 활용하여 초기 로딩 성능을 최적화했습니다. dnd-kit 라이브러리로 자연스러운 드래그 앤 드롭 인터랙션을 구현하고, Optimistic UI 패턴으로 네트워크 지연 없는 즉각적인 사용자 경험을 제공했습니다.",
    skills: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "dnd-kit",
      "Playwright",
    ],
    features: [
      "칸반 보드 기반 태스크 관리 UI",
      "드래그 앤 드롭으로 상태 변경",
      "팀원 할당, 우선순위, 마감일 필터",
      "댓글 및 활동 히스토리 타임라인",
      "대시보드 및 번다운 차트",
    ],
    developments: [
      "dnd-kit 기반 멀티 컬럼 드래그 앤 드롭 칸반 보드 구현",
      "Optimistic Update 패턴으로 태스크 이동/수정 시 즉각적 UI 반영",
      "Next.js Server Components로 초기 데이터 프리로딩 최적화",
      "Zustand + immer로 복잡한 보드 상태 관리 (다중 컬럼, 서브태스크)",
      "Playwright E2E 테스트로 주요 사용자 플로우 자동화",
      "Recharts 기반 번다운 차트 및 팀 생산성 대시보드 개발",
    ],
    image: "/images/project-3.jpg",
    detailImages: [
      "/images/project-3-detail-1.jpg",
      "/images/project-3-detail-2.jpg",
      "/images/project-3-detail-3.jpg",
    ],
  },
  {
    title: "Tech Blog Platform",
    company: "개인 프로젝트",
    period: "2025.04 - 현재",
    description:
      "MDX 기반 기술 블로그 플랫폼을 개발했습니다. 코드 하이라이팅, 목차 자동 생성, 다크모드 등의 기능을 구현했습니다.",
    fullDescription:
      "개인 기술 블로그이자 사이드 프로젝트로, Next.js 16과 Tailwind CSS 4를 활용한 최신 기술 스택 기반 블로그 플랫폼입니다. MDX를 활용하여 마크다운 기반으로 글을 작성하면서도 React 컴포넌트를 자유롭게 임베딩할 수 있게 구현했습니다. Vercel에 배포하여 무료로 운영 중이며, 월 1만+ 페이지뷰를 달성하고 있습니다.",
    skills: [
      "Next.js 16",
      "MDX",
      "Tailwind CSS 4",
      "Vercel",
      "Contentlayer",
      "Framer Motion",
    ],
    features: [
      "MDX 기반 글 작성 및 React 컴포넌트 임베딩",
      "코드 하이라이팅 (rehype-prism-plus)",
      "TOC(목차) 자동 생성 및 스크롤 스파이",
      "다크모드 / 라이트모드 지원",
      "RSS 피드 및 sitemap 자동 생성",
    ],
    developments: [
      "Contentlayer를 활용한 MDX 콘텐츠 빌드 파이프라인 구축",
      "rehype/remark 플러그인으로 코드 블록 하이라이팅 및 링크 프리뷰 구현",
      "IntersectionObserver 기반 TOC 스크롤 스파이 커스텀 훅 개발",
      "next-themes를 활용한 다크모드/라이트모드 구현",
      "OG Image 자동 생성 (@vercel/og)으로 소셜 미디어 공유 최적화",
      "Google Analytics + Vercel Analytics 연동으로 트래픽 분석 환경 구축",
    ],
    image: "/images/project-4.jpg",
    detailImages: [
      "/images/project-4-detail-1.jpg",
      "/images/project-4-detail-2.jpg",
      "/images/project-4-detail-3.jpg",
    ],
  },
];

export function ProjectsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null
  );

  return (
    <>
      <section id="projects" className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div
            ref={titleRef}
            className={`mb-16 transition-all duration-700 ${
              titleVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Projects
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Featured Projects
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <FlipCard
                key={project.title}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

function FlipCard({
  project,
  index,
  onClick,
}: {
  project: ProjectDetail;
  index: number;
  onClick: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`perspective-1000 h-[400px] transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className="group relative h-full w-full cursor-pointer"
        onClick={onClick}
        role="button"
        tabIndex={0}
        aria-label={`${project.title} 프로젝트 상세 보기`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <div className="transform-style-3d relative h-full w-full transition-transform duration-700 [.group:hover_&]:rotate-y-180">
          {/* Front - Text */}
          <div className="backface-hidden absolute inset-0 flex flex-col justify-between rounded-xl border border-border bg-card p-6">
            <div>
              <p className="mb-1 text-xs font-medium text-primary">
                {project.company}
              </p>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  {"개발 내용"}
                </h4>
                <ul className="flex flex-col gap-1.5">
                  {project.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.slice(0, 5).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Back - Image */}
          <div className="backface-hidden rotate-y-180 absolute inset-0 overflow-hidden rounded-xl border border-border">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/70 p-6 text-center">
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {"클릭하여 상세 정보 보기"}
              </p>
              <span className="rounded-full border border-primary px-4 py-1.5 text-xs font-medium text-primary">
                View Details
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
