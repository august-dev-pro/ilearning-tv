"use client";
import VideoCard from "@/components/videos/VideoCard2";
import ShowMore from "../ui/ShowMore";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { videos } from "@/lib/api/videosData";

const Suggestions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayedVideos = isExpanded ? videos : videos.slice(0, 6);

  if (videos.length === 0) return null;

  return (
    <section className="section">
      <div className="container px-4 sm:px-0">
        <SectionHeader
          title={"Vidéos suggérées"}
          videosLink="/videos/news"
          placeholder="Plus de videos"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedVideos.map((video) => (
            <VideoCard key={video.id} video={video} type="normal" />
          ))}
        </div>
        <ShowMore isExpanded={isExpanded} onToggle={handleToggle} />
      </div>
    </section>
  );
};

export default Suggestions;
