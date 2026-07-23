import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { Cursor } from "@/components/site/Cursor";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Experience } from "@/components/site/Experience";
import { Achievements } from "@/components/site/Achievements";
import { Services } from "@/components/site/Services";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhavuk — Founder & AI Builder" },
      { name: "description", content: "Founder building AI-powered products, startups, and intelligent software focused on solving real-world problems through automation, design, and engineering." },
      { property: "og:title", content: "Bhavuk — Founder & AI Builder" },
      { property: "og:description", content: "Founder building AI-powered products that solve real-world problems." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip text-foreground">
      <AnimatedBackground />
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
