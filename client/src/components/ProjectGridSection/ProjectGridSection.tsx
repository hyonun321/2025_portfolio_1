"use client";
import React, { useState } from "react";
import GridProjectModal from "./components/GridProjectModal";
import Modal from "@/components/common/Modal";
import ProjectCard from "@/components/common/ProjectCard";
import { Project } from "@/types";

// 슬라이드 타입 (ProjectModalContent와 동일)
type SlideData = {
  mediaUrl: string;
  title: string;
  description?: string;
  subTitle?: string;
  link?: string;
  linkTitle?: string;
  link2?: string;
  link2Title?: string;
  link3?: string;
  link3Title?: string;
};

// 프로젝트 카테고리 정의
const CATEGORIES = [
  { id: "all", label: "All", count: 2 },
  { id: "react", label: "React", count: 1 },
  { id: "python", label: "Python", count: 1 },
];

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "실시간 동시편집 에디터 Nocta",
    technologies: ["React"],
    image: "images/nocta_inform.jpg",
    description: "React / Typescript / Vite / PandaCSS / Zustand",
  },
  {
    id: 2,
    title: "얼굴 추적 지향성 스피커",
    technologies: ["Python"],
    image: "images/speaker.jpg",
    description: "Python / Raspberry Pi / OpenCV / Haarcascade",
  },
];
const slidesData: SlideData[][] = [
  [
    {
      mediaUrl: "videos/nocta_background.mp4",
      title: "실시간 동시편집 에디터 Nocta",
      description:
        "연산기반 CRDT를 기반으로 한 실시간 동시편집 에디터  \n 탭 브라우징으로 여러 페이지를 자유롭게 넘나들 수 있습니다. \n 인터랙티브한 요소들로 재밌는 문서작성을 추구합니다. ",
      subTitle: "네이버 부스트캠프 Web 9기 그룹프로젝트 (2024.10 ~ 2024.12)",
      link: "https://nocta.site",
      linkTitle: "View Site",
      link2: "https://github.com/boostcampwm-2024/web33-Nocta",
      link2Title: "Github",
      link3: "https://youtu.be/0AZAixGrMbo?si=71fZcmKYb2AbAlkS",
      link3Title: "Youtube",
    },
    {
      mediaUrl: "images/schema.png",
      title: "CRDT 라이브러리 설계 및 구현",
      description:
        " - 페이지, 블록, 텍스트를 가지는 다중 링크드 리스트로 데이터 구조 설정\n - RGA 기반 이중 링크드리스트로 CRDT 설계, 텍스트블록도 링크드 리스트로 순서 변경 가능 \n - EditorCRDT와 BlockCRDT 분리를 통한 모듈화로 유지보수성 강화 \n 블록 단위 동기화 방식 도입으로 대규모 문서 처리 시 확장성 확보 \n - @noctaCrdt이름으로 pnpm 모노 레포지토리 빌드 React와 Nest.js 에서 접근 가능하도록 설정",
      subTitle:
        "- 중앙 서버에 의존하지 않는 연산기반 CRDT(Conflict-free Replicated Data Type) ",
      link: "https://velog.io/@hyonun/CRDT-구현-여정기-1-CRDT를-사용하고-구현방식을-정해보자",
      linkTitle: "Blog",
    },
    {
      mediaUrl: "videos/nocta_workspace.mp4",
      title: "워크스페이스 권환 관리 시스템 구현",
      subTitle: "사용자별 워크스페이스 접근 권한 시스템 설계 및 구현",
      description:
        " - WebSocket 기반 페이지별 실시간 다중 접속 관리 및 상태 동기 \n - Socket.io를 활용한 실시간 알림 시스템(Toast)으로 협업 경험 개선 ",
      link: "https://velog.io/@hyonun/Socket.io-Workspace-구현-여정기-1-게스트-유저-Workspace-분리화",
      linkTitle: "Blog",
    },
    {
      mediaUrl: "images/nocta_opt.jpg",
      title: "렌더링 시간 55% 개선",
      subTitle: "불필요한 리렌더링 최적화",
      description:
        " - React.memo를 활용 하여 블럭 요소 리렌더링 메모이제이션 \n - 리스트 가상화를 통한 보이는 요소만 렌더링 처리 \n  - Render 11.3ms -> 4.9ms \n Layout effects 1.3ms -> 0.6ms \n Passivce effects 1ms -> 0.6ms \n 총합: 13.6ms -> 6.1ms (55.1% 개선)",
      link: "https://abrupt-feta-9a9.notion.site/CS-958d64dbd60546a9bf75805156168f40?pvs=4",
      linkTitle: "Notion",
    },
    {
      mediaUrl: "images/nocta_edit.jpg",
      title: "시연영상, OnboadingScreen, 아이콘 제작",
      subTitle: "프리미어 프로 및 lotties, phase 활용 ",
      description:
        "- promo 비디오 제작 \n - 타이포그래피 및 ease 트랜지션을 활용하여 시청자의 시선 집중유도 \n - 유저 몰입도를 높이기 위한 온보딩 스크린 제작 ",
      link: "https://abrupt-feta-9a9.notion.site/Nocta-promo-dcc6dc48d7e74f53b455857010c2d2aa?pvs=4",
      linkTitle: "Notion",
    },
    {
      mediaUrl: "images/nocta_edit.jpg",
      title: "배운점",
      subTitle: "takeaway ",
      description:
        "- 잦은 구조 변경으로 인한 초기 설계의 중요성  \n - 지속적인 상황공유와 팀원과 이해관계 일치  \n - 자유롭게 질문할 수 있는 분위기의 중요성 \n ",
    },
  ],
  [
    {
      mediaUrl: "videos/speaker_background.mp4",
      title: "얼굴 추적 지향성 스피커 ",
      subTitle:
        "숭실대학교 졸업작품 경진대회 총장상, 형남공학상 금상 (2020.5 ~ 2020.11)",
      description:
        "\n- 초음파 스피커와 haarcascade를 활용한 얼굴추적 지향성 스피커",
      link: "https://youtu.be/odPTTYyX-1s?si=Tj_n4PJSfy5Z6inz",
      linkTitle: "Youtube",
    },
    {
      mediaUrl: "images/speaker_haarcascade.JPG",
      subTitle: "OpenCV를 활용한 얼굴 특징 분류 cascade 객체 검출기",
      title: "Haarcascade 알고리즘 선정",
      description:
        "- Yolo v3, CNN,DNN에비해 라즈비안(2CPU, 2GB)이라는 제한된 환경에서 동작하기위해 준수한 얼굴 추적률, 빠른 속도를 가짐 \n - frontalface, profileface xml 데이터셋을 동시에 활용하여 얼굴 검출률 향상 \n (동일한 얼굴 출연 영상에서 얼굴 감지 15% 증가)",
    },
    {
      mediaUrl: "images/speaker_3D_modeling.JPG",
      title: "역할 - SW 팀장",
      subTitle: "구성 : 라즈비안, 초음파스피커, MG996R 2개, 3D모델링, 전원선",
      description:
        "- 지향성 스피커 회사와 협업하여 3D 모델링 고안, 전체적인 SW 알고리즘 및 HW환경 구현 \n - MG996R 서보모터로 스피커 지지 및 라즈베리파이 고정",
    },
    {
      mediaUrl: "videos/speaker_jittering.mp4",
      title: "문제 해결 경험",
      subTitle: "서보모터가 불안정한 전압에 의해 요동치는 Jittering 현상",
      description:
        "- 추가 전원 공급 등의 방안이 있었지만 기존 디자인을 활용하기 위해 pigpiod 데몬 활용 \n - CPU에 서보모터용 스레드를 할당하여 OS연산이 서보모터에 영향을 받지 않도록 처리",
    },
    {
      mediaUrl: "videos/speaker_tracking_face.mp4",
      title: "간단한 시연 영상",
      subTitle: "초지향성 스피커가 가지는 마주보면 소리가 들리는 특성을 활용",
      description:
        "- 초당 4f 의 속도로 사용자의 얼굴을 추적 \n - 5초간 얼굴이 감지되지않으면 기본 위치로 초기화 \n - 정면이 검출되지 않으면 옆얼굴 검출 시도 ",
    },
    {
      mediaUrl: "videos/speaker_tracking_face.mp4",
      title: "청각 장애우 학생에게 설문조사 진행",
      subTitle: "실내에서 15분간 노래, 말소리에 따른 소리 집중도 테스트",
      description:
        "- 청각 장애우는 주로 직접 와닿는 소리에 집중을 하기 쉽고, 웅성거리거나 작은소리에는 반응하기 힘들다. \n - 해당 작품은 얼굴을 어디로 이동시켜도 나에게 집중 할 수 있는 소리를 들려주어 청각 장애우에게 정확한 소리를 전달 할 수 있을 것이라고 파악됨.",
    },
    {
      mediaUrl: "videos/speaker_tracking_face.mp4",
      title: "배운 점",
      subTitle: "takeaway ",
      description:
        "- 회사와 협업하며 배운 비지니스 커뮤니케이션 \n - 문제해결을 해결하기 위한 근복적인 원인 파악 (서보모터 지터링) \n - 모델의 활용도에 의해 검출률을 보완할 수 있는것 \n - 제한된 환경에서의 최선의 선택을 하기 위한 방법 탐구 ",
    },
  ],
];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "all") return true;
    return project.technologies.some(
      (tech) => tech.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  return (
    <div className="w-full relative px-4 py-8 z-10 min-h-screen">
      <h1 className="flex flex-col items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
        MY PROJECT
      </h1>

      {/* 카테고리 필터 버튼 */}
      <div className="flex gap-6 mb-12 justify-center">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`relative px-4 py-2 text-xl transition-all ${
              activeCategory === category.id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {category.label}
            <span className="ml-2 text-xs opacity-60">{category.count}</span>
            {activeCategory === category.id && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
            )}
          </button>
        ))}
      </div>

      {/* 프로젝트 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* 모달창 */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <GridProjectModal slides={slidesData[selectedProject.id - 1]} />
        )}
      </Modal>

      {/* 그라데이션 라인 (장식) */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
        <div className="h-1 w-full max-w-xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>
    </div>
  );
}
