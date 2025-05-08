import React from "react";
import banner from "../../../public/images/live_teaching.jpg";
import Image from "next/image";

type LiveVideoCardProps = {
  title: string;
  thumbnail: string;
};

const LiveVideoCard: React.FC<LiveVideoCardProps> = ({ title, thumbnail }) => {
  return (
    <div className="flex bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300 w-full max-w-md">
      <div className="relative w-1/3">
        <Image
          src={banner.src}
          width={500}
          height={500}
          alt={title}
          className="h-full object-cover w-full"
        />
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
          EN DIRECT
        </span>
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h4 className="text-base font-semibold">{title}</h4>
        <span className="text-xs text-gray-500 mt-1">🎥 EN DIRECT</span>
      </div>
    </div>
  );
};

export default LiveVideoCard;
