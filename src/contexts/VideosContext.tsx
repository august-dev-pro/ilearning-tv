"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  fetchAllVideos,
  fetchVideoById,
  fetchVideosByCategory,
  fetchPopularVideos,
  fetchRecentVideos, // Import de la fonction pour récupérer les vidéos récentes
  fetchVideosBySearch, // Import de la fonction pour rechercher des vidéos
} from "@/services/videoService";
import { Video } from "@/types/Video";

interface VideosContextProps {
  videos: Video[];
  popularVideos: Video[];
  liveVideos: Video[];
  recentVideos: Video[];
  getVideoById: (id: string) => Promise<Video | null>;
  getVideosByCategory: (category: string) => Promise<Video[]>;
  loadAllVideos: () => Promise<void>;
  loadLiveVideos: () => Promise<void>;
  loadRecentVideos: () => Promise<void>;
  isLoading: boolean;
  searchVideos: (query: string) => Promise<Video[]>;
}

const VideosContext = createContext<VideosContextProps | undefined>(undefined);

export const VideosProvider = ({ children }: { children: React.ReactNode }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [popularVideos, setPopularVideos] = useState<Video[]>([]);
  const [liveVideos, setLiveVideos] = useState<Video[]>([]);
  const [recentVideos, setRecentVideos] = useState<Video[]>([]); // État pour les vidéos récentes
  const [isLoading, setIsLoading] = useState(true);

  // Charger toutes les vidéos
  const loadAllVideos = async () => {
    try {
      setIsLoading(true);
      const allVideos = await fetchAllVideos();
      setVideos(allVideos);
    } catch (error) {
      console.error("Erreur lors du chargement des vidéos :", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Charger les vidéos populaires
  const loadPopularVideos = async () => {
    try {
      const popular = await fetchPopularVideos();
      setPopularVideos(popular);
    } catch (error) {
      console.error("Erreur lors du chargement des vidéos populaires :", error);
    }
  };

  // Charger les vidéos en direct
  const loadLiveVideos = async () => {
    try {
      const allVideos = await fetchAllVideos();
      const lives = allVideos.filter((video) => video.isLive);
      setLiveVideos(lives);
    } catch (error) {
      console.error("Erreur lors du chargement des vidéos en direct :", error);
    }
  };

  // Charger les vidéos récentes
  const loadRecentVideos = async () => {
    try {
      const recent = await fetchRecentVideos();
      setRecentVideos(recent);
    } catch (error) {
      console.error("Erreur lors du chargement des vidéos récentes :", error);
    }
  };

  // Récupérer une vidéo par ID
  const getVideoById = async (id: string): Promise<Video | null> => {
    try {
      return await fetchVideoById(id);
    } catch (error) {
      console.error(
        `Erreur lors de la récupération de la vidéo avec ID ${id} :`,
        error
      );
      return null;
    }
  };

  // Récupérer des vidéos par catégorie
  const getVideosByCategory = async (
    category: string
  ): Promise<Video[] | []> => {
    try {
      return await fetchVideosByCategory(category);
    } catch (error) {
      console.error(
        `Erreur lors de la récupération des vidéos pour la catégorie ${category} :`,
        error
      );
      return [];
    }
  };

  // Rechercher des vidéos
  const searchVideos = async (query: string): Promise<Video[]> => {
    try {
      return await fetchVideosBySearch(query); // Appel au service
    } catch (error) {
      console.error(
        `Erreur lors de la recherche des vidéos avec le terme "${query}" :`,
        error
      );
      return [];
    }
  };

  // Charger les vidéos au montage
  useEffect(() => {
    loadAllVideos();
    loadPopularVideos();
    loadLiveVideos();
    loadRecentVideos(); // Charger les vidéos récentes
  }, []);

  return (
    <VideosContext.Provider
      value={{
        videos,
        popularVideos,
        liveVideos,
        recentVideos, // Ajouter les vidéos récentes au contexte
        getVideoById,
        getVideosByCategory,
        loadAllVideos,
        loadLiveVideos,
        loadRecentVideos, // Ajouter la fonction pour recharger les vidéos récentes
        isLoading,
        searchVideos, // Ajouter la fonction de recherche au contexte
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => {
  const context = useContext(VideosContext);
  if (!context) {
    throw new Error("useVideos doit être utilisé dans un VideosProvider");
  }
  return context;
};
