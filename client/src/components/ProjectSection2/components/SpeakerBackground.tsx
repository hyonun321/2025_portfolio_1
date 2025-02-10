import VideoBackground from "@/components/common/VideoBackground";

export default function SpeakerBackground() {
  return (
    <VideoBackground
      sources={{
        webm: "videos/speaker_background.webm",
        mp4: "videos/speaker_background.mp4",
        mobileWebm: "videos/speaker_background-mobile.webm",
      }}
    />
  );
}
