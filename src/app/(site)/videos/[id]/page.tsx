import AuthorInfo from "@/components/ui/AuthorInfo";
import VideoCard from "@/components/videos/VideoCard2";
import { Video, videos } from "@/lib/api/videosData";
import user from "../../../../../public/images/stephan-wahl.jpeg";
import { FaThumbsUp } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

export default async function VideoPageById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const selectedVideo = videos.find((video) => video.id === id);

  if (!selectedVideo) {
    return;
  }

  const sucgessionsVideos = videos.filter(
    (video) =>
      video.category === selectedVideo.category ||
      video.description.includes(selectedVideo.category)
  );

  return (
    <div className="min-h-screen  text-gray-800">
      <div className="container">
        <main className="max-w-6xl mx-auto  py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Vidéo + description */}
            <div className="">
              {/* Player */}
              <div className="sticky top-4 lg:static z-[10]  aspect-video bg-black lg:rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={selectedVideo?.videoUrl}
                  title="Vidéo"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="px-4 sm:px-0">
                {/* Infos */}
                <h1 className="mt-4 text-lg sm:text-xl  md:text-2xl font-bold text-[#0a1b3b]">
                  {selectedVideo.title}
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Publié le 5 mai 2025 • 14 350 vues
                </p>

                <AuthorInfo
                  teacherImage={user.src}
                  author={selectedVideo.author}
                  certified={true}
                />

                <div className="flex items-center space-x-6 mt-4">
                  <button className="flex items-center space-x-2 cursor-pointer">
                    <FaThumbsUp />
                    <span className="text-sm">120</span>
                  </button>

                  <button className="flex items-center space-x-2 cursor-pointer">
                    <FiMessageCircle />
                    <span className="text-sm">5 commentaires</span>
                  </button>
                </div>

                {/* Description */}
                <div className="mt-4 text-sm text-gray-700 space-y-2">
                  <p>{selectedVideo?.description}</p>
                  <p>🔗 Ressources disponibles dans la description.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <aside className="space-y-4 px-4 sm:px-0 lg:pl-4 border-gray-200 lg:border-l">
            <h2 className="text-lg font-semibold text-[#0a1b3b] mb-2">
              Vidéos similaires
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-1 space-y-3">
              {sucgessionsVideos.slice(0, 8).map((video: Video) => (
                <VideoCard key={video.id} video={video} type="normal" />
              ))}
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
