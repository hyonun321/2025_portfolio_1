import { Project } from "@/components/ProjectGridSection/types";

export const CATEGORIES = [
  { id: "all", label: "All", count: 2 },
  { id: "react", label: "React", count: 1 },
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
  ],
};
