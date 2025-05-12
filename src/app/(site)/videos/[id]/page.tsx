"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useVideos } from "@/contexts/VideosContext";
import AuthorInfo from "@/components/ui/AuthorInfo";
import VideoCard from "@/components/videos/VideoCard2";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import user from "@/../public/images/stephan-wahl.jpeg";
import { FaThumbsUp } from "react-icons/fa";
import { FiChevronRight, FiMessageCircle } from "react-icons/fi";
import { Video } from "@/types/Video";
import PlayVideoPageSkeleton from "@/components/ui/skeletons/PlayVideoPageSkeleton";

export default function VideoPageById() {
  const params = useParams();
  const videoId = params.id as string;
  const decodedId = decodeURIComponent(videoId);

  const { getVideoById, videos } = useVideos();
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (decodedId) {
      getVideoById(decodedId).then((video) => {
        setSelectedVideo(video);
        setLoading(false);
      });
    }
  }, [decodedId]);

  if (loading || !selectedVideo) {
    return <PlayVideoPageSkeleton />;
  }

  const similarresVideos = videos.filter(
    (video) =>
      video.category === selectedVideo.category && video.id !== selectedVideo.id
  );

  return (
    <div className="min-h-screen text-gray-800">
      <div className="container">
        <main className="mx-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-black lg:rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={selectedVideo.videoUrl}
                title="Vidéo"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <div className="px-4 sm:px-0">
              <h1 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-[#0a1b3b]">
                {selectedVideo.title}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Publié le 5 mai 2025 • 14 350 vues
              </p>

              <AuthorInfo
                teacherImage={user.src}
                author={selectedVideo.authorId}
                certified
              />

              <div className="flex items-center space-x-6 mt-4">
                <button className="flex items-center space-x-2 cursor-pointer">
                  <FaThumbsUp />
                  <span className="text-sm">120</span>
                </button>
                <button className="flex items-center space-x-2 cursor-pointer">
                  <FiMessageCircle />
                  <span className="text-sm flex gap-1 items-center">
                    5 commentaires <FiChevronRight />
                  </span>
                </button>
              </div>

              <div className="mt-4 text-sm text-gray-700 space-y-2">
                <p>{selectedVideo.description}</p>
                <p>🔗 Ressources disponibles dans la description.</p>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <aside className="space-y-4 px-4 sm:px-0 lg:pl-4 border-gray-200 lg:max-h-[100vh] lg:overflow-y-auto lg:border-l custom-scroll">
            {similarresVideos.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-[#0a1b3b] mb-2">
                  Vidéos similaires
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-1 space-y-3">
                  {similarresVideos.slice(0, 8).map((video) => (
                    <VideoCard key={video.id} video={video} type="normal" />
                  ))}
                </div>
              </div>
            )}

            {similarresVideos.length > 0 && similarresVideos.length < 8 ? (
              <div className=" border-t border-t-gray-200 pt-2">
                <h2 className="text-lg font-semibold text-[#0a1b3b] mb-2">
                  sucgessions
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-1 space-y-3">
                  {videos.slice(0, 8).map((video: Video) => (
                    <VideoCard key={video.id} video={video} type="normal" />
                  ))}
                </div>
              </div>
            ) : (
              <div className=" ">
                <h2 className="text-lg font-semibold text-[#0a1b3b] mb-2">
                  sucgessions
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-1 space-y-3">
                  {videos.slice(0, 8).map((video: Video) => (
                    <VideoCard key={video.id} video={video} type="normal" />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
}
