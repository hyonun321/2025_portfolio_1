import ProfileImage from "../../common/ProfileImage";

export default function MeProfileImage() {
  return (
    <ProfileImage
      sources={{
        avif: "images/me.avif",
        webp: "images/me.webp",
        fallback: "images/me.jpg",
      }}
      alt="me"
      info={{
        name: "김현훈",
        birth: "1995.05.04",
        education: "Soongsil.univ",
      }}
    />
  );
}
