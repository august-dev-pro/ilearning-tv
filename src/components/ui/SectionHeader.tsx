import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  videosLink?: string;
  placeholder?: string;
}

export default function SectionHeader({
  title,
  videosLink,
  placeholder,
}: SectionHeaderProps) {
  return (
    <div className="section_header">
      <h2 className="section_title">{title}</h2>
      {videosLink && (
        <Link
          href={`${videosLink}`}
          className="sec_link font-medium border-b border-b-transparent text-primary hover:text-primary/80 hover:border-b-gray-700 transition-colors"
        >
          {(placeholder && placeholder) || "Voir tout"} &rarr;
        </Link>
      )}
    </div>
  );
}
