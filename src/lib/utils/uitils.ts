import { BackendVideo, Video, VideoTypeEnum } from "@/types/Video";
import { formatDistanceToNow, format } from "date-fns";
import { fr } from "date-fns/locale";

export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function mapBackendVideoToVideo(data: BackendVideo): Video {
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    videoUrl: data.fileUrl.replace(/\\/g, "/"),
    thumbnail: {
      id: data.thumbnail?.id,
      url: data.thumbnail?.url.replace(/\\/g, "/") || "",
    },
    category: {
      id: data.category?.id,
      name: data.category?.name,
    },
    channel: {
      id: data.channel?.id,
      name: data.channel?.name,
      image: data.channel?.image || undefined,
    },
    views: data.views ?? 0,
    likes: data.likes ?? 0,
    videoType: data.videoType as VideoTypeEnum,
    currentViewers: data.liveViewers ? data.liveViewers : undefined,
    publishedAt: data.createdAt ?? data.createdAt,
    comments: data.comments ?? 0,
  };
}

export function formatRelativeDate(dateString: string) {
  return formatDistanceToNow(new Date(dateString), {
    addSuffix: true,
    locale: fr,
  });
}

export function formatExactDate(dateString: string) {
  return format(new Date(dateString), "dd MMM yyyy", { locale: fr });
}
