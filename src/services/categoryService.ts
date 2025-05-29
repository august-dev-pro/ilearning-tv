import { API_URL } from "@/lib/api";
import { Category, mapBackendCategoryToCategory } from "@/types/Category";

// const API_URL = "http://127.0.0.1:3900/category";
const PROD_API_CAT_URL = `${API_URL}/category`;

// Récupérer toutes les vidéos
export const fetchAllCategories = async (): Promise<Category[]> => {
  const res = await fetch(PROD_API_CAT_URL);
  const json = await res.json();
  //console.log("json data: ", json);

  if (Array.isArray(json.data)) {
    return json.data.map(mapBackendCategoryToCategory);
  }
  return [];
};
