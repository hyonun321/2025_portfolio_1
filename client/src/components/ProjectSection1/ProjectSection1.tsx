"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ProjectVideo } from "./components/ProjectVideo";
import { RoleSection } from "./components/RoleSection";
import { TechnicalSection } from "./components/TechnicalSection";
import { ProblemSolvingSection } from "./components/ProblemSolvingSection";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);

  const projectData = {
    roles: [
      "CRDT 라이브러리 설계",
      "실시간 동시편집 시스템 구현 리드",
      "socket.io 유저별 워크스페이스 구현",
      "onBoardingScreen 구현",
      "로티 애니메이션 아이콘 제작",
      "기술 시연 영상 제작",
    ],
    technicalExperiences: [
      {
        title: "CRDT 라이브러리 설계 및 구현",
        points: [
          "RGA 기반 이중 링크드리스트로 CRDT 설계 및 블록 단위 분리, 구조 도입",
          "EditorCRDT와 BlockCRDT 알고리즘을 통한 모듈화로 유지보수성 강화",
          "블록 단위 동기화 방식으로 블록 타입 확장성 증가",
        ],
      },
    ],
    problemSolving: {
      problem: "과도한 리렌더링 발생으로 성능 부하 발생",
      solution: "React.memo 및 DocumentFragment 도입",
      results: [
        "기존대비 55% 렌더링 시간 감소",
        "리스트 가상화를 통한 리플로우 발생시 렌더 개수 최적화",
      ],
    },
  };

  useEffect(() => {
    if (
      !sectionRef.current ||
      !titleRef.current ||
      !videoContainerRef.current ||
      !contentRef.current ||
      !roleRef.current ||
      !techRef.current ||
      !problemRef.current
    )
      return;

    // 총 스크롤 지속시간(타임라인 길이)을 11초로 설정 (필요에 따라 조절)
    const totalDuration = 3.5;
    const totalScrollDistance = window.innerHeight * totalDuration;

    gsap.set(roleRef.current, { opacity: 0, y: window.innerHeight / 3 - 50 });
    gsap.set(techRef.current, { opacity: 0, y: window.innerHeight / 3 - 50 });
    gsap.set(problemRef.current, {
      opacity: 0,
      y: window.innerHeight / 3 - 50,
    });

    // 타이틀을 전체 스크롤 동안 고정 (pin)
    ScrollTrigger.create({
      trigger: titleRef.current,
      start: "top top",
      end: () => `+=${totalScrollDistance}`,
      pin: true,
      pinSpacing: false,
    });

    // 비디오도 전체 스크롤 동안 고정
    ScrollTrigger.create({
      trigger: videoContainerRef.current,
      start: "top",
      end: () => `+=${totalScrollDistance}`,
      pin: true,
      pinSpacing: true,
    });

    // content 영역 전체에 대해 스크롤에 따른 타임라인 적용
    const masterTL = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top top",
        end: () => `+=${totalScrollDistance}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    // 타임라인 구성
    // 롤 섹션: 2초간 유지 → 1초 fade out
    // 테크 섹션: 1초 fade in → 2초 유지 → 1초 fade out
    // 프러블럼 섹션: 1초 fade in → 2초 유지 → 1초 fade out
    masterTL
      .to(roleRef.current, {
        opacity: 1,
        y: window.innerHeight / 3,
        duration: 1,
        ease: "power1.out",
      })
      .to({}, { duration: 3 })
      .to(roleRef.current, {
        opacity: 0,
        y: window.innerHeight / 3 + 50,
        duration: 1,
        ease: "power1.in",
      })
      .to(techRef.current, {
        opacity: 1,
        y: window.innerHeight / 3,
        duration: 1,
        ease: "power1.out",
      })
      .to({}, { duration: 3 })
      .to(techRef.current, {
        opacity: 0,
        y: window.innerHeight / 3 + 50,
        duration: 1,
        ease: "power1.in",
      })
      .to(problemRef.current, {
        opacity: 1,
        y: window.innerHeight / 3,
        duration: 1,
        ease: "power1.out",
      })
      .to({}, { duration: 3 })
      .to(problemRef.current, {
        opacity: 0,
        y: window.innerHeight / 3 + 50,
        duration: 1,
        ease: "power1.in",
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section
      id="project-1"
      ref={sectionRef}
      className="min-h-screen relative z-10 pt-10"
    >
      <div ref={titleRef} className="w-full backdrop-blur-sm py-4 z-20">
        <h1 className="flex flex-col items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          실시간 동시편집 에디터 Nocta
        </h1>
      </div>
      <div className="max-w-screen mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectVideo
          videoRef={videoContainerRef}
          videoUrl="videos/nocta_background.mp4"
          href="https://youtu.be/0AZAixGrMbo?si=XYzCG6aHaeZS5cbu"
        />
        <div ref={contentRef} className="relative min-h-screen ">
          <div
            ref={roleRef}
            className="absolute w-full flex items-center  z-20 p-4"
          >
            <RoleSection roles={projectData.roles} />
          </div>
          <div
            ref={techRef}
            className="absolute w-full flex items-center  z-20 p-4"
          >
            <TechnicalSection experiences={projectData.technicalExperiences} />
          </div>
          <div
            ref={problemRef}
            className="absolute w-full flex items-center  z-20 p-4"
          >
            <ProblemSolvingSection {...projectData.problemSolving} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
        <div className="h-1 w-full max-w-xl mx-auto bg-gradient-purple " />
      </div>
    </section>
  );
}
