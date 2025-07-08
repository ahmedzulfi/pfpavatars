import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../image/avatar1.jpg";
import image2 from "../../image/anime-avatar-49.jpg";
import image3 from "../../image/img4.jpg";
import image4 from "../../image/img5.jpg";
import image5 from "../../image/img6.jpg";
import image6 from "../../image/img7.jpg";
import image7 from "../../image/img9.jpg";
import image8 from "../../image/anime-avatar-48.jpg";
import image9 from "../../image/anime-avatar-49.jpg";
import ImageTrail, { ImageTrailItem } from "@/components/image-trail";
export default function LoginPage() {
  const avatars = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
  ];
  return (
    <div className="flex w-full min-h-svh bg-black flex-col items-center justify-center p-6 md:p-10">
      {" "}
      <div className="opacity-[.5%] absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="absolute top-0 left-0 w-[240px] h-[150px] rounded-full bg-gradient-to-tr from-[#ffedc9]/90 to-transparent blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[240px] h-[150px] rounded-full bg-gradient-to-bl from-[#ffedc9] via-[#facc15]/30 to-transparent blur-3xl z-0" />
      <ImageTrail
        intensity={0.2}
        threshold={80}
        keyframes={{ opacity: [0, 1, 1, 0], scale: [1, 1, 0] }}
        keyframesOptions={{
          opacity: { duration: 1, times: [0, 0.001, 0.9, 1] },
          scale: { duration: 1, times: [0, 0.8, 1] },
        }}
        repeatChildren={1}
        className="absolute z-1 h-screen top-0 w-full"
      >
        {avatars.map((url, index) => (
          <ImageTrailItem key={index}>
            <div
              className="w-20 sm:w-48 h-20 sm:h-48 relative overflow-hidden shadow-lg"
              style={{
                transition: "filter 0.2s ease-out",
              }}
            >
              <img
                src={url.image.src}
                alt="avatar"
                className="object-cover rounded-none w-full h-full transition-transform duration-300 ease-out"
              />
            </div>
          </ImageTrailItem>
        ))}
      </ImageTrail>{" "}
      <div className=" max-w-sm w-full relative  z-1">
        <LoginForm />{" "}
      </div>
    </div>
  );
}
