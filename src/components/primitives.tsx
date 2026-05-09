import { useReveal } from "@/lib/scroll";
import type { ReactNode } from "react";

export function Section({
  id, eyebrow, title, lead, children,
}: { id: string; eyebrow: string; title: ReactNode; lead?: ReactNode; children: ReactNode }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="relative py-28 px-6 scroll-mt-8">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
          <span className="w-8 h-px bg-brand" />
          {eyebrow}
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] mb-6 text-gradient max-w-4xl">
          {title}
        </h2>
        {lead && <p className="text-lg text-muted-foreground max-w-2xl mb-14 leading-relaxed">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`glass rounded-2xl p-6 shadow-card ${className}`}>{children}</div>
  );
}

export function Pill({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "brand" | "cool" | "success" | "warning" }) {
  const tones: Record<string, string> = {
    default: "bg-white/5 text-muted-foreground",
    brand: "bg-brand/15 text-brand",
    cool: "bg-[oklch(0.7_0.18_255_/_0.15)] text-[oklch(0.78_0.16_255)]",
    success: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
