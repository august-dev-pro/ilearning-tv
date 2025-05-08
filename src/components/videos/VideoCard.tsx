import { Video } from "@/lib/api/videosData";
import Link from "next/link";

type Props = { video: Video };

export default function VideoCard({ video }: Props) {
  return (
    <div className="rounded overflow-hidden shadow hover:shadow-lg transition">
      <iframe
        width="560"
        height="315"
        src={video.videoUrl}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{video.title}</h2>
        <p className="text-sm text-gray-500">{video.category}</p>

        <Link
          href={`/video/${video.id}`}
          className="text-blue-600 hover:underline mt-2 block"
        >
          Voir plus
        </Link>
      </div>
    </div>
  );
}
