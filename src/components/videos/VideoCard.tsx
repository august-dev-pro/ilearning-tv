import React from "react";
import teacherImage from "../../../public/images/stephan-wahl.jpeg";
import Image from "next/image";
import Link from "next/link";
import PlayButton from "../ui/PlayButton";
import { MdWhatshot, MdWifiTethering } from "react-icons/md";
import CertifiedBadge from "../ui/CertifiedBadge";
import { Video } from "@/types/Video";
import { formatRelativeDate } from "@/lib/utils/uitils";
import { API_URL } from "@/lib/api";

type VideoCardProps = {
  key: string;
  video: Video;
  type?: "normal" | "live" | "trend";
  isMiniatureSugession?: boolean;
};

export default function VideoCard({
  video,
  type = "normal",
  isMiniatureSugession,
}: VideoCardProps) {
  const isLive = type === "live";
  const isTrend = type === "trend";
  const isNormal = type === "normal";
  const description = video.description;

  // console.log("video: ", video);

  return (
    <article
      className={`bg-white cursor-pointer transition duration-300
      ${isTrend || isLive ? "flex sm:gap-4 items-start" : ""}
      ${(isTrend || isLive) && isMiniatureSugession ? "!flex-col" : ""}
    `}
    >
      {/* Thumbnail */}
      <div
        className={`relative  md:h-[210px] group rounded-xl overflow-hidden transition-all duration-300 border-2 border-gray-200 hover:border-red-600 ${
          (isTrend || isLive) && !isMiniatureSugession
            ? "h-[115px] w-1/2 sm:w-1/3 max-h-[90px] sm:max-h-[100px] md:max-h-40"
            : "h-[200px] w-full"
        }`}
      >
        {isNormal && (
          <Link
            href={`${isLive ? `/live/${video.id}` : `/videos/${video.id}`}`}
            className=" transition-all"
          >
            <PlayButton className="absolute right-[40%] top-[40%]" />
          </Link>
        )}
        <Link
          href={`${isLive ? `/live/${video.id}` : `/videos/${video.id}`}`}
          className=" "
        >
          {
            <Image
              src={`${API_URL}${video.thumbnail.url}`}
              width={500}
              height={500}
              alt={video.title}
              className={`object-cover h-full w-full ${
                isTrend || isLive ? "  rounded-l-xl" : "w-full h-40"
              }`}
            />
          }

          {/* <iframe
            className="w-full h-full"
            src={video.videoUrl}
            title="Vidéo"
            frameBorder="0"
            allowFullScreen
          ></iframe> */}
        </Link>

        {/* LIVE or TREND Badge */}
        {(isLive || isTrend) && (
          <span className="absolute flex items-center gap-1 top-2 left-2 bg-red-600 text-white text-[9px] sm:text-xs font-medium sm:font-bold px-[6px] py-[3px] rounded-full">
            {isLive ? <MdWifiTethering /> : <MdWhatshot />}
            {isLive ? <span>EN DIRECT</span> : <span>En Tendance</span>}
          </span>
        )}

        {isNormal && (
          <div className="absolute z-[10] top-[80%] right-2 flex items-center gap-1 bg-black/70 text-white text-xs sm:text-sm font-medium px-2 py-[3px] rounded-md shadow-md">
            <span>21:37</span>
          </div>
        )}
        {/* Teacher Image (Avatar) */}
        {(isTrend || isLive) && (
          <div className="absolute bottom-2 right-2 flex items-center gap-1">
            <span className="text-[10px] font-[400] sm:text-xs text-white sm:font-bold text-shadow">
              {video.channel.name}
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
        className={` ${
          (isTrend || isLive) && !isMiniatureSugession
            ? "px-3 w-1/2 sm:w-2/3"
            : "py-3"
        } space-y-2`}
      >
        {!isNormal && (
          <Link
            href={`${isLive ? `/live/${video.id}` : `/videos/${video.id}`}`}
          >
            <div
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
              className="text-[13px] sm:text-[15px]  lg:text-xl font-[900] text-gray-800 mb-1"
            >
              {video.title}
            </div>
          </Link>
        )}
        {(isTrend || isLive) && (
          <p className="hidden sm:flex text-xs sm:text-sm text-gray-600 ">
            <span className="line-clamp-1 md:!line-clamp-2">{description}</span>
          </p>
        )}
        <div
          className={`flex flex-wrap gap-[6px] sm:gap-5 items-center ${
            isNormal ? "" : "md:flex-col md:items-start md:gap-1"
          }`}
        >
          {isNormal ? (
            <div className="flex items-start gap-2">
              <Image
                src={/* video.teacherImage || */ teacherImage.src}
                width={500}
                height={500}
                alt="teacher"
                className=" w-8 h-8 rounded-full border-2 border-white"
              />
              <div className="grid gap-1">
                <Link
                  href={`${
                    isLive ? `/live/${video.id}` : `/videos/${video.id}`
                  }`}
                >
                  <div
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                    className="text-[13px] sm:text-[15px]  lg:text-[18px] font-[900] text-gray-800 mb-1"
                  >
                    {video.title}
                  </div>
                </Link>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  {video.channel.name}
                  <CertifiedBadge />
                </p>

                <div className="flex items-center text-[11px] text-gray-400 space-x-1 sm:space-x-2">
                  <span>{video.views}k vues</span>
                  <span>·</span>
                  <span className="w-max">
                    {/* <span className="">il y a</span> */}
                    {formatRelativeDate(video.publishedAt)}
                  </span>
                </div>
              </div>
            </div>
          ) : isLive ? (
            <p className="text-xs text-gray-500 ">
              {video.currentViewers}k spectateurs
            </p>
          ) : isTrend ? (
            <div className="flex flex-col gap-1 sm:gap-2">
              <div className="text-xs text-gray-500 flex items-center gap-1">
                {video.channel.name}
                <CertifiedBadge />
              </div>
              <div className="flex items-center text-[11px] text-gray-400 space-x-2 ">
                <span className="w-max">{video.views}k vues</span>
                <span>·</span>
                <span className="flex flex-row gap-1 w-max">
                  {/* <span className="hidden sm:!flex">publié le</span> */}
                  {formatRelativeDate(video.publishedAt)}
                </span>
              </div>
            </div>
          ) : null}

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
