// components/videos/VideoCard.tsx
import { Video } from "@/lib/api/videosData";
import React from "react";
import banner from "../../../public/images/banner.jpg";
import teacherImage from "../../../public/images/stephan-wahl.jpeg";
import Image from "next/image";
import Link from "next/link";
import PlayButton from "../ui/PlayButton";
import { MdWhatshot, MdWifiTethering } from "react-icons/md";

type VideoCardProps = {
  key: string;
  video: Video;
  type?: "normal" | "live" | "trend";
};

export default function VideoCard({ video, type = "normal" }: VideoCardProps) {
  const isLive = type === "live";
  const isTrend = type === "trend";
  const isNormal = type === "normal";

  const truncatedDescription =
    video.description.length > 100
      ? `${video.description.substring(0, 100)}...`
      : video.description;

  return (
    <article
      className={`bg-white cursor-pointer   transition duration-300 ${
        isTrend || isLive ? "flex sm:gap-4 items-center" : ""
      }`}
    >
      {/* Thumbnail */}
      <div
        className={`relative  md:h-[210px] group rounded-xl overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-red-600 ${
          isTrend || isLive
            ? "h-[115px] w-1/2 sm:w-1/3 max-h-[90px] sm:max-h-[100px] md:max-h-40"
            : "h-[200px]"
        }`}
      >
        {isNormal && (
          <Link
            href={`${
              isLive
                ? `live/${video.id}`
                : `http://localhost:3000/videos/${video.id}`
            }`}
            className=" transition-all"
          >
            <PlayButton className="absolute right-[40%] top-[40%]" />
          </Link>
        )}
        <Link
          href={`${
            isLive
              ? `live/${video.id}`
              : `http://localhost:3000/videos/${video.id}`
          }`}
          className=" "
        >
          <Image
            src={/* video.thumbnail || */ banner.src}
            width={500}
            height={500}
            alt={video.title}
            className={`object-cover h-full w-full ${
              isTrend || isLive ? "  rounded-l-xl" : "w-full h-40"
            }`}
          />
        </Link>

        {/* LIVE or TREND Badge */}
        {(isLive || isTrend) && (
          <span className="absolute flex items-center gap-1 top-2 left-2 bg-red-600 text-white text-[9px] sm:text-xs font-medium sm:font-bold px-[6px] py-[3px] rounded-full">
            {isLive ? <MdWifiTethering /> : <MdWhatshot />}
            {isLive ? <span>EN DIRECT</span> : <span>En Tendance</span>}
          </span>
        )}

        {isNormal && (
          <div className="absolute z-[100] top-[80%] right-2 flex items-center gap-1 bg-black/70 text-white text-xs sm:text-sm font-medium px-2 py-[3px] rounded-md shadow-md">
            <span>21:37</span>
          </div>
        )}
        {/* Teacher Image (Avatar) */}
        {(isTrend || isLive) && video.teacherImage && (
          <div className="absolute bottom-2 right-2 flex items-center gap-1">
            <span className="text-[10px] font-[400] sm:text-xs text-white sm:font-bold text-shadow">
              {video.userName}
            </span>

            <Image
              src={/* video.teacherImage || */ teacherImage.src}
              width={500}
              height={500}
              alt="teacher"
              className=" w-8 h-8 rounded-full border-2 border-white"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={`p-3 ${isTrend || isLive ? "w-1/2 sm:w-2/3" : ""} space-y-2`}
      >
        <Link
          href={`${
            isLive
              ? `live/${video.id}`
              : `http://localhost:3000/videos/${video.id}`
          }`}
        >
          <h4
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            className="text-[13px] sm:text-xl font-[900] text-gray-800 mb-1"
          >
            {video.title}
          </h4>
        </Link>
        {(isTrend || isLive) && (
          <p className=" hidden sm:flex text-xs text-gray-600">
            {truncatedDescription}
          </p>
        )}
        <div className="flex flex-wrap gap-1 sm:gap-5 items-center">
          {isNormal && video.teacherImage ? (
            <div className="flex items-center gap-2">
              <Image
                src={/* video.teacherImage || */ teacherImage.src}
                width={500}
                height={500}
                alt="teacher"
                className=" w-8 h-8 rounded-full border-2 border-white"
              />
              <p className="text-xs text-gray-500 ">{video.userName}</p>
            </div>
          ) : isLive ? (
            <p className="text-xs text-gray-500 ">14k spectateurs</p>
          ) : (
            <p className="text-xs text-gray-500 ">{video.userName}</p>
          )}

          {(isNormal || isTrend) && (
            <div className="flex items-center text-[11px] text-gray-400 space-x-2">
              <span>{video.views}k vues</span>
              <span>·</span>
              <span>il y a {video.publishedAt}</span>
            </div>
          )}

          {isLive && (
            <span className="hidden sm:flex items-center gap-1 text-[13px] sm:text-sm text-gray-600 font-bold">
              <MdWifiTethering /> En Directe
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
