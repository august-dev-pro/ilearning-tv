"use client";
import ShowMore from "@/components/ui/ShowMore";
import Suggestions from "@/components/videos/SuggestionsVideos";
import VideoCard from "@/components/videos/VideoCard";
import { useState } from "react";
import { useVideos } from "@/contexts/VideosContext";
import SkeletonLoader from "@/components/ui/skeletons/SkeletonLoader";

export default function RecentVideosPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const { recentVideos, isLoading } = useVideos();
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const videosToShow = isExpanded ? recentVideos : recentVideos.slice(0, 9);

  if (isLoading) {
    return <SkeletonLoader count={9} />;
  }

  return (
    <main>
      <div className="section text-gray-800">
        <div className="container">
          {videosToShow.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videosToShow.map((video) => (
                <VideoCard key={video.id} video={video} type="normal" />
              ))}
            </div>
          ) : (
            <p>Aucune vidéo récente disponible.</p>
          )}
          <ShowMore isExpanded={isExpanded} onToggle={handleToggle} />
        </div>
      </div>
      <Suggestions key={`newsSuggestions`} />
    </main>
  );
}
