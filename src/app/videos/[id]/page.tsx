import VideoCard from "@/components/videos/VideoCard2";
import { Video, videos } from "@/lib/api/videosData";
type PageProps = {
  params: { id: string };
};

export default function VideoPageById({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Vidéo + description */}
        <div id={params.id} className="lg:col-span-2">
          {/* Player */}
          <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Vidéo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Infos */}
          <h1 className="mt-4 text-2xl font-bold text-[#0a1b3b]">
            Apprendre NestJS étape par étape
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Publié le 5 mai 2025 • 14 350 vues
          </p>

          {/* Description */}
          <div className="mt-4 text-sm text-gray-700 space-y-2">
            <p>
              Dans cette vidéo, vous allez apprendre les bases de NestJS avec
              des exemples pratiques. Idéal pour les débutants en Node.js.
            </p>
            <p>🔗 Ressources disponibles dans la description.</p>
          </div>
        </div>

        {/* Suggestions */}
        <aside className="space-y-4">
          <h2 className="text-lg font-semibold text-[#0a1b3b] mb-2">
            Vidéos similaires
          </h2>
          <div className="space-y-3">
            {videos.map((video: Video) => (
              <VideoCard key={video.id} video={video} type="normal" />
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
