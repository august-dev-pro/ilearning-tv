import Image from "next/image";
import CertifiedBadge from "./CertifiedBadge";

interface AuthorInfoProps {
  author: string;
  teacherImage: string;
  certified?: boolean;
}

export default function AuthorInfo({
  author,
  teacherImage,
  certified = false,
}: AuthorInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={teacherImage}
        alt={`Photo de ${author}`}
        width={32}
        height={32}
        className="w-8 h-8 rounded-full border-2 border-white object-cover"
      />
      <div className="text-xs text-gray-700 flex items-center gap-1">
        {author}
        {certified && <CertifiedBadge />}
      </div>
    </div>
  );
}
