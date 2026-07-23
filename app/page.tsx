import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProject from "@/components/FeaturedProject";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import OtherProjects from "@/components/OtherProjects";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFCFF] text-slate-900">
      <Reveal><ScrollProgress /></Reveal>
      <Reveal><Navbar /></Reveal>
      <Reveal><Hero /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><FeaturedProject /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><OtherProjects /></Reveal>
      <Reveal><Education /></Reveal>
      <Reveal><Achievements /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
      <BackToTop />
    </main>
  );
}