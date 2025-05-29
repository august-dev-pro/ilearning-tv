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
  publishedAt: string;
  comments?: number;
};

export type Category = {
  id: string;
  name: string;
};
