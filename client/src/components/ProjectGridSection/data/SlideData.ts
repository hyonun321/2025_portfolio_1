export type SlideData = {
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

export const slidesData: SlideData[][] = [
  [
    {
      mediaUrl: "videos/nocta_background.mp4",
      title: "실시간 동시편집 에디터 Nocta",
      description:
        "연산기반 CRDT를 기반으로 한 실시간 동시편집 에디터  \n - 탭 브라우징으로 여러 페이지를 자유롭게 넘나들 수 있습니다. \n - 인터랙티브한 요소들로 재밌는 문서작성을 추구합니다. ",
      subTitle: "네이버 부스트캠프 Web 9기 그룹프로젝트 (2024.10 ~ 2024.12)",
      link: "https://nocta.site",
      linkTitle: "Site",
      link2: "https://github.com/boostcampwm-2024/web33-Nocta",
      link2Title: "Github",
      link3: "https://youtu.be/0AZAixGrMbo?si=71fZcmKYb2AbAlkS",
      link3Title: "Youtube",
    },
    {
      mediaUrl: "images/schema.png",
      title: "CRDT 라이브러리 설계 및 구현",
      description:
        " - 페이지, 블록, 텍스트를 가지는 다중 링크드 리스트로 데이터 구조 설정\n - RGA 기반 이중 링크드리스트로 CRDT 설계, 텍스트블록도 링크드 리스트로 순서 변경 가능 \n - EditorCRDT와 BlockCRDT 분리를 통한 모듈화로 유지보수성 강화 \n - 블록 단위 동기화 방식 도입으로 대규모 문서 처리 시 확장성 확보 \n - @noctaCrdt이름으로 pnpm 모노 레포지토리 빌드 React와 Nest.js 에서 접근 가능하도록 설정",
      subTitle:
        "중앙 서버에 의존하지 않는 연산기반 CRDT(Conflict-free Replicated Data Type) ",
      link: "https://velog.io/@hyonun/CRDT-구현-여정기-1-CRDT를-사용하고-구현방식을-정해보자",
      linkTitle: "Blog",
    },
    {
      mediaUrl: "videos/nocta_workspace.mp4",
      title: "워크스페이스 권한 관리 시스템 구현",
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
      mediaUrl: "images/nocta_feedback.JPG",
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
        "- 회사와 협업하며 배운 비지니스 커뮤니케이션 \n - 문제해결을 위한 근본적인 원인 파악 (서보모터 지터링) \n - 모델의 활용도에 따라 검출률 보완 \n - 제한된 환경에서 최선의 선택을 하기 위한 방법 탐구 ",
    },
  ],
  [
    {
      mediaUrl: "videos/doss_promo.mp4",
      title: "앱 설치 없이, 웹에서 Doss ",
      subTitle:
        "LG 유레카 프론트엔드 미니 프로젝트 (2025.03.13. ~ 2025.03.21) 9days",
      description: "\n- Toss 카피앱, 주식 정보 모아보기 앱라이크 웹 서비스",
      link: "https://youtu.be/vD-YFp99zmY?si=dT1TFnv6ajCU-NtQ",
      linkTitle: "Youtube",
    },
    {
      mediaUrl: "videos/doss_promo.mp4",
      subTitle: "팀장 (총 팀원 2명)",
      title: "역할",
      description:
        "- 앱과 같은 사용성 중시, figma를 통해 디자인 제작 \n - 컴포지블UI 스타일로 FE 컴포넌트 구조 설계 \n - promo 영상 제작 (premiere pro) \n - 파운데이션 제작 후, 플로우 차트에 따라 시안 제작",
      link: "https://www.figma.com/proto/Zpf6U1PgXsYQnZiomc2QSF/%EC%9C%A0%EB%A0%88%EC%B9%B4-3%ED%8C%80-MINI-PROJECT?node-id=132-4914&t=mBdT3P4pwjsJo7Ki-1",
      linkTitle: "Figma",
    },

    {
      mediaUrl: "images/doss_search.gif",
      title: "검색결과 자동완성 구현",
      subTitle: "엘라스틱 서치, 디바운싱 ",
      description:
        "- 0.3ms 단위로 디바운싱 적용하여 서버에 검색어 요청  \n - 엘라스틱 서치: 주식 검색 사용, 6000개의 주식정보(국내/해외) 엘라스틱 서치에 반영 \n - 엘라스틱 서치를 통해 얻은 주식 종목코드를 통한 실시간 금액 확인 기능 \n - MySQL과 엘라스틱 서치 비교글 작성",
      link: "https://velog.io/@hyonun/%EC%97%98%EB%9D%BC%EC%8A%A4%ED%8B%B1%EC%84%9C%EC%B9%98-vs-MySQL-%EB%B9%84%EA%B5%90#%F0%9F%A7%AD-mysql-vs-%EC%97%98%EB%9D%BC%EC%8A%A4%ED%8B%B1-%EC%84%9C%EC%B9%98-%EB%B9%84%EA%B5%90",
      linkTitle: "Blog",
    },
    {
      mediaUrl: "images/doss_home.gif",
      title: "한국투자증권 API 연동 실시간 주식정보 ",
      subTitle: "Spring, java",
      description:
        " - 한국투자증권 API활용하여 거래대금/거래량/급상승/급하락 정보 조회\n - useEffect를 통해 서버에 주식정보 요청 \n - 서버는 1분 이내면 캐시된 데이터를 보내며 1분단위로 주식 가격을 갱신\n - 추후 Websocket 으로 연동하여 실시간으로 가격 변동 반영 예정",
    },
    {
      mediaUrl: "images/doss_funnel.gif",
      title: "toss 라이브러리 적용 ",
      subTitle: "@toss/useFunnel, @toss/impression-area",
      description:
        " - 회원가입의 퍼널상태 저장을 위해 사용 \n - 간편한 상태관리와 깔끔한 코드 작성가능 \n - 뷰포트에 보여지거나 사라지는 시점에 이벤트를 발생시키는 컴포넌트 사용",
    },
    {
      mediaUrl: "images/doss.jpg",
      title: "배운점",
      subTitle: "takeaway",
      description:
        "- 앱환경에서 필요한 사용자 인터랙션의 이해 \n - 엘라스틱서치 및 백엔드 환경의 이해 (Controller, Service, Dao, Dto) \n - figma 디자인 시스템 설계 이해",
    },
  ],
  [
    {
      mediaUrl: "images/jobthoughts.png",
      title: "잡생각(JobThoughts)",
      subTitle: "사용자의 성향을 기반으로 진로를 제안하는 채용 연계 서비스",
      description:
        "프론트엔드 미니 프로젝트 (2025.03) / 4인 협업 / 10일간 개발",
      link: "https://www.canva.com/design/DAGm6Gp7AEs/RV6anLgGtHmjVq6RjZv9dw/view?utm_content=DA%5B%E2%80%A6%5Dhare&utm_medium=link2&utm_source=uniquelinks&utlId=h4543e21b68",
      linkTitle: "Demo PDF",
      link2: "https://job-thoughts-client.vercel.app/",
      link2Title: "Site",
    },
    {
      mediaUrl: "videos/jobthoughts_2.mp4",
      title: "첫 진입 애니메이션 구성",
      subTitle: "Framer Motion / Sticky / Typography 연출",
      description:
        "- 스크롤 기반의 반응형 애니메이션 설계\n- 직관적인 직업 선택 흐름을 유도하는 인터랙티브 UI\n- sticky 섹션으로 서비스 이용 단계를 명확히 전달",
    },
    {
      mediaUrl: "videos/jobthoughts_3.mp4",
      title: "직업 가치관 검사 구현",
      subTitle: "CareerNet API 연동 및 카드 선택형 테스트",
      description:
        "- 카드 슬라이드 전환 애니메이션 구현\n- 키보드 입력 기반 문항 선택 UX\n- 커리어넷 API 기반 직업 추천 데이터 파싱 처리",
    },
    {
      mediaUrl: "images/jobthoughts_4.gif",
      title: "검사 결과 시각화",
      subTitle: "Nivo 라이브러리를 활용한 레이더 차트 구현",
      description:
        "- 선택한 직업군에 따른 가치관 점수 시각화\n- 사용자 클릭 시, 해당 직업의 채용공고로 연결\n- 향후 실제 채용정보 API 연동 예정",
    },
    {
      mediaUrl: "videos/jobthoughts_5.mp4",
      title: "반응형 설계 및 사용자 흐름 중심 UI",
      subTitle: "전 디바이스 대응 및 인터랙션 최적화",
      description:
        "- 사용자 사용 흐름에 맞춘 컴포넌트 배치\n- 모바일/태블릿 대응을 위한 clamp, media query 적용\n- onClick, 키보드 입력 중심 UI/UX 구성",
    },
    {
      mediaUrl: "images/jobthoughts_6.png",
      title: "배포 및 크롤링 자동화",
      subTitle: "Vercel / Render 배포, Puppeteer 기반 채용공고 수집",
      description:
        "- 프론트: Vercel / 백엔드: Render\n- Puppeteer로 채용 사이트 크롤링 테스트 경험\n- SEO 및 성능 최적화를 위한 SSR 고려",
    },
    {
      mediaUrl: "images/jobthoughts_7.png",
      title: "협업과 회고",
      subTitle: "4인 팀워크 기반 프로젝트 수행",
      description:
        "- 컴포넌트 설계부터 데이터 흐름까지 협업 중심 개발\n- 기술 위키 정리 및 역할 분담에 따른 효율적인 작업 진행\n- 사용자에게 직업 선택이라는 명확한 목적 전달에 집중",
    },
  ],
];

export const slidesDataEN: SlideData[][] = [
  [
    {
      mediaUrl: "videos/nocta_background.mp4",
      title: "Real-time Collaborative Editor Nocta",
      description:
        "Real-time collaborative editor based on operational CRDT \n - Navigate freely through multiple pages with tab browsing. \n - Pursues engaging document creation with interactive elements.",
      subTitle: "Naver Boostcamp Web Batch 9 Group Project (2024.10 ~ 2024.12)",
      link: "https://nocta.site",
      linkTitle: "Site",
      link2: "https://github.com/boostcampwm-2024/web33-Nocta",
      link2Title: "Github",
      link3: "https://youtu.be/0AZAixGrMbo?si=71fZcmKYb2AbAlkS",
      link3Title: "Youtube",
    },
    {
      mediaUrl: "images/schema.png",
      title: "Design and Implementation of CRDT Library",
      description:
        " - Establish data structure with a multi-linked list containing pages, blocks, and texts\n - Design CRDT using a double-linked list based on RGA, allowing text blocks to be reordered\n - Enhance maintainability through modularization by separating EditorCRDT and BlockCRDT\n - Ensure scalability for large documents by adopting block-level synchronization\n - Configure accessibility from React and Nest.js by building a pnpm monorepository under the name @noctaCrdt",
      subTitle:
        "Operational CRDT (Conflict-free Replicated Data Type) independent of a central server",
      link: "https://velog.io/@hyonun/CRDT-구현-여정기-1-CRDT를-사용하고-구현방식을-정해보자",
      linkTitle: "Blog",
    },
    {
      mediaUrl: "videos/nocta_workspace.mp4",
      title: "Implementation of Workspace Permission Management System",
      subTitle:
        "Design and implementation of user-specific workspace access control system",
      description:
        " - Real-time multi-connection management and state synchronization per page using WebSocket\n - Enhance collaborative experience with a real-time notification system (Toast) using Socket.io",
      link: "https://velog.io/@hyonun/Socket.io-Workspace-구현-여정기-1-게스트-유저-Workspace-분리화",
      linkTitle: "Blog",
    },
    {
      mediaUrl: "images/nocta_opt.jpg",
      title: "55% Improvement in Rendering Time",
      subTitle: "Optimization to reduce unnecessary re-renders",
      description:
        " - Use React.memo for memoizing block re-rendering\n - Render only visible elements via list virtualization\n  - Render: 11.3ms -> 4.9ms\n Layout effects: 1.3ms -> 0.6ms\n Passive effects: 1ms -> 0.6ms\n Total: 13.6ms -> 6.1ms (55.1% improvement)",
      link: "https://abrupt-feta-9a9.notion.site/CS-958d64dbd60546a9bf75805156168f40?pvs=4",
      linkTitle: "Notion",
    },
    {
      mediaUrl: "images/nocta_edit.jpg",
      title: "Demo Video, Onboarding Screen, Icon Production",
      subTitle: "Utilizing Premiere Pro, Lotties, and Phase",
      description:
        "- Produced promo video\n - Utilized typography and ease transitions to capture viewer attention\n - Created an onboarding screen to enhance user immersion",
      link: "https://abrupt-feta-9a9.notion.site/Nocta-promo-dcc6dc48d7e74f53b455857010c2d2aa?pvs=4",
      linkTitle: "Notion",
    },
    {
      mediaUrl: "images/nocta_edit.jpg",
      title: "Lessons Learned",
      subTitle: "Takeaway",
      description:
        "- The importance of initial design due to frequent structural changes\n - Continuous communication and alignment of interests among team members\n - The importance of an environment where questions can be asked freely",
    },
  ],
  [
    {
      mediaUrl: "videos/speaker_background.mp4",
      title: "Face-Tracking Directional Speaker",
      subTitle:
        "Sungshil University Graduation Project Competition: President’s Award, Hyeongnam Engineering Award (2020.5 ~ 2020.11)",
      description:
        "\n- Directional speaker utilizing ultrasonic speaker and haarcascade for face tracking",
      link: "https://youtu.be/odPTTYyX-1s?si=Tj_n4PJSfy5Z6inz",
      linkTitle: "Youtube",
    },
    {
      mediaUrl: "images/speaker_haarcascade.JPG",
      title: "Selection of Haarcascade Algorithm",
      subTitle:
        "Cascade object detector for face feature classification using OpenCV",
      description:
        "- Achieved respectable face tracking rate and fast speed in a constrained environment (Raspbian with 2CPU, 2GB) compared to Yolo v3, CNN, DNN\n - Improved face detection rate by simultaneously utilizing frontalface and profileface XML datasets\n (15% increase in face detection in videos featuring the same person)",
    },
    {
      mediaUrl: "images/speaker_3D_modeling.JPG",
      title: "Role - SW Team Lead",
      subTitle:
        "Components: Raspbian, Ultrasonic Speaker, 2x MG996R, 3D Modeling, Power Cable",
      description:
        "- Collaborated with a directional speaker company to design 3D modeling, and implement overall SW algorithm and HW environment\n - Used MG996R servo motors to support the speaker and secure the Raspberry Pi",
    },
    {
      mediaUrl: "videos/speaker_jittering.mp4",
      title: "Problem-solving Experience",
      subTitle: "Jittering caused by unstable voltage to the servo motor",
      description:
        "- Although alternatives like additional power supply were available, the pigpiod daemon was used to maintain the original design\n - Allocated a dedicated thread for the servo motor on the CPU to prevent OS computations from affecting the servo motor",
    },
    {
      mediaUrl: "videos/speaker_tracking_face.mp4",
      title: "Brief Demo Video",
      subTitle:
        "Utilizing the feature of a directional speaker where sound is heard when facing each other",
      description:
        "- Tracks the user's face at a speed of 4 frames per second\n - Resets to default position if no face is detected for 5 seconds\n - Attempts to detect a side face if the frontal face is not detected",
    },
    {
      mediaUrl: "videos/speaker_tracking_face.mp4",
      title: "Survey with Hearing-Impaired Students",
      subTitle:
        "15-minute test of sound concentration with singing and speaking indoors",
      description:
        "- Hearing-impaired individuals tend to focus on sounds that directly impact them and may struggle to respond to murmurs or faint sounds.\n - This work was found to deliver clear sound that allows them to concentrate on the speaker regardless of face movement",
    },
    {
      mediaUrl: "videos/speaker_tracking_face.mp4",
      title: "Lessons Learned",
      subTitle: "Takeaway",
      description:
        "- Learned business communication through collaboration\n - Identified the root causes for problem-solving (servo motor jittering)\n - Improved detection rate based on the model's utilization\n - Explored methods to make the best choices in a constrained environment",
    },
  ],
  [
    {
      mediaUrl: "videos/doss_promo.mp4",
      title: "Doss on the Web, No App Installation Needed",
      subTitle:
        "LG Eureka Frontend Mini Project (2025.03.13 ~ 2025.03.21) 9 days",
      description:
        "\n- Toss copy app, stock information aggregator web service",
      link: "https://youtu.be/vD-YFp99zmY?si=dT1TFnv6ajCU-NtQ",
      linkTitle: "Youtube",
    },
    {
      mediaUrl: "videos/doss_promo.mp4",
      title: "Role",
      subTitle: "Team Leader (Total team members: 2)",
      description:
        "- Emphasized app-like usability, created designs using Figma\n - Designed frontend component structure with composable UI style\n - Produced promo video (Premiere Pro)\n - Created foundation and developed prototypes according to flow chart",
      link: "https://www.figma.com/proto/Zpf6U1PgXsYQnZiomc2QSF/%EC%9C%A0%EB%A0%88%EC%B9%B4-3%ED%8C%80-MINI-PROJECT?node-id=132-4914&t=mBdT3P4pwjsJo7Ki-1",
      linkTitle: "Figma",
    },
    {
      mediaUrl: "images/doss_search.gif",
      title: "Implementation of Search Autocomplete",
      subTitle: "Elasticsearch, Debouncing",
      description:
        "- Applied 0.3ms debouncing to search term requests to server\n - Elasticsearch: Used for stock searches, indexed 6000 stock information items (domestic/international)\n - Real-time price checking function using stock codes obtained through Elasticsearch",
    },
    {
      mediaUrl: "images/doss_home.gif",
      title: "Real-time Stock Information via Korea Investment Securities API",
      subTitle: "Spring, Java",
      description:
        "- Utilized Korea Investment Securities API to view trading volume/value and rapid rise/fall information\n - Used useEffect to request stock information from server\n - Server sends cached data if within 1 minute and updates stock prices every minute\n - Planning to implement Websocket connection for real-time price updates in the future",
    },
    {
      mediaUrl: "images/doss_funnel.gif",
      title: "Implementation of Toss Libraries",
      subTitle: "@toss/useFunnel, @toss/impression-area",
      description:
        "- Used for storing funnel states in the signup process\n - Enables simple state management and clean code writing\n - Utilized components that trigger events when elements appear or disappear from the viewport",
    },
    {
      mediaUrl: "images/doss.jpg",
      title: "Lessons Learned",
      subTitle: "Takeaway",
      description:
        "- Understanding user interactions needed in app environments\n - Understanding of Elasticsearch and backend environments (Controller, Service, Dao, Dto)\n - Understanding Figma design system planning",
    },
  ],
  [
    {
      mediaUrl: "images/jobthoughts.png",
      title: "JobThoughts",
      subTitle:
        "A job recommendation service based on user values and preferences",
      description:
        "Frontend mini project (Mar 2025) / Team of 4 / 10-day development",
      link: "https://www.canva.com/design/DAGm6Gp7AEs/RV6anLgGtHmjVq6RjZv9dw/view?utm_content=DA%5B%E2%80%A6%5Dhare&utm_medium=link2&utm_source=uniquelinks&utlId=h4543e21b68",
      linkTitle: "Demo PDF",
      link2: "https://job-thoughts-client.vercel.app/",
      link2Title: "Site",
    },
    {
      mediaUrl: "videos/jobthoughts_2.mp4",
      title: "Intro Animation & User Flow Design",
      subTitle: "Framer Motion / Sticky Sections / Typography Animation",
      description:
        "- Scroll-based responsive animation\n- Intuitive flow guiding job selection\n- Sticky animation used to represent service steps",
    },
    {
      mediaUrl: "videos/jobthoughts_3.mp4",
      title: "Career Value Test Implementation",
      subTitle: "Card Deck UI / Keyboard Navigation / CareerNet API",
      description:
        "- Slide transition animation for card choices\n- Keyboard-based interaction\n- Integrated CareerNet API for real-time job recommendation",
    },
    {
      mediaUrl: "images/jobthoughts_4.gif",
      title: "Result Visualization",
      subTitle: "Radar chart using Nivo",
      description:
        "- Visualized personal value alignment with jobs\n- Job click leads to recruitment page\n- Future plan: connect to live job openings",
    },
    {
      mediaUrl: "videos/jobthoughts_5.mp4",
      title: "Responsive UI Based on User Journey",
      subTitle: "Fully mobile-friendly and interactive design",
      description:
        "- UI structured around user's behavior flow\n- Responsive styling with clamp, media queries\n- Supports both click and keyboard navigation",
    },
    {
      mediaUrl: "images/jobthoughts_6.png",
      title: "Deployment & Crawling Automation",
      subTitle: "Deployed via Vercel & Render / Puppeteer experience",
      description:
        "- Frontend deployed with Vercel, backend with Render\n- Crawling experience using Puppeteer for job info\n- SEO and performance optimized",
    },
    {
      mediaUrl: "images/jobthoughts_7.png",
      title: "Teamwork and Reflections",
      subTitle: "Efficient collaboration across 4 developers",
      description:
        "- Worked collaboratively from UI to backend\n- Shared tech documentation and design conventions\n- Focused on delivering clear career exploration flow",
    },
  ],
];

export const slidesDataJP: SlideData[][] = [
  [
    {
      mediaUrl: "videos/nocta_background.mp4",
      title: "リアルタイム共同編集エディター Nocta",
      description:
        "演算ベースのCRDTを採用したリアルタイム共同編集エディター \n - タブブラウジングで複数ページを自由に移動可能 \n - インタラクティブな要素で楽しいドキュメント作成を追求",
      subTitle:
        "NAVER Boostcamp Web 第9期 グループプロジェクト (2024.10 ~ 2024.12)",
      link: "https://nocta.site",
      linkTitle: "Site",
      link2: "https://github.com/boostcampwm-2024/web33-Nocta",
      link2Title: "Github",
      link3: "https://youtu.be/0AZAixGrMbo?si=71fZcmKYb2AbAlkS",
      link3Title: "Youtube",
    },
    {
      mediaUrl: "images/schema.png",
      title: "CRDTライブラリの設計および実装",
      description:
        " - ページ、ブロック、テキストを持つ多重リンクリストでデータ構造を構築\n - RGAに基づく二重リンクリストでCRDTを設計し、テキストブロックもリンクリストで順序変更可能\n - EditorCRDTとBlockCRDTの分離によるモジュール化で保守性を強化\n - ブロック単位の同期方式を導入し、大規模な文書処理時の拡張性を確保\n - @noctaCrdtの名前でpnpmモノレポジトリを構築し、ReactおよびNest.jsからアクセス可能に設定",
      subTitle:
        "中央サーバーに依存しない演算ベースのCRDT (Conflict-free Replicated Data Type)",
      link: "https://velog.io/@hyonun/CRDT-구현-여정기-1-CRDT를-사용하고-구현방식을-정해보자",
      linkTitle: "ブログを見る",
    },
    {
      mediaUrl: "videos/nocta_workspace.mp4",
      title: "ワークスペース権限管理システムの実装",
      subTitle:
        "ユーザーごとのワークスペースアクセス権限システムの設計および実装",
      description:
        " - WebSocketを利用したページごとのリアルタイム多重接続管理と状態同期\n - Socket.ioを活用したリアルタイム通知システム（Toast）でコラボレーション体験を向上",
      link: "https://velog.io/@hyonun/Socket.io-Workspace-구현-여정기-1-게스트-유저-Workspace-분리화",
      linkTitle: "ブログを見る",
    },
    {
      mediaUrl: "images/nocta_opt.jpg",
      title: "レンダリング時間55%改善",
      subTitle: "不要な再レンダリングの最適化",
      description:
        " - React.memoを活用してブロック要素の再レンダリングをメモ化\n - リストの仮想化で表示される要素のみレンダリング\n  - Render: 11.3ms -> 4.9ms\n Layout effects: 1.3ms -> 0.6ms\n Passive effects: 1ms -> 0.6ms\n 合計: 13.6ms -> 6.1ms (55.1%改善)",
      link: "https://abrupt-feta-9a9.notion.site/CS-958d64dbd60546a9bf75805156168f40?pvs=4",
      linkTitle: "Notion",
    },
    {
      mediaUrl: "images/nocta_edit.jpg",
      title: "デモ映像、オンボーディングスクリーン、アイコン制作",
      subTitle: "Premiere ProおよびLotties、Phaseの活用",
      description:
        "- プロモーションビデオの制作\n - タイポグラフィおよびeaseトランジションを活用し視聴者の注目を集める\n - ユーザーの没入感を高めるためのオンボーディングスクリーンの制作",
      link: "https://abrupt-feta-9a9.notion.site/Nocta-promo-dcc6dc48d7e74f53b455857010c2d2aa?pvs=4",
      linkTitle: "Notion",
    },
    {
      mediaUrl: "images/nocta_edit.jpg",
      title: "学んだこと",
      subTitle: "Takeaway",
      description:
        " - 頻繁な構造変更による初期設計の重要性\n - 継続的な状況共有とチームメンバー間の利害調整\n - 自由に質問できる環境の重要性",
    },
  ],
  [
    {
      mediaUrl: "videos/speaker_background.mp4",
      title: "顔追跡指向スピーカー",
      subTitle:
        "崇実大学 卒業作品コンペ 大統領賞、ヒョンナム工学賞 金賞 (2020.5 ~ 2020.11)",
      description:
        "\n- 超音波スピーカーとhaarcascadeを活用した顔追跡指向スピーカー",
      link: "https://youtu.be/odPTTYyX-1s?si=Tj_n4PJSfy5Z6inz",
      linkTitle: "Youtube",
    },
    {
      mediaUrl: "images/speaker_haarcascade.JPG",
      title: "Haarcascadeアルゴリズムの選定",
      subTitle: "OpenCVを活用した顔特徴分類カスケードオブジェクト検出器",
      description:
        " - Yolo v3、CNN、DNNに比べ、Raspbian（2CPU, 2GB）という制約のある環境でも十分な顔追跡率と高速性を実現\n - frontalfaceとprofilefaceのXMLデータセットを同時に活用し、顔検出率を向上\n (同一人物が出演する映像で顔検出が15%増加)",
    },
    {
      mediaUrl: "images/speaker_3D_modeling.JPG",
      title: "役割 - SWチームリーダー",
      subTitle:
        "構成 : Raspbian、超音波スピーカー、MG996R 2台、3Dモデリング、電源ケーブル",
      description:
        " - 指向性スピーカー会社と協力し、3Dモデリングを考案、全体のSWアルゴリズムおよびHW環境を実装\n - MG996Rサーボモーターでスピーカーを支え、Raspberry Piを固定",
    },
    {
      mediaUrl: "videos/speaker_jittering.mp4",
      title: "問題解決の経験",
      subTitle: "サーボモーターが不安定な電圧により振動するJittering現象",
      description:
        " - 追加の電源供給などの対策があったが、既存のデザインを活用するためにpigpiodデーモンを使用\n - CPUにサーボモーター用のスレッドを割り当て、OSの処理がサーボモーターに影響を与えないように対策",
    },
    {
      mediaUrl: "videos/speaker_tracking_face.mp4",
      title: "簡単なデモ映像",
      subTitle: "向かい合うと音が聞こえる指向性スピーカーの特性を活用",
      description:
        " - 毎秒4フレームの速度でユーザーの顔を追跡\n - 5秒間顔が検出されなければ初期位置にリセット\n - 正面が検出されなければ横顔検出を試みる",
    },
    {
      mediaUrl: "videos/speaker_tracking_face.mp4",
      title: "聴覚障害のある学生へのアンケート実施",
      subTitle: "室内で15分間、歌や会話に応じた音の集中度テスト",
      description:
        " - 聴覚障害のある方は、直接的に感じる音に集中しやすく、ささやき声や小さい音には反応しにくい\n - 本作品は、顔の位置に関係なくスピーカーに集中できる音を提供し、正確な音を伝えると判断された",
    },
    {
      mediaUrl: "videos/speaker_tracking_face.mp4",
      title: "学んだこと",
      subTitle: "Takeaway",
      description:
        " - 会社との協業で学んだビジネスコミュニケーション\n - 問題解決のための根本原因の把握（サーボモーターのジッター）\n - モデルの活用度に応じた検出率の補完\n - 制限された環境で最適な選択をする方法の探求",
    },
  ],
  [
    {
      mediaUrl: "videos/doss_promo.mp4",
      title: "アプリインストール不要、ウェブでDoss",
      subTitle:
        "LG ユーレカ フロントエンド ミニプロジェクト (2025.03.13 ~ 2025.03.21) 9日間",
      description: "\n- Tossコピーアプリ、株式情報をまとめて見るウェブサービス",
      link: "https://youtu.be/vD-YFp99zmY?si=dT1TFnv6ajCU-NtQ",
      linkTitle: "Youtube",
    },
    {
      mediaUrl: "videos/doss_promo.mp4",
      title: "役割",
      subTitle: "チームリーダー（チーム全体：2名）",
      description:
        "- アプリのような使いやすさを重視、Figmaでデザイン制作\n - コンポーザブルUIスタイルでFEコンポーネント構造設計\n - プロモーション映像制作（Premiere Pro）\n - ファウンデーション作成後、フローチャートに沿ってプロトタイプ制作",
      link: "https://www.figma.com/proto/Zpf6U1PgXsYQnZiomc2QSF/%EC%9C%A0%EB%A0%88%EC%B9%B4-3%ED%8C%80-MINI-PROJECT?node-id=132-4914&t=mBdT3P4pwjsJo7Ki-1",
      linkTitle: "Figma",
    },
    {
      mediaUrl: "images/doss_search.gif",
      title: "検索結果オートコンプリートの実装",
      subTitle: "Elasticsearch、デバウンシング",
      description:
        "- 0.3msごとのデバウンシングを適用してサーバーに検索語をリクエスト\n - Elasticsearch：株式検索に使用、6000件の株式情報（国内/海外）をElasticsearchに反映\n - Elasticsearchを通じて取得した株式銘柄コードによるリアルタイム価格確認機能",
    },
    {
      mediaUrl: "images/doss_home.gif",
      title: "韓国投資証券API連携リアルタイム株式情報",
      subTitle: "Spring、Java",
      description:
        "- 韓国投資証券APIを活用して取引代金/取引量/急上昇/急落情報を照会\n - useEffectを通じてサーバーに株式情報をリクエスト\n - サーバーは1分以内であればキャッシュされたデータを送信し、1分単位で株価を更新\n - 今後Websocketで連携してリアルタイムで価格変動を反映予定",
    },
    {
      mediaUrl: "images/doss_funnel.gif",
      title: "Tossライブラリの適用",
      subTitle: "@toss/useFunnel、@toss/impression-area",
      description:
        "- 会員登録のファネル状態保存のために使用\n - 簡単な状態管理とクリーンなコード作成が可能\n - ビューポートに表示されたり消えたりする時点でイベントを発生させるコンポーネントを使用",
    },
    {
      mediaUrl: "images/doss.jpg",
      title: "学んだこと",
      subTitle: "Takeaway",
      description:
        "- アプリ環境で必要なユーザーインタラクションの理解\n - Elasticsearchおよびバックエンド環境の理解（Controller、Service、Dao、Dto）\n - Figmaデザインシステム設計の理解",
    },
  ],
  [
    {
      mediaUrl: "images/jobthoughts.png",
      title: "JobThoughts（ジョブソート）",
      subTitle: "ユーザーの価値観と好みに基づいた職業推薦サービス",
      description:
        "フロントエンドミニプロジェクト（2025年3月）/ 4人チーム / 開発期間10日",
      link: "https://www.canva.com/design/DAGm6Gp7AEs/RV6anLgGtHmjVq6RjZv9dw/view?utm_content=DA%5B%E2%80%A6%5Dhare&utm_medium=link2&utm_source=uniquelinks&utlId=h4543e21b68",
      linkTitle: "デモPDF",
      link2: "https://job-thoughts-client.vercel.app/",
      link2Title: "Site",
    },
    {
      mediaUrl: "videos/jobthoughts_2.mp4",
      title: "イントロアニメーションとサービス導線",
      subTitle: "Framer Motion / スティッキー / タイポグラフィ演出",
      description:
        "- スクロールに応じたレスポンシブアニメーション構成\n- 直感的な職業選択導線の提供\n- stickyで各ステップの流れを分かりやすく表示",
    },
    {
      mediaUrl: "videos/jobthoughts_3.mp4",
      title: "職業価値観テストの実装",
      subTitle: "カードデッキUI / キーボード操作 / CareerNet API",
      description:
        "- スライドトランジションアニメーション付きのカードUI\n- キーボード入力で直感的な選択\n- CareerNet APIと連携しリアルタイム推薦",
    },
    {
      mediaUrl: "images/jobthoughts_4.gif",
      title: "診断結果の可視化",
      subTitle: "Nivoレーダーチャートを使用",
      description:
        "- 自分の価値観に合った職業をレーダー形式で表示\n- 職業をクリックすると求人情報ページに遷移\n- 今後は実際の求人APIと連携予定",
    },
    {
      mediaUrl: "videos/jobthoughts_5.mp4",
      title: "ユーザー行動ベースのレスポンシブUI",
      subTitle: "全デバイス対応・インタラクション最適化",
      description:
        "- ユーザーの行動導線に合わせたUI構成\n- clampやメディアクエリを活用してモバイル対応\n- クリックとキーボード操作の両方に対応",
    },
    {
      mediaUrl: "images/jobthoughts_6.png",
      title: "デプロイとクローリングの自動化",
      subTitle: "Vercel・Render / Puppeteerで求人情報の収集",
      description:
        "- フロントエンドはVercel、バックエンドはRenderにデプロイ\n- PuppeteerでのWebクローリング実施\n- SEOとパフォーマンスを考慮した構成",
    },
    {
      mediaUrl: "images/jobthoughts_7.png",
      title: "チーム開発と振り返り",
      subTitle: "4人での役割分担と共同作業",
      description:
        "- UI設計からAPI設計まで連携して開発\n- 技術Wikiとドキュメントを共有\n- ユーザーにわかりやすいキャリア探索体験を提供",
    },
  ],
];
