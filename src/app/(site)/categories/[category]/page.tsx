"use client";

import React, { useEffect, useState } from "react";
import VideoCard from "@/components/videos/VideoCard";
import SkeletonLoader from "@/components/ui/skeletons/SkeletonLoader";
import { useVideos } from "@/contexts/VideosContext";
import { useParams } from "next/navigation";
import { Video } from "@/types/Video";
import Suggestions from "@/components/videos/SuggestionsVideos";
import ShowMore from "@/components/ui/ShowMore";

export default function VideosByCategoryPage() {
  const params = useParams();

  const categoryParam = params.category as string;
  const decodedCategory = decodeURIComponent(categoryParam);

  const { videos, getVideosByCategory } = useVideos();
  const [categoryVideos, setVideos] = useState<Video[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isExpandedVideosToShow, setIsExpandedVideosToShow] = useState(false);

  useEffect(() => {
    if (decodedCategory.toLocaleLowerCase() === "all") {
      setVideos(videos);
      setLoading(false);
    } else {
      getVideosByCategory(decodedCategory).then((data) => {
        setVideos(data);
        setLoading(false);
      });
    }
  }, [decodedCategory, getVideosByCategory, videos]);

  const videosToShow =
    isExpandedVideosToShow && categoryVideos.length > 9
      ? categoryVideos
      : categoryVideos.slice(0, 9);

  if (loading) {
    return <SkeletonLoader count={9} />;
  }

  return (
    <main>
      {categoryVideos.length > 0 && (
        <div className="section">
          <div className="container px-4 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videosToShow.map((video: Video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            {categoryVideos.length > 9 && (
              <ShowMore
                isExpanded={isExpandedVideosToShow}
                onToggle={() => setIsExpandedVideosToShow((prev) => !prev)}
              />
            )}
          </div>
        </div>
      )}
      <Suggestions key={`category-suggestions-${decodedCategory}`} />
    </main>
  );
}
