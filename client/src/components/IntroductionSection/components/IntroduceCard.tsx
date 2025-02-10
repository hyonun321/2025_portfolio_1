import { Highlight1, Highlight2 } from "@/components/common/Typography";

export default function IntroduceCard() {
  return (
    <div className="m-auto px-4">
      <h3 className="flex flex-col items-center">
        <span className="text-2xl md:text-5xl font-semibold text-gradient-purple text-center pt-5 pb-5">
          협업하고 싶은 개발자
        </span>
        <p className="text-white text-sm md:text-2xl text-left backdrop-blur-md bg-zinc-900/50 rounded-xl p-4 md:p-5">
          <Highlight1>사용자 경험을 최우선으로 생각</Highlight1>하며, <br />
          프로젝트에 <Highlight2>강한 Ownership</Highlight2> 을 가지고 있습니다.
          <br />
          <br />
          <Highlight1>기술 공유 세션을 주도</Highlight1>하고, <br />
          팀원들과의 적극적인 코드 리뷰를 통해 서로의 성장을 돕습니다.
          <br />
          <br />
          <Highlight2>배움을 위해 겸손한 자세</Highlight2>와
          <Highlight2> 적극적으로 공유하는 자세</Highlight2>가 <br />
          제가 추구하는 개발자의 핵심 가치입니다.
        </p>
      </h3>
    </div>
  );
}
