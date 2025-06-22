import { Project } from "@/components/ProjectGridSection/types";

export const CATEGORIES = [
  { id: "all", label: "All", count: 5 },
  { id: "react", label: "React", count: 4 },
  { id: "python", label: "Python", count: 1 },
];

export const translations = {
  KR: {
    header: "MY PROJECT",
    categories: {
      all: "전체",
      react: "React",
      python: "Python",
    },
  },
  EN: {
    header: "MY PROJECT",
    categories: {
      all: "All",
      react: "React",
      python: "Python",
    },
  },
  JP: {
    header: "MY PROJECT",
    categories: {
      all: "全て",
      react: "React",
      python: "Python",
    },
  },
};

export const projectsData: { [key: string]: Project[] } = {
  KR: [
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
    {
      id: 3,
      title: "앱 설치 없이, 웹에서 Doss !",
      technologies: ["React"],
      image: "images/doss.jpg",
      description:
        "React / Typescript / NextJS / Java / Elastic Search / mySQL",
    },
    {
      id: 4,
      title: "잡생각(JobThoughts)",
      technologies: ["React"],
      image: "images/jobthoughts.png", // 실제 이미지 경로에 맞게 수정 필요
      description:
        "React / Typescript / Node.js / Express / Vite / CareerNet API",
    },
    {
      id: 5,
      title: "렛츠커리어",
      technologies: ["React"],
      image: "images/lets_career.png", // 이미지 경로는 실제 파일명에 맞게 수정 필요
      description:
        "React / Next.js / Zustand / Vercel / Typescript / TailwindCSS",
    },
  ],
  EN: [
    {
      id: 1,
      title: "Real-time Collaborative Editor Nocta",
      technologies: ["React"],
      image: "images/nocta_inform.jpg",
      description: "React / Typescript / Vite / PandaCSS / Zustand",
    },
    {
      id: 2,
      title: "Face-Tracking Directional Speaker",
      technologies: ["Python"],
      image: "images/speaker.jpg",
      description: "Python / Raspberry Pi / OpenCV / Haarcascade",
    },
    {
      id: 3,
      title: "No Install like app, Using Doss At Web  !",
      technologies: ["React"],
      image: "images/doss.jpg",
      description:
        "React / Typescript / NextJS / Java / Elastic Search / mySQL",
    },
    {
      id: 4,
      title: "JobThoughts",
      technologies: ["React"],
      image: "images/jobthoughts.png",
      description:
        "React / Typescript / Node.js / Express / Vite / CareerNet API",
    },
    {
      id: 5,
      title: "Let’sCareer",
      technologies: ["React"],
      image: "images/lets_career.png", // 실제 이미지 경로 필요
      description:
        "React / Next.js / Zustand / Vercel / Typescript / TailwindCSS",
    },
  ],
  JP: [
    {
      id: 1,
      title: "リアルタイム共同編集エディター Nocta",
      technologies: ["React"],
      image: "images/nocta_inform.jpg",
      description: "React / Typescript / Vite / PandaCSS / Zustand",
    },
    {
      id: 2,
      title: "顔追跡指向スピーカー",
      technologies: ["Python"],
      image: "images/speaker.jpg",
      description: "Python / Raspberry Pi / OpenCV / Haarcascade",
    },
    {
      id: 3,
      title: "インストール なし, Webで Doss !",
      technologies: ["React"],
      image: "images/doss.jpg",
      description:
        "React / Typescript / NextJS / Java / Elastic Search / mySQL",
    },
    {
      id: 4,
      title: "職業推薦サービス JobThoughts",
      technologies: ["React"],
      image: "images/jobthoughts.png",
      description:
        "React / Typescript / Node.js / Express / Vite / CareerNet API",
    },
    {
      id: 5,
      title: "レッツキャリア",
      technologies: ["React"],
      image: "images/lets_career.png", // 실제 이미지 경로 필요
      description:
        "React / Next.js / Zustand / Vercel / Typescript / TailwindCSS",
    },
  ],
};
