
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
        subTitle:
          "네이버 부스트캠프 Web 9기 그룹프로젝트 (2024.10 ~ 2024.12)",
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
        subTitle:
          "구성 : 라즈비안, 초음파스피커, MG996R 2개, 3D모델링, 전원선",
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
        linkTitle: "View Site",
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
        subTitle: "Design and implementation of user-specific workspace access control system",
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
        subTitle: "Components: Raspbian, Ultrasonic Speaker, 2x MG996R, 3D Modeling, Power Cable",
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
  ];
  
  export const slidesDataJP: SlideData[][] = [
    [
      {
        mediaUrl: "videos/nocta_background.mp4",
        title: "リアルタイム共同編集エディター Nocta",
        description:
          "演算ベースのCRDTを採用したリアルタイム共同編集エディター \n - タブブラウジングで複数ページを自由に移動可能 \n - インタラクティブな要素で楽しいドキュメント作成を追求",
        subTitle: "NAVER Boostcamp Web 第9期 グループプロジェクト (2024.10 ~ 2024.12)",
        link: "https://nocta.site",
        linkTitle: "サイトを表示",
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
        subTitle: "ユーザーごとのワークスペースアクセス権限システムの設計および実装",
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
        subTitle:
          "OpenCVを活用した顔特徴分類カスケードオブジェクト検出器",
        description:
          " - Yolo v3、CNN、DNNに比べ、Raspbian（2CPU, 2GB）という制約のある環境でも十分な顔追跡率と高速性を実現\n - frontalfaceとprofilefaceのXMLデータセットを同時に活用し、顔検出率を向上\n (同一人物が出演する映像で顔検出が15%増加)",
      },
      {
        mediaUrl: "images/speaker_3D_modeling.JPG",
        title: "役割 - SWチームリーダー",
        subTitle: "構成 : Raspbian、超音波スピーカー、MG996R 2台、3Dモデリング、電源ケーブル",
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
  ];
  