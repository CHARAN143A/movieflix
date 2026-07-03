"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";
import {
  getFavorites,
  saveFavorites,
} from "@/services/firestore";
import toast from "react-hot-toast";

export function useFavorites() {
  const { user } = useAuth();

  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    async function loadFavorites() {
      if (!user) {
        setFavorites([]);
        return;
      }

      try {
        const movies = await getFavorites(user.uid);
        setFavorites(movies);
      } catch (error) {
        console.error(error);
      }
    }

    loadFavorites();
  }, [user]);

const toggleFavorite = (id: number) => {
  const exists = favorites.includes(id);

  const updated = exists
    ? favorites.filter((movieId) => movieId !== id)
    : [...favorites, id];

  setFavorites(updated);

  localStorage.setItem(
    "favorites",
    JSON.stringify(updated)
  );

  if (exists) {
    toast("Removed from Favorites 💔");
  } else {
    toast.success("Added to Favorites ❤️");
  }
};

  return {
    favorites,
    toggleFavorite,
  };
}