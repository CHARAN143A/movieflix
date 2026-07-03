"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast/headless";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

try {
  await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  toast.success("Account Created 🎉");

  router.push("/");
} catch (error) {
  toast.error("Registration failed");
}

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md space-y-6 rounded-xl bg-slate-900 p-8"
      >
        <h1 className="text-center text-3xl font-bold text-white">
          Create Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>
    </main>
  );
}