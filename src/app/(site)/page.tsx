"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FeaturedVideoBanner from "@/components/videos/FeaturedVideoBanner";
import VideoCard from "@/components/videos/VideoCard";
import { useState } from "react";
import ShowMore from "@/components/ui/ShowMore";
import SectionHeader from "@/components/ui/SectionHeader";
import { Tab } from "@headlessui/react";
import { useVideos } from "@/contexts/VideosContext";
import { Video } from "@/types/Video";
import HomeSkeleton from "@/components/ui/skeletons/HomeSkeleton";
import { useCategories } from "@/contexts/CategoryContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Home() {
  const [isExpandedRecommended, setIsExpandedRecommended] = useState(false);
  const [isExpandedLive, setIsExpandedLive] = useState(false);
  const [isExpandedTrending, setIsExpandedTrending] = useState(false);
  const [isExpandedNews, setIsExpandedNews] = useState(false);
  const [selectedCat, setSelectedCat] = useState("all");

  const { liveVideos, videos, trendingVideos, isLoading } = useVideos();
  const { categories, isCatLoading } = useCategories();

  if (isLoading || isCatLoading) {
    return <HomeSkeleton />;
  }

  const groupedVideos = {
    Tous: videos,
    ...Object.fromEntries(
      categories.map((cat) => [
        cat.name,
        videos.filter((v) => v.category.name === cat.name),
      ])
    ),
  };

  const videosToShow = isExpandedNews ? videos.slice(0, 9) : videos.slice(0, 6);
  return (
    <main className="">
      {/* Featured Video (baniere) */}
      <section className=" py-10 ">
        <div className="container px-4 sm:px-0">
          <Swiper
            slidesPerView={1}
            loop
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            style={{
              borderRadius: 12,
              overflow: "hidden",
              position: "relative",
            }}
            className="custom-swiper"
          >
            {videos.slice(10, 14).map((video) => (
              <SwiperSlide key={video.id}>
                <FeaturedVideoBanner
                  thumbnail={video.thumbnail.url}
                  title={video.title}
                  key={""}
                />{" "}
              </SwiperSlide>
            ))}
          </Swiper>
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
                      .slice(0, isExpandedRecommended ? videos.length : 6)
                      .map((video) => (
                        <VideoCard key={video.id} video={video} type="normal" />
                      ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          <ShowMore
            isExpanded={isExpandedRecommended}
            onToggle={() => setIsExpandedRecommended((prev) => !prev)}
          />
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
            {liveVideos
              .slice(0, isExpandedLive ? liveVideos.length : 4)
              .map((video: Video) => (
                <VideoCard key={video.id} video={video} type="live" />
              ))}
          </div>
          <ShowMore
            isExpanded={isExpandedLive}
            onToggle={() => setIsExpandedLive((prev) => !prev)}
          />{" "}
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
            {trendingVideos
              .slice(0, isExpandedTrending ? trendingVideos.length : 4)
              .map((video) => (
                <VideoCard key={video.id} video={video} type="trend" />
              ))}
          </div>

          <ShowMore
            isExpanded={isExpandedTrending}
            onToggle={() => setIsExpandedTrending((prev) => !prev)}
          />
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
          <ShowMore
            isExpanded={isExpandedNews}
            onToggle={() => setIsExpandedNews((prev) => !prev)}
          />
        </div>
      </section>
    </main>
  );
}
