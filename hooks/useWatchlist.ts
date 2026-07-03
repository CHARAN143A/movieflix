"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";
import {
  getWatchlist,
  saveWatchlist,
} from "@/services/firestore";
import toast from "react-hot-toast";

export function useWatchlist() {
  const { user } = useAuth();

  const [watchlist, setWatchlist] = useState<number[]>([]);

  useEffect(() => {
    async function loadWatchlist() {
      if (!user) {
        setWatchlist([]);
        return;
      }

      try {
        const movies = await getWatchlist(user.uid);
        setWatchlist(movies);
      } catch (error) {
        console.error(error);
      }
    }

    loadWatchlist();
  }, [user]);

 const toggleWatchlist = async (id: number) => {
  if (!user) return;

  const exists = watchlist.includes(id);

  const updated = exists
    ? watchlist.filter((movieId) => movieId !== id)
    : [...watchlist, id];

  setWatchlist(updated);

  try {
    await saveWatchlist(user.uid, updated);

    if (exists) {
      toast("Removed from Watchlist 📑");
    } else {
      toast.success("Added to Watchlist 🔖");
    }
  } catch (error) {
    console.error(error);

    toast.error("Something went wrong");
  }
};

  return {
    watchlist,
    toggleWatchlist,
  };
}