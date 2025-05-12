"use client";

import React, { useEffect, useState } from "react";
import VideoCard from "@/components/videos/VideoCard2";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import { useVideos } from "@/contexts/VideosContext";
import { useParams } from "next/navigation";
import { Video } from "@/types/Video";
import Suggestions from "@/components/videos/SuggestionsVideos";

export default function VideosByCategoryPage() {
  const params = useParams();

  const categoryParam = params.category as string;
  const decodedCategory = decodeURIComponent(categoryParam);

  const { getVideosByCategory } = useVideos();
  const [videos, setVideos] = useState<Video[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getVideosByCategory(decodedCategory).then((data) => {
      setVideos(data);
      setLoading(false);
    });
  }, [decodedCategory]);

  if (loading) {
    return <SkeletonLoader count={9} />;
  }

  return (
    <main>
      <div className="section">
        <div className="container px-4 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video: Video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
      <Suggestions key={`category-suggestions-${decodedCategory}`} />
    </main>
  );
}
