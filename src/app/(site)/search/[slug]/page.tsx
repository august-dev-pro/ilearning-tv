import React from "react";
import { videos } from "@/lib/api/videosData";
import VideoCard from "@/components/videos/VideoCard2";
import Suggestions from "@/components/videos/SuggestionsVideos";

export default async function SearchResultsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const filteredVideos = videos.filter((video) => {
    const query = decodedSlug.toLowerCase();
    return (
      video.category?.toLowerCase().includes(query) ||
      video.title?.toLowerCase().includes(query) ||
      video.description?.toLowerCase().includes(query)
    );
  });

  return (
    <main>
      <div className="section">
        <div className="container px-4 sm:px-0">
          {filteredVideos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          )}
        </div>
      </div>{" "}
      <Suggestions key={"searchSugesstion"} />
    </main>
  );
}
