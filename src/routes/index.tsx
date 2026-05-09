import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import {
  QueEs, Modelos, Planes, Ecosistema, Configuracion,
  Prompts, Errores, Mentalidad, Roadmap, MarketingFlow, CheatSheet
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guía Definitiva de Claude — Edición 2026" },
      { name: "description", content: "Plataforma visual de aprendizaje sobre Claude AI: modelos, projects, artefactos, prompts y un roadmap de 30 días." },
      { property: "og:title", content: "Guía Definitiva de Claude — Edición 2026" },
      { property: "og:description", content: "Una experiencia premium para aprender Claude desde cero." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="lg:pl-80">
        <Hero />
        <QueEs />
        <Modelos />
        <Planes />
        <Ecosistema />
        <Configuracion />
        <Prompts />
        <Errores />
        <Mentalidad />
        <Roadmap />
        <MarketingFlow />
        <CheatSheet />
      </main>
    </div>
  );
}
