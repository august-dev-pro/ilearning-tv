"use client";
import FeaturedVideoBanner from "@/components/videos/FeaturedVideoBanner";
import VideoCard from "@/components/videos/VideoCard";
import banner from "../../../public/images/banner.jpg";
import { useState } from "react";
import ShowMore from "@/components/ui/ShowMore";
import SectionHeader from "@/components/ui/SectionHeader";
import { Tab } from "@headlessui/react";
import { useVideos } from "@/contexts/VideosContext";
import { Video } from "@/types/Video";
import HomeSkeleton from "@/components/ui/skeletons/HomeSkeleton";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCat, setSelectedCat] = useState("all");

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const { liveVideos, videos, isLoading } = useVideos();

  if (isLoading) {
    return <HomeSkeleton />;
  }

  const groupedVideos = {
    Tous: videos,
    Mathématiques: videos.filter((v) => v.category === "Mathématiques"),
    Astronomie: videos.filter((v) => v.category === "Astronomie"),
    Technologie: videos.filter((v) => v.category === "Technologie"),
    Physique: videos.filter((v) => v.category === "Physique"),
    Géographie: videos.filter((v) => v.category === "Géographie"),
    Biologie: videos.filter((v) => v.category === "Biologie"),
    Civisme: videos.filter((v) => v.category === "Civisme"),
    Économie: videos.filter((v) => v.category === "Économie"),
    Santé: videos.filter((v) => v.category === "Santé"),
    Environnement: videos.filter((v) => v.category === "Environnement"),
    Informatique: videos.filter((v) => v.category === "Informatique"),
    Histoire: videos.filter((v) => v.category === "Histoire"),
    Méthodologie: videos.filter((v) => v.category === "Méthodologie"),
  };

  const videosToShow = isExpanded ? videos.slice(0, 9) : videos.slice(0, 6);
  return (
    <main className="">
      {/* Featured Video (baniere) */}
      <section className=" py-10 ">
        <div className="container px-4 sm:px-0">
          <FeaturedVideoBanner
            thumbnail={banner.src}
            title="Apprendre Next.js en 10 étapes"
            key={""}
          />
        </div>
      </section>

      {/* Section : Videos recommandées */}
      <section className="section">
        <div className="container px-4 sm:px-0">
          <SectionHeader
            title="Vidéos recommandées"
            videosLink={`/categories/${selectedCat}`}
            placeholder="Voir plus"
          />

          <Tab.Group>
            <Tab.List className="flex space-x-2 sm:space-x-3 mt-4 mb-6 overflow-x-auto no-scrollbar  border-b border-b-gray-300 py-2">
              {Object.keys(groupedVideos).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    selected
                      ? "bg-[#0a1b3b] text-white px-4 rounded-md text-[12px] sm:text-sm cursor-pointer transition-all duration-300"
                      : "bg-[#0a1b3b10] text-gray-700 px-4 py-[7px] sm:py-2 rounded-md text-[12px] sm:text-sm hover:bg-gray-300 cursor-pointer transition-all duration-300"
                  }
                  onClick={() => setSelectedCat(category)}
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              {Object.values(groupedVideos).map((videos, idx) => (
                <Tab.Panel key={idx}>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {videos
                      .slice(0, isExpanded ? videos.length : 6)
                      .map((video) => (
                        <VideoCard key={video.id} video={video} type="normal" />
                      ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          <ShowMore isExpanded={isExpanded} onToggle={handleToggle} />
        </div>
      </section>

      {/* Section : videos en live */}
      <section className="section">
        <div className="container px-4 sm:px-0">
          <SectionHeader
            title="En direct maintenant"
            videosLink="/live"
            placeholder="Tous Les Lives"
          />
          <div className="grid gap-4">
            {liveVideos.slice(0, 4).map((video: Video) => (
              <VideoCard key={video.id} video={video} type="live" />
            ))}
          </div>
          <ShowMore isExpanded={isExpanded} onToggle={handleToggle} />
        </div>
      </section>

      {/* Section : Vidéos en tendances */}
      <section className="section">
        <div className="container px-4 sm:px-0">
          <SectionHeader
            title="Vidéos en tendances"
            videosLink="/trends"
            placeholder="Toutes les Tendances"
          />
          <div className="grid  gap-6">
            {videos.slice(10, 13).map((video) => (
              <VideoCard key={video.id} video={video} type="trend" />
            ))}
          </div>
        </div>
      </section>

      {/* Section : Nouveautés */}
      <section className="section">
        <div className="container px-4 sm:px-0">
          <SectionHeader
            title="Derniers posts"
            videosLink="videos/news"
            placeholder="Nouvelles vidéos"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videosToShow.map((video) => (
              <VideoCard key={video.id} video={video} type="normal" />
            ))}
          </div>
          <ShowMore isExpanded={isExpanded} onToggle={handleToggle} />
        </div>
      </section>
    </main>
  );
}
