import { Video } from "@/types/Video";
import { mapBackendVideoToVideo } from "@/lib/utils/uitils";
import { API_URL } from "@/lib/api";

// const API_VIDEO_URL = "http://127.0.0.1:3900/video";
const PROD_API_VIDEO_URL = `${API_URL}/video`;

// Récupérer toutes les vidéos
export const fetchAllVideos = async (): Promise<Video[]> => {
  const res = await fetch(PROD_API_VIDEO_URL);
  const json = await res.json();
  //console.log("json data: ", json);

  if (Array.isArray(json.data)) {
    return json.data.map(mapBackendVideoToVideo);
  }
  return [];
};

// Récupérer une vidéo par ID
export const fetchVideoById = async (
  videoId: string
): Promise<Video | null> => {
  const res = await fetch(`${PROD_API_VIDEO_URL}/${videoId}`);
  const json = await res.json();
  if (json.data) {
    return mapBackendVideoToVideo(json.data);
  }
  return null;
};

// Récupérer des vidéos par catégorie (si le backend le gère, sinon filtre côté front)
export const fetchVideosByCategory = async (
  category: string
): Promise<Video[]> => {
  const res = await fetch(PROD_API_VIDEO_URL);
  const json = await res.json();
  if (Array.isArray(json.data)) {
    return json.data
      .filter(
        (v: any) => v.category?.name?.toLowerCase() === category.toLowerCase()
      )
      .map(mapBackendVideoToVideo);
  }
  return [];
};

// Récupérer les vidéos par auteur
export const fetchVideosByAuthor = async (
  authorId: string
): Promise<Video[]> => {
  const res = await fetch(`${PROD_API_VIDEO_URL}/author/${authorId}`);
  const json = await res.json();
  if (Array.isArray(json.data)) {
    return json.data.map(mapBackendVideoToVideo);
  }
  return [];
};

// Récupérer les vidéos likées par un user
export const fetchLikedVideosByUser = async (
  userId: string
): Promise<Video[]> => {
  const res = await fetch(`${PROD_API_VIDEO_URL}/liked-by/${userId}`);
  const json = await res.json();
  if (Array.isArray(json.data)) {
    return json.data.map(mapBackendVideoToVideo);
  }
  return [];
};

// Récupérer les vidéos commentées par un user
export const fetchCommentedVideosByUser = async (
  userId: string
): Promise<Video[]> => {
  const res = await fetch(`${PROD_API_VIDEO_URL}/commented-by/${userId}`);
  const json = await res.json();
  if (Array.isArray(json.data)) {
    return json.data.map(mapBackendVideoToVideo);
  }
  return [];
};

// Récupérer les vidéos populaires (à trier côté front si pas d'endpoint dédié)
export const fetchPopularVideos = async (): Promise<Video[]> => {
  const videos = await fetchAllVideos();
  return videos.sort((a, b) => (b.views || 0) - (a.views || 0));
};

// Récupérer les vidéos récentes (à trier côté front si pas d'endpoint dédié)
export const fetchRecentVideos = async (): Promise<Video[]> => {
  const videos = await fetchAllVideos();
  return videos.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

// Rechercher des vidéos par mot-clé (à filtrer côté front si pas d'endpoint dédié)
export const fetchVideosBySearch = async (query: string): Promise<Video[]> => {
  const videos = await fetchAllVideos();
  const lowerCaseQuery = query.toLowerCase();
  return videos.filter(
    (video) =>
      video.title.toLowerCase().includes(lowerCaseQuery) ||
      video.description.toLowerCase().includes(lowerCaseQuery) ||
      video.category.name.toLowerCase().includes(lowerCaseQuery)
  );
};

// Récupérer les vidéos "live"
export const fetchLiveVideos = async (): Promise<Video[]> => {
  const videos = await fetchAllVideos();
  return videos.filter((video) => video.videoType === "LIVE");
};

// Récupérer les vidéos "tendances"
export const fetchTrendingVideos = async (): Promise<Video[]> => {
  const videos = await fetchAllVideos();

  return videos.filter((video) => video.videoType === "TREND");
};
