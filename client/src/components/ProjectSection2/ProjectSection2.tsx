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
      "HW/SW 설계 팀장",
      "얼굴추적 알고리즘 활용 개선",
      "지향성 스피커 회사와 협업",
    ],
    technicalExperiences: [
      {
        title: "얼굴검출률 85% 달성",
        points: [
          "frontalFace, profileFace 동시활용으로 얼굴검출률 상승",
          "haarcascade를 활용한 실시간 얼굴추적 (초당 4f)",
          "",
        ],
      },
    ],
    problemSolving: {
      problem: "서보모터 지터링 현상",
      solution: "pigpiod 데몬 도입",
      results: [
        "CPU스레드에 서보모터용 스레드 별도 생성",
        "CPU 부하에 영향 받지 않고 서보모터에 전원 공급",
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
          얼굴 추적 지향성 스피커
        </h1>
      </div>
      <div className="max-w-screen mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <ProjectVideo
          videoRef={videoContainerRef}
          videoUrl="videos/speaker_background.mp4"
          href="https://youtu.be/odPTTYyX-1s?si=yEAzgNQP5KzdvY9l"
        />
      </div>
    </section>
  );
}
