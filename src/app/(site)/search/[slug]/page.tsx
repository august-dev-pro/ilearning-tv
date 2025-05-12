"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useVideos } from "@/contexts/VideosContext";
import VideoCard from "@/components/videos/VideoCard2";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import Suggestions from "@/components/videos/SuggestionsVideos";
import { Video } from "@/types/Video";

export default function SearchResultsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const decodedSlug = decodeURIComponent(slug);

  const { searchVideos } = useVideos();
  const [searchResult, setSearchResult] = useState<Video[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSearchResults() {
      const results = await searchVideos(decodedSlug);
      setSearchResult(results);
      setLoading(false);
    }

    fetchSearchResults();
  }, [decodedSlug, searchVideos]);

  if (loading) {
    return <SkeletonLoader count={9} />;
  }

  return (
    <main>
      <section className="section">
        <div className="container px-4 sm:px-0">
          {searchResult.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResult.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Aucune vidéo trouvée.</p>
          )}
        </div>
      </section>
      <Suggestions key={"searchSuggestion"} />
    </main>
  );
}
