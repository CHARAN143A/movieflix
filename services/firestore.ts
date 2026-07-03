import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function getFavorites(uid: string) {
  const ref = doc(db, "favorites", uid);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return [];
  }

  return snapshot.data().movies || [];
}

export async function saveFavorites(
  uid: string,
  movies: number[]
) {
  const ref = doc(db, "favorites", uid);

  await setDoc(ref, {
    movies,
  });
}

export async function getWatchlist(uid: string) {
  const ref = doc(db, "watchlist", uid);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return [];
  }

  return snapshot.data().movies || [];
}

export async function saveWatchlist(
  uid: string,
  movies: number[]
) {
  const ref = doc(db, "watchlist", uid);

  await setDoc(ref, {
    movies,
  });
}