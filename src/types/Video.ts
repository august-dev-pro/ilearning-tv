export type Video = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  teacherImage: string;
  authorId: string;
  views?: number;
  likes?: number;
  isLive?: true;
  currentViewers?: number;
  publishedAt: string;
  comment?: number;
};
