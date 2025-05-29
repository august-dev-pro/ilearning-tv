"use client";
import { fetchAllCategories } from "@/services/categoryService";
import { Category } from "@/types/Category";
import React, { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext<{
  categories: Category[];
  isCatLoading: boolean;
}>({ categories: [], isCatLoading: true });

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCatLoading, setIsCatLoading] = useState(true);

  useEffect(() => {
    fetchAllCategories()
      .then((cats) =>
        setCategories(cats.filter((c) => (c.videos.length ?? 1) > 0))
      )
      .finally(() => setIsCatLoading(false));
  }, []);
  //   console.log("categories: ", categories);

  return (
    <CategoryContext.Provider value={{ categories, isCatLoading }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => useContext(CategoryContext);
