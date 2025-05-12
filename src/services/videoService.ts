import { fakeVideos } from "@/mocks/fakeVideos";
import { Video } from "@/types/Video";

// Récupérer toutes les vidéos
export const fetchAllVideos = async (): Promise<Video[] | []> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(fakeVideos), 500);
  });
};

// Récupérer une vidéo par ID
export const fetchVideoById = async (
  videoId: string
): Promise<Video | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const video = fakeVideos.find((v) => v.id === videoId);
      if (video) resolve(video);
      else reject(new Error(`Vidéo avec l'ID ${videoId} introuvable.`));
    }, 500);
  });
};

// Récupérer des vidéos par catégorie
export const fetchVideosByCategory = async (
  category: string
): Promise<Video[] | []> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const videos = fakeVideos.filter(
        (v) => v.category.toLowerCase() === category.toLowerCase()
      );
      resolve(videos);
    }, 500);
  });
};

// Récupérer les vidéos les plus populaires (par exemple, triées par vues)
export const fetchPopularVideos = async (): Promise<Video[] | []> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const popularVideos = [...fakeVideos].sort(
        (a, b) => (b.views || 0) - (a.views || 0)
      );
      resolve(popularVideos);
    }, 500);
  });
};

// Récupérer les vidéos récentes (triées par date décroissante)
export const fetchRecentVideos = async (): Promise<Video[] | []> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const recentVideos = [...fakeVideos].sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return dateB - dateA; // Tri par date décroissante
      });
      console.log("Vidéos récentes récupérées :", recentVideos);
      resolve(recentVideos);
    }, 500);
  });
};

// Rechercher des vidéos par mot-clé
export const fetchVideosBySearch = async (
  query: string
): Promise<Video[] | []> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lowerCaseQuery = query.toLowerCase();
      const results = fakeVideos.filter(
        (video) =>
          video.title.toLowerCase().includes(lowerCaseQuery) ||
          video.description.toLowerCase().includes(lowerCaseQuery) ||
          video.category.toLowerCase().includes(lowerCaseQuery)
      );
      resolve(results);
    }, 500);
  });
};
