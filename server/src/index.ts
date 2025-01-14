// server/src/index.ts
import express from "express";
import cors from "cors";
import path from "path";

// Express 앱 초기화
const app = express();

// 기본 미들웨어 설정
app.use(cors()); // CORS 허용 (개발 환경에서 필요)
app.use(express.json()); // JSON 요청 처리
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // 정적 파일 제공

// 프로젝트 데이터를 위한 간단한 API 라우트
app.get("/api/projects", (req, res) => {
  // 여기서는 예시로 하드코딩된 데이터를 반환합니다
  const projects = [
    {
      id: 1,
      title: "포트폴리오 웹사이트",
      description: "Next.js와 Express를 사용한 SSR 웹사이트",
      technologies: ["Next.js", "React", "Express", "TypeScript"],
      imageUrl: "/uploads/portfolio-thumb.jpg",
    },
    // 더 많은 프로젝트 데이터...
  ];

  res.json(projects);
});

// 서버 시작
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중입니다`);
});
