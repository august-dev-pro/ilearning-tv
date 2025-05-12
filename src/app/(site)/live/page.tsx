import React from "react";
import VideoCard from "@/components/videos/VideoCard2";
import { lives, Video } from "@/lib/api/videosData";
import Suggestions from "@/components/videos/SuggestionsVideos";

const LivePage = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <main className="py-6 sm:py-8">
            <h1 className="text-2xl font-bold text-[#0a1b3b] mb-6">
              Vidéos en Direct
            </h1>
            {lives.length > 0 ? (
              <div className="grid  gap-6">
                {lives.map((video: Video) => (
                  <VideoCard key={video.id} video={video} type="live" />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                Aucune vidéo en direct pour le moment.
              </p>
            )}
          </main>
        </div>
      </section>
      <Suggestions />
    </main>
  );
};

export default LivePage;
