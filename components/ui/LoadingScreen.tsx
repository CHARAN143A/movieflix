"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            repeatType: "reverse",
          }}
          className="text-5xl font-black tracking-wider text-red-600"
        >
          MovieFlix
        </motion.h1>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="mx-auto mt-8 h-12 w-12 rounded-full border-4 border-red-600 border-t-transparent"
        />

        <p className="mt-6 text-gray-400">
          Loading amazing movies...
        </p>

      </div>
    </div>
  );
}