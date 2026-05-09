import { ArrowRight, Sparkles, MessageSquare, Wand2, Cpu, FolderKanban, Zap } from "lucide-react";
import { TalentiaLogo } from "./TalentiaLogo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero pt-24 pb-16">
      {/* Capa decorativa de cuadrícula sutil */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Halos de marca: ahora azul Talentia, sin naranjas ni violetas */}
      <div className="absolute top-1/4 -left-20 w-[36rem] h-[36rem] rounded-full blur-[120px] opacity-20 bg-brand float" />
      <div
        className="absolute bottom-1/4 -right-20 w-[36rem] h-[36rem] rounded-full blur-[120px] opacity-15"
        style={{ background: "var(--gradient-cool)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Marca Talentia como protagonista */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Una formación de
          </span>
          <TalentiaLogo className="h-8 md:h-10" />
        </div>

        {/* Badge edición */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand pulse-dot" />
          <span className="text-muted-foreground">Edición</span>
          <span className="font-semibold text-brand">2026</span>
          <span className="mx-1 opacity-30">·</span>
          <Sparkles className="w-3 h-3 text-brand" />
          <span className="text-foreground">Actualizada con Opus 4.7</span>
        </div>

        {/* Titular principal — geométrico, sin cursiva editorial */}
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.04em] font-bold mb-6">
          <span className="text-foreground">Guía Definitiva</span>
          <br />
          <span className="text-brand">de Claude</span>
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
          Aprende a usar Claude como un sistema de trabajo, no como un buscador.
          De principiante a profesional avanzado.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href="#que-es"
            className="group inline-flex items-center gap-2 bg-brand text-brand-foreground rounded-full px-6 py-3 text-sm font-semibold shadow-glow hover:scale-[1.02] transition"
          >
            Empezar formación
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a
            href="#modelos"
            className="inline-flex items-center gap-2 border border-foreground text-foreground rounded-full px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition"
          >
            Explorar guía
          </a>
        </div>

        {/* Stats — números corporativos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {[
            { v: "11", l: "Módulos" },
            { v: "25", l: "Acciones" },
            { v: "30", l: "Días de plan" },
            { v: "1M", l: "Tokens" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl py-5">
              <div className="font-display text-3xl md:text-4xl font-bold text-brand">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Mockups: ahora con esquema azul + neutro, sin naranja */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
          <MockCard icon={MessageSquare} title="Chat" hint="Conversación contextual" tone="brand" />
          <MockCard icon={FolderKanban} title="Projects" hint="Memoria persistente" tone="neutral" />
          <MockCard icon={Wand2} title="Artefactos" hint="Output ejecutable" tone="brand" />
          <MockCard icon={Cpu} title="Cowork" hint="Empleado digital" tone="neutral" />
        </div>

        <div className="mt-14 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Zap className="w-3 h-3 text-brand" />
          Desliza para empezar
        </div>
      </div>
    </section>
  );
}

function MockCard({
  icon: Icon,
  title,
  hint,
  tone,
}: {
  icon: any;
  title: string;
  hint: string;
  tone: "brand" | "neutral";
}) {
  return (
    <div className="group glass rounded-2xl p-5 text-left hover:-translate-y-1 transition-all duration-300 shadow-card">
      <div
        className={`w-10 h-10 rounded-xl grid place-items-center mb-4 shadow-soft ${
          tone === "brand"
            ? "bg-brand text-brand-foreground"
            : "bg-foreground text-background"
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="font-semibold text-sm mb-1 text-foreground">{title}</div>
      <div className="text-xs text-muted-foreground">{hint}</div>
      <div className="mt-4 h-px shimmer" />
    </div>
  );
}
