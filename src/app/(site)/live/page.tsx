"use client";

import React, { useEffect, useState } from "react";
import VideoCard from "@/components/videos/VideoCard2";
import { useVideos } from "@/contexts/VideosContext";
import Suggestions from "@/components/videos/SuggestionsVideos";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import { Video } from "@/types/Video";
import ShowMore from "@/components/ui/ShowMore";

const LivePage = () => {
  const { liveVideos } = useVideos();
  const [loading, setLoading] = useState(true);
  const [lives, setLives] = useState<Video[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    async function fetchLives() {
      setLives(liveVideos);
      setLoading(false);
    }

    fetchLives();
  }, [liveVideos]);

  if (loading) {
    return <SkeletonLoader count={9} />;
  }

  const displayedLives = isExpanded ? lives.slice(0, 12) : lives.slice(0, 6);

  return (
    <main>
      <section className="section">
        <div className="container px-4 sm:px-0">
          <h1 className="text-2xl font-bold text-[#0a1b3b] mb-6">
            Vidéos en Direct
          </h1>
          {displayedLives.length > 0 ? (
            <div className="grid gap-6">
              {displayedLives.map((video: Video) => (
                <VideoCard key={video.id} video={video} type="live" />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              Aucune vidéo en direct pour le moment.
            </p>
          )}
          <ShowMore isExpanded={isExpanded} onToggle={handleToggle} />
        </div>
      </section>
      <Suggestions />
    </main>
  );
};

export default LivePage;
