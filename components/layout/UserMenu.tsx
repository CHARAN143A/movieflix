"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

import {
  FaChevronDown,
  FaUserCircle,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

export default function UserMenu() {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

async function handleLogout() {
  try {
    await signOut(auth);

    toast.success("Logged Out 👋");
  } catch (error) {
    toast.error("Logout failed");
  }
}

  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/auth/login"
          className="text-sm font-medium text-gray-300 transition hover:text-white"
        >
          Login
        </Link>

        <Link
          href="/auth/register"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-gray-200"
        >
          Register
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full transition hover:opacity-80"
      >
        <FaUserCircle className="text-4xl text-white" />

        <FaChevronDown
          className={`text-xs text-gray-400 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-64 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
          <div className="border-b border-slate-700 p-4">
            <p className="text-sm text-gray-400">
              Signed in as
            </p>

            <p className="truncate font-medium text-white">
              {user.email}
            </p>
          </div>

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-gray-300 transition hover:bg-slate-800 hover:text-white"
          >
            <FaUser />

            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 text-red-400 transition hover:bg-slate-800"
          >
            <FaSignOutAlt />

            Logout
          </button>
        </div>
      )}
    </div>
  );
}