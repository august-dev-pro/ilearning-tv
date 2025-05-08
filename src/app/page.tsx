"use client";
import FeaturedVideoBanner from "@/components/videos/FeaturedVideoBanner";
import VideoCard from "@/components/videos/VideoCard2";
import { Video, videos } from "@/lib/api/videosData";
import banner from "../../public/images/banner.jpg";
import { useState } from "react";
import ShowMore from "@/components/ui/ShowMore";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { Card } from "@/components/ui/card";
import { FcAssistant, FcBullish, FcBusinessman, FcIdea } from "react-icons/fc";
import SectionHeader from "@/components/ui/SectionHeader";

/* const categories = [
  {
    name: "Programmation",
    icon: "🖥️",
    color: "bg-blue-100 text-blue-800",
    slug: "programmation",
  },
  {
    name: "Business",
    icon: "💼",
    color: "bg-gray-100 text-gray-800",
    slug: "business",
  },
  {
    name: "Design",
    icon: "🎨",
    color: "bg-yellow-100 text-yellow-800",
    slug: "design",
  },
  {
    name: "Marketing",
    icon: "📈",
    color: "bg-red-100 text-red-800",
    slug: "marketing",
  },
  {
    name: "Finance",
    icon: "💰",
    color: "bg-green-100 text-green-800",
    slug: "finance",
  },
  {
    name: "Santé",
    icon: "🏥",
    color: "bg-pink-100 text-pink-800",
    slug: "sante",
  },
]; */

const categories = [
  { name: "Programmation", icon: <FcIdea />, color: "bg-blue-50" },
  { name: "Business", icon: <FcBusinessman />, color: "bg-gray-100" },
  { name: "Design", icon: <FcAssistant />, color: "bg-orange-50" },
  { name: "Marketing", icon: <FcBullish />, color: "bg-red-50" },
];
const channels = [
  { name: "CodeMaster", avatar: "/avatars/code.png", subscribers: "52K" },
  { name: "UX Studio", avatar: "/avatars/design.png", subscribers: "34K" },
];
export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    // Ici tu peux aussi déclencher d'autres actions si besoin (genre dispatch redux)
  };

  const videosToShow = isExpanded ? videos.slice(0, 9) : videos.slice(0, 6); // exemple simple
  return (
    <main className="">
      {/* Featured Video */}
      <section className=" py-10 ">
        <div className="container px-4 sm:px-0">
          <FeaturedVideoBanner
            thumbnail={banner.src}
            title="Apprendre Next.js en 10 étapes"
            key={""}
          />
        </div>
      </section>

      {/* Recommended Videos */}
      <section className="section">
        <div className="container px-4 sm:px-0">
          <SectionHeader
            title="Vidéos recommandées"
            sectionSlug="categories"
            placeholder="Voir plus"
          />{" "}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {videosToShow.map((video: Video) => (
              <VideoCard key={video.id} video={video} type="normal" />
            ))}
          </div>
          <ShowMore isExpanded={isExpanded} onToggle={handleToggle} />
        </div>
      </section>

      {/* Live Now */}
      <section className="section">
        <div className="container px-4 sm:px-0">
          <SectionHeader
            title="En direct maintenant"
            sectionSlug="live"
            placeholder="Tous Les Lives"
          />
          <div className="grid gap-4">
            {videos.slice(0, 4).map((video: Video) => (
              <VideoCard key={video.id} video={video} type="live" />
            ))}
          </div>
          <ShowMore isExpanded={isExpanded} onToggle={handleToggle} />
        </div>
      </section>

      {/* Section : Catégories Populaires */}
      <section className="section">
        <div className="container px-4 sm:px-0">
          <SectionHeader
            title="Catégories populaires"
            sectionSlug="categories"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 p-4 rounded-xl shadow-sm hover:shadow-md transition ${cat.color}`}
              >
                <div className="text-3xl">{cat.icon}</div>
                <span className="text-base font-medium">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Vidéos en tendances */}
      <section className="section">
        <div className="container px-4 sm:px-0">
          <SectionHeader
            title="Vidéos en tendances"
            sectionSlug="trends"
            placeholder="Toutes les Tendances"
          />
          <div className="grid  gap-6">
            {videos.slice(10, 13).map((video) => (
              <VideoCard key={video.id} video={video} type="trend" />
            ))}
          </div>
        </div>
      </section>

      {/* Section : Chaînes populaires */}
      {/* <section>
        <h2 className="text-2xl font-bold text-[#0a1b3b] mb-4">
          Chaînes populaires
        </h2>
        <div className="flex flex-wrap gap-6">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="flex items-center gap-4 bg-white rounded-xl shadow px-4 py-3 w-full sm:w-[300px]"
            >
              <img
                src={channel.avatar}
                alt={channel.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-[#0a1b3b]">{channel.name}</p>
                <p className="text-sm text-gray-500">
                  {channel.subscribers} abonnés
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Section : Nouveautés */}
      <section className="section">
        <div className="container px-4 sm:px-0">
          <SectionHeader
            title="Derniers posts"
            sectionSlug="news"
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
