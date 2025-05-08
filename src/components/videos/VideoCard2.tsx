// components/videos/VideoCard.tsx
import { Video } from "@/lib/api/videosData";
import React from "react";
import banner from "../../../public/images/banner.jpg";
import teacherImage from "../../../public/images/stephan-wahl.jpeg";
import Image from "next/image";
import Link from "next/link";
import PlayButton from "../ui/PlayButton";
import { MdWifiTethering } from "react-icons/md";

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
        isTrend || isLive ? "flex gap-4 items-center" : ""
      }`}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-[120px] md:h-[210px] group rounded-xl overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-red-600 ${
          isTrend || isLive
            ? "h-[120px] w-1/2 sm:w-1/3 max-h-[105px] md:max-h-40"
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
            className="hidden group-hover:sm:flex transition-all"
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

        {/* LIVE Badge */}
        {isLive && (
          <span className="absolute flex items-center gap-1 top-2 left-2 bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full">
            <MdWifiTethering /> EN DIRECT
          </span>
        )}

        {/* Teacher Image (Avatar) */}
        {video.teacherImage && (
          <Image
            src={/* video.teacherImage || */ teacherImage.src}
            width={500}
            height={500}
            alt="teacher"
            className="absolute bottom-2 right-2 w-8 h-8 rounded-full border-2 border-white"
          />
        )}
      </div>

      {/* Content */}
      <div className={`p-3 ${isTrend || isLive ? "w-1/2 sm:w-2/3" : ""}`}>
        <Link
          href={`${
            isLive
              ? `live/${video.id}`
              : `http://localhost:3000/videos/${video.id}`
          }`}
        >
          <h4 className="text-base sm:text-xl font-[900] text-gray-800 mb-1">
            {video.title}
          </h4>
        </Link>

        <p className="text-xs text-gray-500 mb-1">{video.userName}</p>
        {isNormal && (
          <div className="flex items-center text-[11px] text-gray-400 mb-2 space-x-2">
            <span>{video.views} vues</span>
            <span>·</span>
            <span>{video.publishedAt}</span>
          </div>
        )}

        {isTrend ||
          (isLive && (
            <p className=" hidden sm:flex text-xs text-gray-600">
              {truncatedDescription}
            </p>
          ))}
        {isTrend ||
          (isLive && (
            <span className="flex items-center gap-1 text-sm text-gray-600 font-bold mt-1">
              <MdWifiTethering /> En Directe
            </span>
          ))}
      </div>
    </article>
  );
}
