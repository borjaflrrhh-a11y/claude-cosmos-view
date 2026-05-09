import { useActiveSection } from "@/lib/scroll";
import {
  Sparkles, Layers, CreditCard, Network, Settings2, Wand2,
  AlertTriangle, Brain, CalendarDays, Megaphone, LayoutGrid, ChevronRight
} from "lucide-react";
import { useState } from "react";
import { TalentiaLogo } from "./TalentiaLogo";

export const SECTIONS = [
  { id: "que-es", label: "Qué es Claude", icon: Sparkles },
  { id: "modelos", label: "Modelos", icon: Layers },
  { id: "planes", label: "Planes", icon: CreditCard },
  { id: "ecosistema", label: "Ecosistema", icon: Network },
  { id: "configuracion", label: "Configuración", icon: Settings2 },
  { id: "prompts", label: "Prompt Engineering", icon: Wand2 },
  { id: "errores", label: "Errores", icon: AlertTriangle },
  { id: "mentalidad", label: "Mentalidad", icon: Brain },
  { id: "roadmap", label: "Roadmap 30 días", icon: CalendarDays },
  { id: "marketing", label: "Workflow Marketing", icon: Megaphone },
  { id: "cheatsheet", label: "Cheat Sheet", icon: LayoutGrid },
] as const;

export function Sidebar() {
  const active = useActiveSection(SECTIONS.map((s) => s.id));
  const [open, setOpen] = useState(false);
  const idx = SECTIONS.findIndex((s) => s.id === active);
  const progress = ((idx + 1) / SECTIONS.length) * 100;

  return (
    <>
      {/* Toggle móvil */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 glass-strong rounded-xl px-3 py-2 text-sm flex items-center gap-2 shadow-card"
        aria-label="Abrir navegación"
      >
        <LayoutGrid className="w-4 h-4 text-brand" />
        <span className="font-semibold">Guía</span>
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen w-72 z-40 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="h-full m-3 rounded-2xl glass-strong shadow-card flex flex-col overflow-hidden">
          {/* Cabecera con marca Talentia como protagonista */}
          <div className="p-5 border-b border-border">
            <div className="flex items-center justify-between gap-2">
              <TalentiaLogo className="h-6" />
              <span className="text-[10px] font-semibold text-brand uppercase tracking-wider">
                2026
              </span>
            </div>
            <div className="mt-3">
              <div className="text-sm font-semibold text-foreground leading-tight">
                Guía Definitiva
              </div>
              <div className="text-xs text-muted-foreground">de Claude</div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between text-[10px] text-muted-foreground mb-1.5 uppercase tracking-wider">
                <span>Progreso</span>
                <span className="font-semibold text-brand">
                  {idx + 1}/{SECTIONS.length}
                </span>
              </div>
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Lista de secciones */}
          <nav className="flex-1 overflow-y-auto p-3 scrollbar-thin">
            {SECTIONS.map((s, i) => {
              const Icon = s.icon;
              const isActive = active === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all relative
                    ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-brand rounded-r-full" />
                  )}
                  <span
                    className={`grid place-items-center w-7 h-7 rounded-lg text-[11px] font-mono font-semibold
                      ${
                        isActive
                          ? "bg-brand text-brand-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="w-4 h-4 opacity-70" />
                  <span className="font-medium">{s.label}</span>
                  {isActive && <ChevronRight className="w-3 h-3 ml-auto opacity-60" />}
                </a>
              );
            })}
          </nav>

          {/* Pie con estado */}
          <div className="p-4 border-t border-border bg-surface/50">
            <div className="flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-success pulse-dot" />
                <span className="font-medium">Sesión activa</span>
              </div>
              <span className="text-muted-foreground">
                © {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-foreground/40 backdrop-blur-sm z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
