"use client";
import ShowMore from "@/components/ui/ShowMore";
import Suggestions from "@/components/videos/SuggestionsVideos";
import VideoCard from "@/components/videos/VideoCard2";
import { Video, videos } from "@/lib/api/videosData";
import { useState } from "react";

export default function RecentVideosPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  const recentVideos = [...videos].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const videosToShow = isExpanded ? recentVideos : recentVideos.slice(0, 9);

  return (
    <main>
      <div className="section text-gray-800">
        <div className="container">
          {videosToShow.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videosToShow.map((video: Video) => (
                <VideoCard key={video.id} video={video} type="normal" />
              ))}
            </div>
          )}
          <ShowMore isExpanded={isExpanded} onToggle={handleToggle} />
        </div>
      </div>
      <Suggestions key={`newsSucgessions`} />
    </main>
  );
}
