import React from "react";
import PlayButton from "../ui/PlayButton";
import { BiStar } from "react-icons/bi";
// import image from "../../../public/images/banner.jpg";
import { API_URL } from "@/lib/api";
type FeaturedVideoBannerProps = {
  title: string;
  thumbnail: string;
};

const FeaturedVideoBanner: React.FC<FeaturedVideoBannerProps> = ({
  title,
  thumbnail,
}) => {
  // url(http://127.0.0.1:3900${thumbnail})
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden h-64 sm:h-72 md:h-80 lg:h-95 xl:h-[400px] bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${API_URL}${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black to-[#00000010] " />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center gap-10 px-6 md:px-10">
        <div className="relative flex flex-col">
          <span className="text-[12px] w-max sm:text-sm flex items-center gap-1 mb-1 opacity-80 py-2 px-5 rounded-full bg-red-500">
            Vidéo en vedette <BiStar />
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 max-w-md leading-tight">
            {title}
          </h1>
        </div>
        <PlayButton />
      </div>
    </div>
  );
};

export default FeaturedVideoBanner;
