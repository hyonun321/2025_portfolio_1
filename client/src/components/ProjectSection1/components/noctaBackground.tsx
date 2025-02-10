import VideoBackground from "../../common/VideoBackground";

export default function NoctaBackground() {
  return (
    <VideoBackground
      sources={{
        webm: "videos/nocta_background.webm",
        mp4: "videos/nocta_background.mp4",
        mobileWebm: "videos/nocta_background-mobile.webm",
      }}
    />
  );
}
