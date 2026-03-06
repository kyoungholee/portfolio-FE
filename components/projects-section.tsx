"use client"

import { useState } from "react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ProjectModal, type ProjectDetail } from "@/components/project-modal"

const PROJECTS: ProjectDetail[] = [
  {
    title: "E-Commerce Platform",
    company: "(주) 커머스테크",
    period: "2024.03 - 2024.09 (7개월)",
    description:
      "대규모 이커머스 플랫폼의 프론트엔드를 담당하여 상품 목록, 검색, 결제 플로우 등 주요 기능을 개발했습니다.",
    fullDescription:
      "MAU 50만 이상의 이커머스 플랫폼 리뉴얼 프로젝트에서 프론트엔드 개발을 담당했습니다. 기존 레거시 코드(jQuery 기반)를 Next.js 14 App Router로 전환하며 SSR/ISR을 활용한 SEO 최적화를 진행했습니다. Zustand를 활용한 글로벌 상태 관리와 TanStack Query를 통한 서버 상태 관리로 데이터 흐름을 개선했으며, 상품 검색/필터링 UX를 개선하여 사용자 전환율을 12% 향상시켰습니다.",
    skills: ["Next.js 14", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Storybook"],
    features: [
      "상품 검색 및 다중 필터링 (카테고리, 가격대, 브랜드)",
      "장바구니 및 결제 시스템 (PG사 연동)",
      "SSR/ISR 기반 SEO 최적화",
      "반응형 디자인 (모바일 퍼스트)",
      "실시간 재고 현황 표시",
    ],
    developments: [
      "상품 목록 페이지 무한 스크롤 및 필터링 시스템 구현",
      "장바구니 → 주문 → 결제 플로우 전체 프론트엔드 개발",
      "Zustand를 활용한 장바구니 상태 관리 및 로컬 스토리지 동기화",
      "Next.js ISR로 상품 상세 페이지 빌드 타임 렌더링 구현",
      "Storybook 기반 컴포넌트 문서화 및 디자인 시스템 구축",
      "Lighthouse 성능 점수 95+ 달성 (이미지 최적화, 번들 분석)",
    ],
    image: "/images/project-1.jpg",
    detailImages: [
      "/images/project-1-detail-1.jpg",
      "/images/project-1-detail-2.jpg",
      "/images/project-1-detail-3.jpg",
    ],
  },
  {
    title: "Real-time Chat App",
    company: "(주) 소셜커넥트",
    period: "2023.08 - 2024.02 (7개월)",
    description:
      "WebSocket 기반 실시간 채팅 애플리케이션을 개발했습니다. 1:1 채팅, 그룹 채팅, 이미지 전송 등의 기능을 구현했습니다.",
    fullDescription:
      "사내 커뮤니케이션 도구로 사용되는 실시간 채팅 애플리케이션을 처음부터 개발했습니다. Socket.IO를 활용한 양방향 통신으로 실시간 메시지 전송/수신을 구현하고, Redux Toolkit으로 복잡한 채팅방 상태를 관리했습니다. 이미지 업로드 시 클라이언트 사이드 리사이즈를 적용하여 업로드 속도를 60% 개선했으며, 가상 스크롤링으로 대량의 메시지 히스토리를 효율적으로 렌더링했습니다.",
    skills: ["React 18", "Socket.IO", "Styled Components", "Redux Toolkit", "Vite", "Vitest"],
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
    skills: ["Next.js 15", "TypeScript", "Tailwind CSS", "Zustand", "dnd-kit", "Playwright"],
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
    skills: ["Next.js 16", "MDX", "Tailwind CSS 4", "Vercel", "Contentlayer", "Framer Motion"],
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
]

export function ProjectsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null)

  return (
    <>
      <section id="projects" className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div
            ref={titleRef}
            className={`mb-16 transition-all duration-700 ${
              titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
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
  )
}

function FlipCard({
  project,
  index,
  onClick,
}: {
  project: ProjectDetail
  index: number
  onClick: () => void
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

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
            e.preventDefault()
            onClick()
          }
        }}
      >
        <div className="transform-style-3d relative h-full w-full transition-transform duration-700 [.group:hover_&]:rotate-y-180">
          {/* Front - Text */}
          <div className="backface-hidden absolute inset-0 flex flex-col justify-between rounded-xl border border-border bg-card p-6">
            <div>
              <p className="mb-1 text-xs font-medium text-primary">{project.company}</p>
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
  )
}
