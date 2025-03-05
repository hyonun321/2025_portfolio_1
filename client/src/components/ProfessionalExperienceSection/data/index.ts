export const experiencesData: { [key: string]: Experience[] } = {
  KR: [
    {
      title: "System Software Engineer",
      period: "2022 - 2023",
      description:
        "반도체 테스트 핸들러 OS SW 엔지니어\n1. Recipe Management System 개발로 작업능률 3배 상승\n2. Git 및 KanbanBoard 도입하여 매뉴얼 배포\n3. 적극적이고 밝은 응대능력으로, 고객사 2개 중 1사 최고만족 달성\n4. 고객응대능력 설문 4명 중 1위 (2022~2023)",
      location: "천안",
      techStack: ["C", "C#", "Windows", "Git", "BitBucket"],
    },
  ],
  EN: [
    {
      title: "System Software Engineer",
      period: "2022 - 2023",
      description:
        "Semiconductor Test Handler OS SW Engineer\n1. Developed a Recipe Management System, tripling work efficiency\n2. Introduced Git and Kanban Board for manual distribution\n3. Achieved highest customer satisfaction in one out of two companies through proactive and positive communication\n4. Ranked 1st among 4 in a customer service survey (2022-2023)",
      location: "Cheonan",
      techStack: ["C", "C#", "Windows", "Git", "BitBucket"],
    },
  ],
  JP: [
    {
      title: "システムソフトウェアエンジニア",
      period: "2022 - 2023",
      description:
        "半導体テストハンドラー OS SWエンジニア\n1. Recipe Management Systemの開発により作業効率が3倍に向上\n2. GitとKanban Boardを導入してマニュアル配布を実施\n3. 積極的で明るい対応により、2社中1社で最高の顧客満足を達成\n4. 顧客対応能力調査で4名中1位 (2022〜2023)",
      location: "チョナン",
      techStack: ["C", "C#", "Windows", "Git", "BitBucket"],
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
