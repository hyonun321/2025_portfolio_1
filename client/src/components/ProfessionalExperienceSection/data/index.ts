export const experiencesData: { [key: string]: Experience[] } = {
  KR: [
    {
      title: "토스증권 프론트엔드 디벨로퍼 어시스턴트",
      period: "2025.08 ~",
      description:
        "토스증권 프론트엔드 디벨로퍼 어시스턴트\n1. S3 Object Storage Browser 서비스 프론트엔드 개발/운영\n2. TypeScript, Next.js, Zustand, TanStack Query 기반 상태/데이터 관리\n3. 사용자 경험 개선 및 성능 최적화",
      location: "강남",
      techStack: ["TypeScript", "Next.js", "Zustand", "TanStack Query"],
    },
  ],
  EN: [
    {
      title: "Frontend Developer Assistant, Toss Securities",
      period: "Aug 2025 – Present",
      description:
        "Working on the S3 Object Storage Browser service\n1. Frontend development and operation\n2. State and data management with TypeScript, Next.js, Zustand, and TanStack Query\n3. UX improvements and performance optimization",
      location: "Gangnam",
      techStack: ["TypeScript", "Next.js", "Zustand", "TanStack Query"],
    },
  ],
  JP: [
    {
      title: "トス証券 フロントエンドディベロッパーアシスタント",
      period: "2025.08 〜",
      description:
        "S3 Object Storage Browser サービスに従事\n1. フロントエンドの開発・運用\n2. TypeScript, Next.js, Zustand, TanStack Query による状態/データ管理\n3. UX向上とパフォーマンス最適化",
      location: "カンナム",
      techStack: ["TypeScript", "Next.js", "Zustand", "TanStack Query"],
    },
  ],
};

interface Experience {
  title: string;
  period: string;
  description: string;
  location?: string;
  website?: string;
  techStack?: string[];
}
