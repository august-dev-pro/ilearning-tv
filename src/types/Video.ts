export enum VideoTypeEnum {
  STANDARD = "STANDARD",
  LIVE = "LIVE",
  TREND = "TREND",
}

export type Video = {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: {
    id?: string;
    url: string;
  };
  category: {
    id?: string;
    name: string;
  };
  channel: {
    id: string;
    name: string;
    image?: string;
  };
  views?: number;
  likes?: number;
  videoType: VideoTypeEnum;
  currentViewers?: number | undefined;
  publishedAt?: Date;
  comments?: number;
};

export type BackendVideo = {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  category: { id: string; name: string };
  channel: { id: string; name: string; image: string | null };
  videoType: VideoTypeEnum;
  views: number;
  liveViewers?: number;
  publishedAt?: Date;
  duration?: number;
  tags?: string[];
  isLive?: boolean;
  shares?: number;
  reports?: number;
  thumbnail?: { id: string; url: string };
  likes?: number;
  comments?: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Category = {
  id: string;
  name: string;
};
