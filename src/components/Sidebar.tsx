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
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 glass-strong rounded-xl px-3 py-2 text-sm flex items-center gap-2"
        aria-label="Toggle navigation"
      >
        <LayoutGrid className="w-4 h-4" />
        <span className="font-medium">Guía</span>
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen w-72 z-40 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="h-full m-3 rounded-2xl glass-strong shadow-card flex flex-col overflow-hidden">
          {/* Brand */}
          <div className="p-5 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand grid place-items-center text-brand-foreground font-bold text-sm shadow-glow">
                C
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-sm">Guía Claude</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Edición 2026</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-[10px] text-muted-foreground mb-1.5 uppercase tracking-wider">
                <span>Progreso</span>
                <span>{idx + 1}/{SECTIONS.length}</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-brand transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

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
                    ${isActive
                      ? "bg-white/[0.06] text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"}`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-brand rounded-r-full" />
                  )}
                  <span className={`grid place-items-center w-7 h-7 rounded-lg text-[11px] font-mono
                    ${isActive ? "bg-brand text-brand-foreground" : "bg-white/5 text-muted-foreground"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="w-4 h-4 opacity-70" />
                  <span className="font-medium">{s.label}</span>
                  {isActive && <ChevronRight className="w-3 h-3 ml-auto opacity-60" />}
                </a>
              );
            })}
          </nav>

          {/* Footer — Talentia branding */}
          <div className="p-4 border-t border-white/5">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Una formación de</div>
            <TalentiaLogo className="h-5" />
            <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-success pulse-dot" />
              <span>Sesión activa</span>
            </div>
          </div>
        </div>
      </aside>

      {open && (
        <div className="lg:hidden fixed inset-0 bg-black/60 z-30" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
