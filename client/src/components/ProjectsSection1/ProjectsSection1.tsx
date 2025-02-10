"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ProjectVideo } from "./components/ProjectVideo";
import { RoleSection } from "./components/RoleSection";
import { TechnicalSection } from "./components/TechnicalSection";
import { ProblemSolvingSection } from "./components/ProblemSolvingSection";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection1() {
  // Creating refs for our different elements
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const projectData = {
    roles: [
      "CRDT 라이브러리 설계 및 실시간 동시편집 시스템 구현 리드",
      "워크스페이스 실시간 상호작용 및 권한 관리 기능 개발",
      "Vite와 pnpm 기반의 모노레포 환경을 구축, @noctaCRDT 라이브러리를 설계 후 구현",
      "onBoardingScreen UI Lottie 애니메이션을 활용한 인터랙티브 UI/UX 컴포넌트 설계와 구현",
    ],
    technicalExperiences: [
      {
        title: "CRDT 라이브러리 설계 및 구현",
        points: [
          "RGA 기반 이중 링크드리스트로 CRDT 설계 및 블록 단위 분리, 구조 도입",
          "EditorCRDT와 BlockCRDT 알고리즘을 통한 모듈화로 유지보수성 강화",
          "블록 단위 동기화 방식 도입으로 대규모 문서 처리 시 확장성 확보",
        ],
      },
      // ... other technical experiences
    ],
    problemSolving: {
      problem:
        "다수 사용자의 동시 편집 시 과도한 소켈 통신으로 인한 서버 부하 발생",
      solution:
        "사용자 입력 패턴 분석 (평균 0.5초당 3회 타이핑) 기반 배치 처리 도입",
      results: [
        "초당 소켓 통신량 70% 감소로 서버 리소스 효율화",
        "네트워크 대역폭 사용량 최적화로 안정적인 동기화 성능 확보",
      ],
    },
  };
  useEffect(() => {
    // First, let's set up our main scroll trigger for the entire section
    const sectionTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      markers: true, // Helpful for debugging
    });

    // Now, let's create our pin trigger for the video
    const pinTrigger = ScrollTrigger.create({
      trigger: videoContainerRef.current,
      start: "top 0%", // Adjusting where the pin starts
      end: "bottom 80%", // When to unpin
      pin: true,
      pinSpacing: true,
      markers: true,
    });

    const cards =
      contentRef.current?.querySelectorAll<HTMLElement>(".content-card");
    if (!cards) return; // Early return if no cards found
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      // Cleanup
      sectionTrigger.kill();
      pinTrigger.kill();
    };
  }, []);
  return (
    <section
      id="project-1"
      ref={sectionRef}
      className="min-h-screen relative z-10 pt-10"
    >
      <h1 className="flex items-center justify-center text-5xl font-bold tracking-tight text-white mb-4">
        실시간 동시편집 에디터 Nocta
      </h1>
      <div className="max-w-screen mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectVideo
          videoRef={videoContainerRef}
          videoUrl="videos/nocta_background.mp4"
        />

        <div ref={contentRef} className="space-y-32 py-20 px-4">
          <RoleSection roles={projectData.roles} />
          <TechnicalSection experiences={projectData.technicalExperiences} />
          <ProblemSolvingSection {...projectData.problemSolving} />
        </div>
      </div>
    </section>
  );
}
