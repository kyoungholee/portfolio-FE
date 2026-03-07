"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

export interface ProjectDetail {
  title: string;
  company: string;
  period: string;
  description: string;
  fullDescription: string;
  skills: string[];
  features: string[];
  developments: string[];
  problemSolving?: string[];
  deployment?: string[];
  image: string;
  detailImages: string[];
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectDetail | null;
  onClose: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close modal"
        >
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
              {project.company}
            </p>
            <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
              {project.title}
            </h2>
            <p className="text-sm text-muted-foreground">{project.period}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              {"\uD504\uB85C\uC81D\uD2B8 \uC124\uBA85"}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              {"\uC8FC\uC694 \uAE30\uB2A5"}
            </h3>
            <ul className="flex flex-col gap-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* What I developed (성과 기반 정리) */}
          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              담당 개발 내용
            </h3>
            <ul className="flex flex-col gap-2">
              {project.developments.map((dev) => (
                <li
                  key={dev}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
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
                    className="mt-0.5 shrink-0 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {dev}
                </li>
              ))}
            </ul>
          </div>

          {/* 프로젝트 문제 해결 사항 */}
          {project.problemSolving && project.problemSolving.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                프로젝트 문제 해결 사항
              </h3>
              <ul className="flex flex-col gap-2">
                {project.problemSolving.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 배포/운영 */}
          {project.deployment && project.deployment.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                배포/운영
              </h3>
              <ul className="flex flex-col gap-2">
                {project.deployment.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Project Images */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
              {"\uD504\uB85C\uC81D\uD2B8 \uC2A4\uD06C\uB9B0\uC0F7"}
            </h3>
            <div className="flex flex-col gap-4">
              {project.detailImages.map((img, i) => (
                <div
                  key={img}
                  className="relative aspect-video w-full overflow-hidden rounded-lg border border-border"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
