"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useVideos } from "@/contexts/VideosContext";
import AuthorInfo from "@/components/ui/AuthorInfo";
import VideoCard from "@/components/videos/VideoCard";
import { Video } from "@/types/Video";
import user from "../../../../../public/images/stephan-wahl.jpeg";
import { FaThumbsUp } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import PlayVideoPageSkeleton from "@/components/ui/skeletons/PlayVideoPageSkeleton";
import VideoPlayer from "@/components/ui/VideoPlayer";

export default function LivePageById() {
  const params = useParams();
  const liveId = params.id as string;
  const decodedId = decodeURIComponent(liveId);
  const { getVideoById, liveVideos } = useVideos();
  const [selectedLive, setSelectedLive] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLive() {
      const live = await getVideoById(decodedId);
      setSelectedLive(live);
      setLoading(false);
    }

    fetchLive();
  }, [decodedId, getVideoById]);

  if (loading) {
    return <PlayVideoPageSkeleton />;
  }

  if (!selectedLive) {
    return (
      <div className="min-h-[calc(100vh-400px)] text-center py-20">
        Live non trouvé.
      </div>
    );
  }

  const relatedLives = liveVideos.filter(
    (live) =>
      live.category === selectedLive.category && live.id !== selectedLive.id
  );

  const sugessionLives = liveVideos.filter(
    (live) => live.id !== selectedLive.id
  );

  return (
    <div className="min-h-screen text-gray-800">
      <div className="container">
        <main className="mx-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* bloc du live + Description */}
            <div>
              {/* Player */}
              <div className="aspect-video bg-black lg:rounded-xl overflow-hidden shadow-lg">
                <VideoPlayer video={selectedLive} />
              </div>

              {/* Infos */}
              <div className="px-4 sm:px-0">
                <h1 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-[#0a1b3b]">
                  {selectedLive.title}
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                  En direct • {selectedLive.currentViewers} spectateurs
                </p>

                <AuthorInfo
                  teacherImage={user.src}
                  author={selectedLive.channel.name}
                  certified={true}
                />

                <div className="flex items-center space-x-6 mt-4">
                  <button className="flex items-center space-x-2 cursor-pointer">
                    <FaThumbsUp />
                    <span className="text-sm">{selectedLive.likes || 0}</span>
                  </button>

                  <button className="flex items-center space-x-2 cursor-pointer">
                    <FiEye />
                    <span className="text-sm">
                      {selectedLive.currentViewers} spectateurs
                    </span>
                  </button>
                </div>

                {/* Description */}
                <div className="mt-4 text-sm text-gray-700 space-y-2">
                  <p>🔗 Ressources disponibles dans la description.</p>
                  <p>{selectedLive?.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* aside des Suggestions */}
          <aside className="space-y-4 px-4 sm:px-0 lg:pl-4 border-gray-200 lg:max-h-[100vh] lg:overflow-y-auto lg:border-l custom-scroll">
            <h2 className="text-lg font-semibold text-[#0a1b3b] mb-2">
              Lives similaires
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-1 space-y-3">
              {relatedLives
                .slice(0, 8)
                .map(
                  (live: Video) =>
                    live.id != selectedLive.id && (
                      <VideoCard
                        key={live.id}
                        video={live}
                        type="live"
                        isMiniatureSugession={true}
                      />
                    )
                )}
            </div>

            {relatedLives.length < 8 && (
              <div className="border-t border-t-gray-200 pt-2">
                <h2 className="text-lg font-semibold text-[#0a1b3b] mb-2">
                  Autres lives
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-1 space-y-3">
                  {sugessionLives.slice(0, 8).map((live: Video) => (
                    <VideoCard
                      key={live.id}
                      video={live}
                      type="live"
                      isMiniatureSugession={true}
                    />
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
