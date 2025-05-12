import React from "react";
import { videos } from "@/lib/api/videosData";
import VideoCard from "@/components/videos/VideoCard2";
import Suggestions from "@/components/videos/SuggestionsVideos";

export default async function VideosByCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryQuery = decodeURIComponent(category).toLowerCase();

  const categoryVideos = videos.filter(
    (video) => video.category?.toLowerCase() === categoryQuery
  );

  return (
    <main>
      <div className="section">
        <div className="container px-4 sm:px-0">
          {categoryVideos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          )}{" "}
        </div>
      </div>
      <Suggestions key={`category-suggestions-${category}`} />
    </main>
  );
}
