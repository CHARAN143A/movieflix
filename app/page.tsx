import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/movie/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
    </main>
  );
}