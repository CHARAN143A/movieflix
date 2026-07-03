"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { useFavorites } from "@/hooks/useFavorites";
import { useWatchlist } from "@/hooks/useWatchlist";

export default function ProfilePage() {
  const { user } = useAuth();

  const { favorites } = useFavorites();
  const { watchlist } = useWatchlist();

  return (
    <ProtectedRoute>
      <main className="mx-auto min-h-screen max-w-4xl px-6 py-12">
        <div className="rounded-2xl bg-slate-900 p-8 shadow-lg">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-red-600 text-4xl font-bold">
              {user?.displayName?.charAt(0).toUpperCase() ||
                user?.email?.charAt(0).toUpperCase()}
            </div>

            <h1 className="text-3xl font-bold">
              {user?.displayName || "MovieFlix User"}
            </h1>

            <p className="text-gray-400">
              {user?.email}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <h2 className="text-3xl font-bold text-red-500">
                {favorites.length}
              </h2>

              <p className="mt-2 text-gray-300">
                Favorites
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <h2 className="text-3xl font-bold text-red-500">
                {watchlist.length}
              </h2>

              <p className="mt-2 text-gray-300">
                Watchlist
              </p>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}