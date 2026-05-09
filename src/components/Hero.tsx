import { ArrowRight, Sparkles, MessageSquare, Wand2, Cpu, FolderKanban } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero pt-24 pb-20">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-30 bg-brand float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-cool)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand pulse-dot" />
          <span className="text-muted-foreground">Edición</span>
          <span className="text-gradient-brand font-semibold">2026</span>
          <span className="mx-1 opacity-30">·</span>
          <Sparkles className="w-3 h-3 text-brand" />
          <span>Actualizada con Opus 4.7</span>
        </div>

        <h1 className="text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.04em] font-semibold mb-6">
          <span className="text-gradient">Guía Definitiva</span>
          <br />
          <span className="font-display italic text-gradient-brand">de Claude</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
          Todo lo que necesitas saber para usar Claude en tu vida y empresa.
          Una experiencia visual de aprendizaje, diseñada para que entiendas la IA en serio.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-20">
          <a href="#que-es"
            className="group inline-flex items-center gap-2 bg-brand text-brand-foreground rounded-full px-6 py-3 text-sm font-semibold shadow-glow hover:scale-[1.02] transition">
            Empezar
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a href="#modelos"
            className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm font-medium hover:bg-white/[0.06] transition">
            Explorar guía
          </a>
        </div>

        {/* Mockups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <MockCard icon={MessageSquare} title="Chats IA" hint="Conversación contextual" tone="brand" />
          <MockCard icon={FolderKanban} title="Projects" hint="Memoria persistente" tone="cool" />
          <MockCard icon={Wand2} title="Artefactos" hint="Output ejecutable" tone="brand" />
          <MockCard icon={Cpu} title="Cowork" hint="Automatización" tone="cool" />
        </div>
      </div>
    </section>
  );
}

function MockCard({ icon: Icon, title, hint, tone }: { icon: any; title: string; hint: string; tone: "brand" | "cool" }) {
  return (
    <div className="group glass rounded-2xl p-5 text-left hover:-translate-y-1 transition-all duration-300 hover:bg-white/[0.06] shadow-card">
      <div className={`w-10 h-10 rounded-xl grid place-items-center mb-4 ${tone === "brand" ? "bg-brand text-brand-foreground" : "bg-cool text-white"} shadow-soft`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="font-semibold text-sm mb-1">{title}</div>
      <div className="text-xs text-muted-foreground">{hint}</div>
      <div className="mt-4 h-px shimmer" />
    </div>
  );
}
