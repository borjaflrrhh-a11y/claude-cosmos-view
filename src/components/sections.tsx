import { Section, Card, Pill } from "./primitives";
import { useState } from "react";
import {
  Brain, Zap, Code2, Check, X,
  MessageCircle, FolderKanban, Wand2, Cpu, Globe, Terminal,
  Shield, Sparkles, Target, Layers, Lightbulb, AlertTriangle,
  Compass, Rocket, TrendingUp, Search, FileText, Image as ImageIcon, Video,
  Megaphone, Mail, BarChart3, Clock, ChevronRight, ArrowRight, FlaskConical,
  Crown, Gauge, Trophy, Palette, Plug, BookOpen, Workflow, MousePointerClick,
  Send, Database, Mic, ShieldCheck, Calendar, Briefcase, Users, Hash,
  PenTool, Eye, GitBranch, Quote
} from "lucide-react";

/* ================================================================
   01 — QUÉ ES CLAUDE
================================================================ */
export function QueEs() {
  return (
    <Section id="que-es" eyebrow="01 — Fundamentos"
      title={<>No es ChatGPT con <span className="font-display italic text-gradient-brand">otro logo</span></>}
      lead="Mismo punto de partida — un chat. Resultado distinto: un sistema de trabajo."
    >
      {/* Comparison rail */}
      <div className="grid md:grid-cols-5 gap-3 mb-10">
        {[
          { icon: Brain, t: "Tono y criterio", d: "Razona, no rellena." },
          { icon: Layers, t: "1M tokens", d: "750k palabras de contexto." },
          { icon: Wand2, t: "Artefactos", d: "Entregables vivos." },
          { icon: FolderKanban, t: "Projects", d: "Memoria persistente." },
          { icon: Shield, t: "Honestidad", d: "Da feedback real." },
        ].map((x) => (
          <div key={x.t} className="glass rounded-2xl p-4 hover:-translate-y-1 transition-all duration-300">
            <div className="w-9 h-9 rounded-xl bg-brand/15 text-brand grid place-items-center mb-3">
              <x.icon className="w-4 h-4" />
            </div>
            <div className="font-semibold text-sm mb-1">{x.t}</div>
            <div className="text-xs text-muted-foreground">{x.d}</div>
          </div>
        ))}
      </div>

      {/* Quote callout */}
      <Card className="bg-gradient-to-br from-brand/[0.08] via-white/[0.02] to-transparent relative overflow-hidden">
        <Quote className="absolute top-4 right-4 w-16 h-16 text-brand/15" />
        <Pill tone="brand"><Lightbulb className="w-3 h-3" /> Idea clave</Pill>
        <p className="mt-4 text-xl md:text-2xl leading-snug max-w-3xl">
          Si lo usas como buscador, tendrás un buscador.
          Si lo usas como un <span className="text-gradient-brand font-semibold">sistema</span>, tendrás una ventaja competitiva real.
        </p>
      </Card>
    </Section>
  );
}

/* ================================================================
   02 — MODELOS
================================================================ */
export function Modelos() {
  const models = [
    { name: "Haiku 4.5", tag: "El Rápido", icon: Zap, speed: 95, intel: 70, cost: 95,
      use: "Clasificaciones, resúmenes cortos, atención al cliente.", color: "from-emerald-400/20", accent: "text-emerald-300" },
    { name: "Sonnet 4.6", tag: "El Equilibrado", icon: Gauge, speed: 80, intel: 88, cost: 75,
      use: "El 80% del trabajo profesional diario.", color: "from-blue-400/20", accent: "text-blue-300", featured: true },
    { name: "Opus 4.6", tag: "El Potente", icon: Brain, speed: 60, intel: 96, cost: 50,
      use: "Planificación, código exigente, análisis financiero.", color: "from-purple-400/20", accent: "text-purple-300" },
    { name: "Opus 4.7", tag: "Estado del arte", icon: Crown, speed: 55, intel: 100, cost: 40,
      use: "Sigue instrucciones al pie de la letra. Lo más complejo.", color: "from-orange-400/20", accent: "text-orange-300" },
  ];
  return (
    <Section id="modelos" eyebrow="02 — Modelos"
      title={<>Cuatro cerebros. <span className="font-display italic text-gradient-brand">Una decisión.</span></>}
      lead="Elegir el modelo correcto es lo primero que separa a un usuario de un profesional."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {models.map((m) => (
          <div key={m.name}
            className={`relative rounded-2xl p-6 border ${m.featured ? "border-brand/40 ring-brand" : "border-white/8"} glass shadow-card hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-b ${m.color} to-transparent opacity-60 pointer-events-none`} />
            <div className="relative">
              {m.featured && (
                <div className="absolute -top-2 -right-2">
                  <Pill tone="brand"><Trophy className="w-3 h-3" /> Default</Pill>
                </div>
              )}
              <div className={`w-10 h-10 rounded-xl bg-white/10 grid place-items-center mb-4 ${m.accent}`}>
                <m.icon className="w-5 h-5" />
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.tag}</div>
              <div className="text-2xl font-semibold mt-1 mb-5">{m.name}</div>
              <div className="space-y-3 mb-5">
                <Bar label="Velocidad" value={m.speed} />
                <Bar label="Inteligencia" value={m.intel} />
                <Bar label="Eficiencia coste" value={m.cost} />
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                {m.use}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decision tree */}
      <div className="mt-10 grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 bg-gradient-to-br from-white/[0.04] to-transparent">
          <div className="flex items-center gap-2 mb-6">
            <FlaskConical className="w-5 h-5 text-brand" />
            <h3 className="text-xl font-semibold">¿Qué modelo usar?</h3>
            <Pill>Selector inteligente</Pill>
          </div>
          <div className="space-y-2.5 text-sm">
            <Branch q="¿Tarea simple o crear archivos?" a="Sonnet 4.6" tone="brand" />
            <Branch q="¿Solo chat o búsqueda web sin archivos?" a="Haiku 4.5" tone="success" />
            <Branch q="¿Necesitas trabajar con tus archivos en profundidad?" a="Opus 4.7 + Cowork" tone="warning" />
            <Branch q="¿Razonamiento estratégico, código exigente?" a="Opus 4.6" tone="cool" />
          </div>
        </Card>

        <Card className="bg-gradient-to-b from-brand/[0.08] to-transparent">
          <Pill tone="warning"><AlertTriangle className="w-3 h-3" /> Lo que nadie te dice</Pill>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              "Opus no siempre gana: para texto conversacional, Sonnet suena más natural.",
              "Los modelos caros son más lentos. Si iteras rápido, Sonnet rinde más.",
              "Sonnet es un modelo. Cowork es un producto. No los confundas.",
            ].map((x) => (
              <li key={x} className="flex gap-2 text-muted-foreground">
                <ChevronRight className="w-3.5 h-3.5 text-brand shrink-0 mt-1" />{x}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
        <span>{label}</span><span>{value}</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-brand rounded-full" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Branch({ q, a, tone }: { q: string; a: string; tone: any }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3">
      <div className="text-xs text-muted-foreground flex-1">{q}</div>
      <ChevronRight className="w-3.5 h-3.5 text-brand" />
      <Pill tone={tone}>{a}</Pill>
    </div>
  );
}

/* ================================================================
   03 — PLANES
================================================================ */
export function Planes() {
  const plans = [
    { name: "Free", price: "0€", desc: "Para probar", features: ["Haiku 4.5", "Sonnet limitado", "15-20 msg/día", "Memoria básica"] },
    { name: "Pro", price: "20€", desc: "Profesional", features: ["Todos los modelos", "Projects ilimitados", "Artefactos · Skills", "Cowork · Connectors", "5x más uso"], featured: true },
    { name: "Max", price: "100€", desc: "Power users", features: ["Pro con límites altos", "Solo si lo usas 4-8h/día"] },
    { name: "Team", price: "30€/u", desc: "Equipo", features: ["Tus datos no entrenan", "Admin + analytics", "Mín. 5 usuarios"] },
  ];
  const myths = [
    { c: "warning", l: "Más rápido", v: "Falso. Mismos modelos, más usos." },
    { c: "warning", l: "Prioridad", v: "Solo en hora punta." },
    { c: "success", l: "1M tokens", v: "Real. Sonnet 4.6 + Opus." },
  ];
  return (
    <Section id="planes" eyebrow="03 — Planes"
      title={<>Qué pagar y <span className="font-display italic text-gradient-brand">qué no</span></>}
      lead="Si Claude es parte de tu trabajo diario, Pro es barato. Lo demás es marketing."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {plans.map((p) => (
          <div key={p.name}
            className={`rounded-2xl p-5 glass shadow-card flex flex-col ${p.featured ? "ring-brand border-brand/40" : ""}`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{p.desc}</div>
                <div className="text-xl font-semibold mt-1">{p.name}</div>
              </div>
              {p.featured && <Pill tone="brand">Mejor ROI</Pill>}
            </div>
            <div className="text-3xl font-semibold mt-4 mb-4">{p.price}<span className="text-xs text-muted-foreground font-normal">/mes</span></div>
            <ul className="space-y-2 text-sm flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Card className="mt-6">
        <div className="flex items-center gap-2 mb-4">
          <Eye className="w-4 h-4 text-brand" />
          <h3 className="font-semibold">Lo que es marketing y lo que no</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {myths.map((m) => (
            <div key={m.l} className="rounded-xl bg-white/[0.03] border border-white/5 p-4">
              <Pill tone={m.c as any}>{m.l}</Pill>
              <div className="text-sm text-muted-foreground mt-2">{m.v}</div>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}

/* ================================================================
   04 — ECOSISTEMA — Tabbed product explorer
================================================================ */
export function Ecosistema() {
  const products = [
    { id: "chat", name: "Chat", icon: MessageCircle, tag: "Punto de partida" },
    { id: "projects", name: "Projects", icon: FolderKanban, tag: "El gran salto" },
    { id: "artefactos", name: "Artefactos", icon: Wand2, tag: "Producir" },
    { id: "cowork", name: "Cowork", icon: Cpu, tag: "Empleado digital" },
    { id: "skills", name: "Skills", icon: BookOpen, tag: "Especialistas" },
    { id: "code", name: "Code", icon: Terminal, tag: "Terminal" },
    { id: "design", name: "Design", icon: Palette, tag: "Visual" },
    { id: "mcp", name: "MCP", icon: Plug, tag: "Connectors" },
    { id: "memoria", name: "Memoria", icon: Brain, tag: "Estilos" },
  ];
  const [active, setActive] = useState("projects");

  return (
    <Section id="ecosistema" eyebrow="04 — Ecosistema"
      title={<>Más que un chat. <span className="font-display italic text-gradient-brand">Una plataforma.</span></>}
      lead="9 productos. La mayoría solo usa 1/3. Aquí los descubres todos."
    >
      {/* Tab rail */}
      <div className="glass-strong rounded-2xl p-2 flex gap-1 overflow-x-auto scrollbar-thin">
        {products.map((p) => {
          const isActive = active === p.id;
          return (
            <button key={p.id} onClick={() => setActive(p.id)}
              className={`shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-medium transition
                ${isActive ? "bg-brand text-brand-foreground shadow-soft" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`}>
              <p.icon className="w-4 h-4" />
              {p.name}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        {active === "chat" && <ProductPanel
          title="Claude Chat" subtitle="El punto de partida"
          desc="Asistente conversacional para ideas, escritura e investigación."
          rules={["Mismo chat = mejor contexto", "Activa Pensamiento Extendido + Web", "Lee PDFs, imágenes, hojas (20MB · 5 archivos)"]}
          mock={<ChatMock />} />}
        {active === "projects" && <ProductPanel
          title="Projects" subtitle="El salto de usuario a profesional"
          desc="Espacio de trabajo con contexto permanente y base de conocimiento."
          rules={["Define quién eres y cómo trabajas una sola vez", "5 archivos buenos > 50 desordenados", "5 Projects clave: Negocio · Marca · Ventas · Producto · Personal"]}
          mock={<ProjectsMock />} />}
        {active === "artefactos" && <ProductPanel
          title="Artefactos" subtitle="Producir, no conversar"
          desc="Entregables reales: HTML, código, SVG, React, diagramas."
          rules={["Itera, no regeneres", "Texto · Código · Web · React · SVG · Mermaid", "Pide: ROI, landing, formulario, dashboard…"]}
          mock={<ArtifactsMock />} />}
        {active === "cowork" && <ProductPanel
          title="Cowork" subtitle="El empleado digital"
          desc="App de escritorio que trabaja por ti mientras haces otra cosa."
          rules={["Planifica en Chat, construye en Cowork", "Pide resultados, no pasos", "macOS y Windows · 15€/mes"]}
          mock={<CoworkMock />} />}
        {active === "skills" && <ProductPanel
          title="Skills" subtitle="El Claude que ejecuta"
          desc="Paquetes de instrucciones que Claude carga bajo demanda."
          rules={["xlsx · docx · pptx · pdf preinstaladas", "Crea las tuyas en .skill.md", "No ralentizan: usa todas las que quieras"]}
          mock={<SkillsMock />} />}
        {active === "code" && <ProductPanel
          title="Claude Code" subtitle="La terminal que programa"
          desc="Agente de desarrollo en línea de comandos. También para no programadores."
          rules={["Renombra 500 archivos en 30s", "Procesa CSVs de 2GB", "Describe el qué, no el cómo"]}
          mock={<CodeMock />} />}
        {active === "design" && <ProductPanel
          title="Claude Design" subtitle="El colaborador visual"
          desc="Wireframes, prototipos, decks y landings con TU marca."
          rules={["Lee tu sistema de diseño en onboarding", "10 direcciones en el tiempo de hacer 2", "Exporta a PDF, PPTX, HTML o Code"]}
          mock={<DesignMock />} />}
        {active === "mcp" && <ProductPanel
          title="MCP & Connectors" subtitle="Claude conectado a tu stack"
          desc="Gmail, Drive, Notion, Slack, GitHub, Figma… +50 servicios."
          rules={["OAuth: tú das y revocas permisos", "Conecta solo 3-5 servicios reales", "No conectes secretos críticos"]}
          mock={<MCPMock />} />}
        {active === "memoria" && <ProductPanel
          title="Memoria & Estilos" subtitle="Claude que te conoce"
          desc="Memoria entre sesiones, estilos personalizados y búsqueda en chats pasados."
          rules={["Memoria = rasgos personales", "Projects = contexto profesional", "Cambiar de estilo > cambiar de modelo"]}
          mock={<MemoryMock />} />}
      </div>
    </Section>
  );
}

function ProductPanel({ title, subtitle, desc, rules, mock }:
  { title: string; subtitle: string; desc: string; rules: string[]; mock: any }) {
  return (
    <div className="grid lg:grid-cols-5 gap-4">
      <Card className="lg:col-span-2 flex flex-col justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-brand mb-2">{subtitle}</div>
          <h3 className="text-3xl font-semibold tracking-tight mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{desc}</p>
          <div className="mt-6 space-y-2.5">
            {rules.map((r) => (
              <div key={r} className="flex items-start gap-2 text-sm">
                <span className="w-5 h-5 rounded-md bg-brand/15 text-brand grid place-items-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                <span className="text-muted-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <Card className="lg:col-span-3 p-0 overflow-hidden">
        {mock}
      </Card>
    </div>
  );
}

/* ---------- MOCK UIs ---------- */
function MockShell({ children, label }: { children: any; label: string }) {
  return (
    <div className="bg-black/40 h-full">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-3 text-xs font-mono text-muted-foreground">{label}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
function ChatMock() {
  return (
    <MockShell label="claude.ai/chat">
      <div className="space-y-3 text-sm">
        <div className="flex gap-3"><div className="w-7 h-7 rounded-full bg-white/10 grid place-items-center text-[11px]">Tú</div>
          <div className="rounded-2xl rounded-tl-sm bg-white/5 px-4 py-2.5 text-muted-foreground">Reescribe este email para que suene directo, no borde.</div></div>
        <div className="flex gap-3"><div className="w-7 h-7 rounded-full bg-brand text-brand-foreground grid place-items-center text-[11px] font-bold">C</div>
          <div className="rounded-2xl rounded-tl-sm bg-brand/10 border border-brand/20 px-4 py-2.5">Antes, dos preguntas para afinar el tono…</div></div>
        <div className="flex items-center gap-2 mt-4 px-3 py-2 rounded-xl bg-white/5 border border-white/5">
          <Sparkles className="w-3.5 h-3.5 text-brand" />
          <span className="text-xs text-muted-foreground">Pensamiento Extendido</span>
          <span className="ml-auto w-7 h-3.5 rounded-full bg-brand relative">
            <span className="absolute right-0.5 top-0.5 w-2.5 h-2.5 rounded-full bg-white" />
          </span>
        </div>
      </div>
    </MockShell>
  );
}
function ProjectsMock() {
  const items = [
    { n: "Contenido y Marca", k: 12, t: "brand" },
    { n: "Negocio y Estrategia", k: 8 },
    { n: "Clientes y Ventas", k: 15 },
    { n: "Producto", k: 6 },
    { n: "Personal", k: 4 },
  ];
  return (
    <MockShell label="claude.ai/projects">
      <div className="space-y-2">
        {items.map((i) => (
          <div key={i.n} className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${i.t === "brand" ? "bg-brand/10 border-brand/30" : "bg-white/5 border-white/5"}`}>
            <FolderKanban className={`w-4 h-4 ${i.t === "brand" ? "text-brand" : "text-muted-foreground"}`} />
            <span className="text-sm font-medium">{i.n}</span>
            {i.t === "brand" && <Pill tone="brand">Empieza aquí</Pill>}
            <span className="ml-auto text-xs text-muted-foreground">{i.k} archivos</span>
          </div>
        ))}
      </div>
    </MockShell>
  );
}
function ArtifactsMock() {
  return (
    <MockShell label="artifact · landing.html">
      <div className="rounded-lg overflow-hidden border border-white/10">
        <div className="bg-gradient-to-br from-brand/30 to-cool/30 p-5">
          <div className="text-xs text-white/70 mb-2">Tu marca</div>
          <div className="text-xl font-semibold">Lanza tu SaaS en 7 días</div>
          <div className="mt-3 inline-flex items-center gap-1.5 bg-white text-black rounded-full px-3 py-1 text-[11px] font-semibold">Empezar →</div>
        </div>
        <div className="grid grid-cols-3 gap-1 p-2 bg-white/[0.03]">
          {[1,2,3].map(i => <div key={i} className="h-8 rounded bg-white/5" />)}
        </div>
      </div>
      <div className="mt-3 flex gap-2 text-[11px]">
        <Pill tone="brand">Iterar</Pill><Pill>Copiar</Pill><Pill>Descargar</Pill>
      </div>
    </MockShell>
  );
}
function CoworkMock() {
  const tasks = [
    { s: "Leyendo 50 PDFs de proveedores", p: 100 },
    { s: "Comparando criterios", p: 72 },
    { s: "Generando tabla resumen", p: 0 },
  ];
  return (
    <MockShell label="cowork · sesión">
      <div className="space-y-3">
        {tasks.map((t, i) => (
          <div key={t.s} className="rounded-xl bg-white/5 p-3 border border-white/5">
            <div className="flex items-center gap-2 text-xs">
              <span className={`w-1.5 h-1.5 rounded-full ${t.p > 0 ? "bg-success pulse-dot" : "bg-white/20"}`} />
              <span>{t.s}</span>
              <span className="ml-auto text-muted-foreground font-mono">{t.p}%</span>
            </div>
            <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-brand transition-all" style={{ width: `${t.p}%` }} />
            </div>
          </div>
        ))}
      </div>
    </MockShell>
  );
}
function SkillsMock() {
  const skills = [
    { n: "xlsx", d: "Hojas con fórmulas" },
    { n: "docx", d: "Documentos formateados" },
    { n: "pptx", d: "Decks coherentes" },
    { n: "pdf", d: "OCR + extracción" },
    { n: "marca.skill.md", d: "Tu guía de estilo", mine: true },
  ];
  return (
    <MockShell label="skills · biblioteca">
      <div className="grid grid-cols-2 gap-2">
        {skills.map((s) => (
          <div key={s.n} className={`rounded-xl p-3 border ${s.mine ? "bg-brand/10 border-brand/30" : "bg-white/5 border-white/5"}`}>
            <div className="font-mono text-xs flex items-center gap-1.5">
              {s.mine && <Sparkles className="w-3 h-3 text-brand" />}
              {s.n}
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">{s.d}</div>
          </div>
        ))}
      </div>
    </MockShell>
  );
}
function CodeMock() {
  return (
    <MockShell label="~/projects · claude code">
      <div className="font-mono text-[12px] space-y-1.5">
        <div className="text-emerald-300">$ claude</div>
        <div className="text-muted-foreground">→ Renombra los 500 PNGs por fecha</div>
        <div className="text-blue-300">↳ leyendo carpeta…</div>
        <div className="text-blue-300">↳ 500 archivos detectados</div>
        <div className="text-emerald-300">✓ renombrados en 28.4s</div>
        <div className="text-muted-foreground">→ Convierte 100 .docx a .pdf</div>
        <div className="text-emerald-300">✓ done · /output/</div>
        <div className="opacity-60">_</div>
      </div>
    </MockShell>
  );
}
function DesignMock() {
  return (
    <MockShell label="claude.ai/design">
      <div className="grid grid-cols-3 gap-2">
        {[
          "from-brand/40 to-brand/10",
          "from-cool/40 to-cool/10",
          "from-purple-400/30 to-purple-400/5",
        ].map((g, i) => (
          <div key={i} className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${g} border border-white/10 p-2 flex flex-col`}>
            <div className="h-1.5 w-8 rounded-full bg-white/30 mb-2" />
            <div className="h-1 w-full rounded-full bg-white/15" />
            <div className="h-1 w-3/4 rounded-full bg-white/15 mt-1" />
            <div className="mt-auto h-4 w-12 rounded bg-white/30" />
          </div>
        ))}
      </div>
      <div className="mt-3 text-[11px] text-muted-foreground">3 direcciones · 1 brief</div>
    </MockShell>
  );
}
function MCPMock() {
  const apps = [
    { n: "Gmail", c: "text-red-300" }, { n: "Drive", c: "text-yellow-300" },
    { n: "Notion", c: "text-foreground" }, { n: "Slack", c: "text-purple-300" },
    { n: "Calendar", c: "text-blue-300" }, { n: "GitHub", c: "text-emerald-300" },
  ];
  return (
    <MockShell label="settings · connectors">
      <div className="grid grid-cols-2 gap-2">
        {apps.map((a) => (
          <div key={a.n} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2.5 border border-white/5">
            <Plug className={`w-3.5 h-3.5 ${a.c}`} />
            <span className="text-sm">{a.n}</span>
            <span className="ml-auto w-7 h-3.5 rounded-full bg-success/40 relative">
              <span className="absolute right-0.5 top-0.5 w-2.5 h-2.5 rounded-full bg-white" />
            </span>
          </div>
        ))}
      </div>
    </MockShell>
  );
}
function MemoryMock() {
  return (
    <MockShell label="settings · memory">
      <div className="space-y-2 text-sm">
        {[
          "Profesional de marketing en España",
          "Tono: directo, sin emojis",
          "Trabaja en SaaS B2B",
          "Prefiere bullets cortos",
        ].map((m) => (
          <div key={m} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 border border-white/5">
            <Brain className="w-3.5 h-3.5 text-brand" />
            <span className="text-muted-foreground">{m}</span>
            <X className="w-3 h-3 ml-auto text-muted-foreground/50 hover:text-foreground cursor-pointer" />
          </div>
        ))}
      </div>
    </MockShell>
  );
}

/* ================================================================
   05 — CONFIGURACIÓN
================================================================ */
export function Configuracion() {
  return (
    <Section id="configuracion" eyebrow="05 — Setup"
      title={<>15 minutos hoy. <span className="font-display italic text-gradient-brand">Cientos de horas mañana.</span></>}
      lead="El mejor ROI posible: configurar bien una sola vez."
    >
      <div className="grid lg:grid-cols-5 gap-4">
        {/* Folder structure */}
        <Card className="lg:col-span-3 p-0 overflow-hidden">
          <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
            <FolderKanban className="w-4 h-4 text-brand" />
            <span className="text-sm font-medium">/Claude-Trabajo</span>
            <Pill>estructura recomendada</Pill>
          </div>
          <div className="p-5 font-mono text-sm space-y-1.5">
            {[
              { n: "📁 SOBRE MÍ", d: "Quién eres + cómo escribes", sub: ["sobre-mi.md", "mi-voz.md", "mis-reglas.md"] },
              { n: "📁 PROYECTOS", d: "Uno por proyecto" },
              { n: "📁 PLANTILLAS", d: "Tus mejores trabajos" },
              { n: "📁 RESULTADOS", d: "Output de Claude" },
            ].map((f) => (
              <div key={f.n}>
                <div className="flex items-center gap-3 py-1.5">
                  <span>{f.n}</span>
                  <span className="text-xs text-muted-foreground ml-auto">{f.d}</span>
                </div>
                {f.sub && (
                  <div className="ml-6 space-y-0.5 text-xs text-muted-foreground">
                    {f.sub.map((s) => <div key={s}>└ {s}</div>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Settings checklist */}
        <Card className="lg:col-span-2">
          <Pill tone="brand"><Settings2 className="w-3 h-3" /> Settings que tocar 1 vez</Pill>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { l: "Profile", v: "Tu contexto profesional" },
              { l: "Privacy", v: "Off uso para entrenamiento" },
              { l: "Memory", v: "Limpia cada 2 meses" },
              { l: "Connectors", v: "Gmail · Drive · Notion · Slack" },
              { l: "Appearance", v: "Modo oscuro" },
              { l: "Data controls", v: "Export como backup" },
            ].map((x) => (
              <li key={x.l} className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-2.5 border border-white/5">
                <span className="font-medium text-sm w-24">{x.l}</span>
                <span className="text-xs text-muted-foreground">{x.v}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-6 bg-gradient-to-br from-brand/[0.08] to-transparent">
        <Pill tone="brand"><Quote className="w-3 h-3" /> Instrucciones globales</Pill>
        <p className="mt-3 font-mono text-sm text-muted-foreground leading-relaxed">
          "Soy [Nombre], [Rol]. Lee mis archivos antes de cada tarea. Haz preguntas antes de ejecutar.
          Muestra un plan primero. <span className="text-foreground">Nunca borres archivos sin mi aprobación explícita.</span>"
        </p>
      </Card>
    </Section>
  );
}

/* ================================================================
   06 — PROMPTS
================================================================ */
export function Prompts() {
  const ctrl = [
    { l: "C", w: "Contexto", d: "Lo que tienes.", c: "text-orange-300" },
    { l: "T", w: "Tarea", d: "Lo que quieres.", c: "text-blue-300" },
    { l: "R", w: "Resultado", d: "Formato y entrega.", c: "text-emerald-300" },
    { l: "L", w: "Límites", d: "Reglas y restricciones.", c: "text-purple-300" },
  ];
  const principles = [
    "Asigna un rol específico",
    "Da contexto operativo",
    "Especifica el formato",
    "Usa few-shot (ejemplos)",
    "Cadena de prompts",
    "Pide razonamiento paso a paso",
    "Itera, no regeneres",
    "Pide a Claude que se autorrevise",
  ];
  return (
    <Section id="prompts" eyebrow="06 — Prompt Engineering"
      title={<>El laboratorio de la <span className="font-display italic text-gradient-brand">comunicación con IA</span></>}
      lead="Rol + contexto + formato produce 10x mejor que cualquier truco psicológico."
    >
      {/* CTRL editor mock */}
      <Card className="bg-black/40 p-0 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <span className="ml-3 text-xs font-mono text-muted-foreground">prompt.ctrl</span>
          <Pill tone="brand">Fórmula CTRL</Pill>
        </div>
        <div className="p-6 font-mono text-sm space-y-3">
          <Line tag="C" tagColor="text-orange-300">Eres un copywriter B2B. Cliente: SaaS de logística en España.</Line>
          <Line tag="T" tagColor="text-blue-300">Escribe 5 hooks para LinkedIn sobre IA en operaciones.</Line>
          <Line tag="R" tagColor="text-emerald-300">Bullets. ≤ 14 palabras. Tono directo, sin emojis.</Line>
          <Line tag="L" tagColor="text-purple-300">Evita clichés ("revoluciona", "disrupt"). Sin halagos.</Line>
        </div>
      </Card>

      <div className="grid md:grid-cols-4 gap-3 mt-6">
        {ctrl.map((x) => (
          <Card key={x.l} className="text-center hover:-translate-y-1 transition">
            <div className={`text-6xl font-display ${x.c} mb-2`}>{x.l}</div>
            <div className="font-semibold mb-1">{x.w}</div>
            <div className="text-xs text-muted-foreground">{x.d}</div>
          </Card>
        ))}
      </div>

      {/* 8 principles + 3 myths */}
      <div className="grid lg:grid-cols-3 gap-4 mt-8">
        <Card className="lg:col-span-2">
          <Pill tone="brand">8 principios que siguen funcionando</Pill>
          <div className="mt-4 grid sm:grid-cols-2 gap-2">
            {principles.map((p, i) => (
              <div key={p} className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2.5">
                <span className="w-6 h-6 rounded-md bg-brand/15 text-brand grid place-items-center text-[11px] font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-muted-foreground">{p}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-red-500/[0.06] to-transparent">
          <Pill tone="warning">Los 3 mitos a enterrar</Pill>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { t: "Dar propinas", d: "Solo añade ruido." },
              { t: "Halagar", d: "Sesga a respuestas complacientes." },
              { t: "Amenazar", d: "Produce ansiedad, no calidad." },
            ].map((m) => (
              <li key={m.t} className="flex gap-3">
                <X className="w-4 h-4 text-red-300 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">{m.t}</div>
                  <div className="text-xs text-muted-foreground">{m.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Iteration timeline */}
      <Card className="mt-6">
        <Pill><GitBranch className="w-3 h-3" /> El output bueno está en el tercer intento</Pill>
        <div className="mt-4 grid md:grid-cols-4 gap-3">
          {[
            { n: "v0", t: "Primer output", d: "Evalúas." },
            { n: "v1", t: "Iteración 1", d: "Cambios concretos." },
            { n: "v2", t: "Iteración 2", d: "Pides crítica." },
            { n: "v3", t: "Iteración 3", d: "95% usable." },
          ].map((s, i) => (
            <div key={s.n} className="rounded-xl bg-white/[0.03] border border-white/5 p-4">
              <div className="text-2xl font-display text-brand">{s.n}</div>
              <div className="font-semibold text-sm mt-1">{s.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.d}</div>
              <div className="mt-3 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-brand" style={{ width: `${(i + 1) * 25}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}

function Line({ tag, tagColor, children }: { tag: string; tagColor: string; children: any }) {
  return (
    <div className="flex gap-3">
      <span className={`${tagColor} font-bold w-4`}>{tag}</span>
      <span className="text-foreground">{children}</span>
    </div>
  );
}

/* ================================================================
   07 — ERRORES
================================================================ */
export function Errores() {
  const items = [
    { bad: "Usar Claude como Google", good: "Construir un sistema con Projects" },
    { bad: "No configurar ningún Project", good: "5 Projects clave operativos" },
    { bad: "Usar siempre el mismo modelo", good: "Sonnet por defecto, sube a Opus" },
    { bad: "Ignorar los artefactos", good: "Pedir entregables reales" },
    { bad: "Regenerar 5 veces", good: "Editar y pedir cambios concretos" },
    { bad: "Prompts planos", good: "Rol + contexto + formato (CTRL)" },
    { bad: "Aceptar emojis y disclaimers", good: "Configurar tu estilo propio" },
    { bad: "Copiar y pegar a mano", good: "Activar Connectors" },
    { bad: "Quedarte con lo aprendido", good: "Formarte cada pocas semanas" },
    { bad: "Chat cuando necesitas Cowork", good: "Planifica en Chat, ejecuta en Cowork" },
  ];
  return (
    <Section id="errores" eyebrow="07 — Errores"
      title={<>Los 10 errores del <span className="font-display italic text-gradient-brand">90% de usuarios</span></>}
      lead="Todos corregibles. Si arreglas 3 esta semana, lo notas el viernes."
    >
      <div className="grid md:grid-cols-2 gap-3">
        {items.map((x, i) => (
          <div key={i} className="glass rounded-2xl p-0 overflow-hidden flex">
            <div className="w-12 shrink-0 grid place-items-center bg-white/[0.02] border-r border-white/5 text-xs font-mono text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 grid grid-cols-2">
              <div className="p-4 bg-red-500/[0.04]">
                <div className="flex items-center gap-1.5 text-[11px] text-red-300 mb-1.5"><X className="w-3 h-3" /> Mal</div>
                <div className="text-xs">{x.bad}</div>
              </div>
              <div className="p-4 bg-emerald-500/[0.04] border-l border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 mb-1.5"><Check className="w-3 h-3" /> Bien</div>
                <div className="text-xs">{x.good}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================
   08 — MENTALIDAD
================================================================ */
export function Mentalidad() {
  const ideas = [
    { icon: Workflow, t: "Diseña el sistema", d: "No busques un prompt milagro." },
    { icon: Clock, t: "Pensar bien parece lento", d: "La inteligencia se toma su tiempo." },
    { icon: Eye, t: "La IA refleja cómo la usas", d: "Si recibes ruido, revisa el input." },
    { icon: Compass, t: "Estrategia antes que ejecución", d: "Activa el modo planificador." },
    { icon: Target, t: "Más no es mejor", d: "Cuidado con producir sin pensar." },
    { icon: Briefcase, t: "El formato de trabajo limita", d: "A veces el problema no es la IA." },
  ];
  return (
    <Section id="mentalidad" eyebrow="08 — Mentalidad"
      title={<>Aprende a <span className="font-display italic text-gradient-brand">pensar</span> antes de aprender funciones</>}
      lead="Estos principios aplican a Claude y a cualquier IA."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {ideas.map((x) => (
          <Card key={x.t} className="hover:-translate-y-1 transition group">
            <div className="w-11 h-11 rounded-2xl bg-brand/15 text-brand grid place-items-center mb-4 group-hover:scale-110 transition">
              <x.icon className="w-5 h-5" />
            </div>
            <div className="font-semibold mb-1">{x.t}</div>
            <div className="text-sm text-muted-foreground">{x.d}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================
   09 — ROADMAP
================================================================ */
export function Roadmap() {
  const weeks = [
    { w: "Semana 1", t: "Configuración base", goals: ["Activa Pro", "Estilo propio", "Profile completo", "Project: Marca"], color: "from-orange-400/20" },
    { w: "Semana 2", t: "Artefactos y plantillas", goals: ["5 artefactos", "Landing · email · SVG", "Guarda plantillas"], color: "from-blue-400/20" },
    { w: "Semana 3", t: "Connectors esenciales", goals: ["Gmail · Calendar · Drive", "Project: Ventas", "Tareas reales"], color: "from-emerald-400/20" },
    { w: "Semana 4", t: "Automatización", goals: ["Cowork con tarea real", "Tarea programada", "Plan de 3 meses"], color: "from-purple-400/20" },
  ];
  const result = [
    "2 Projects operativos", "Estilo propio", "5 artefactos reutilizables",
    "3 connectors activos", "1 tarea automatizada", "Vibe working con Cowork",
  ];
  return (
    <Section id="roadmap" eyebrow="09 — 30 días"
      title={<>De cero a sistema en <span className="font-display italic text-gradient-brand">4 semanas</span></>}
      lead="Una hora al día. Cada semana un salto."
    >
      <div className="relative">
        <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-white/10" />
        <div className="grid md:grid-cols-4 gap-4 relative">
          {weeks.map((w, i) => (
            <div key={w.w} className="relative">
              <div className="hidden md:flex absolute -top-2 left-6 w-4 h-4 rounded-full bg-brand shadow-glow items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
              <Card className={`mt-8 hover:-translate-y-1 transition relative overflow-hidden bg-gradient-to-b ${w.color} to-transparent`}>
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">{w.w}</div>
                <div className="text-lg font-semibold mb-4">{w.t}</div>
                <ul className="space-y-2">
                  {w.goals.map((g) => (
                    <li key={g} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-4 h-4 rounded-md border border-brand/40 grid place-items-center">
                        <Check className="w-2.5 h-2.5 text-brand" />
                      </span>
                      {g}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Checkpoint</span>
                  <Pill tone="brand">{Math.round(((i + 1) / 4) * 100)}%</Pill>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Final outcome */}
      <Card className="mt-8 bg-gradient-to-br from-brand/[0.1] via-white/[0.02] to-transparent">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-brand" />
          <h3 className="font-semibold">Al final de los 30 días tendrás</h3>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-2">
          {result.map((r) => (
            <div key={r} className="rounded-xl bg-white/[0.04] border border-white/5 px-3 py-3 text-xs text-center">
              {r}
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}

/* ================================================================
   10 — MARKETING WORKFLOW
================================================================ */
export function MarketingFlow() {
  const flow = [
    { icon: BookOpen, t: "Carga tu contexto", d: "Lee la carpeta y resume." },
    { icon: ShieldCheck, t: "Establece reglas", d: "Cómo trabajas siempre." },
    { icon: Database, t: "Extrae datos", d: "Apify · 30 posts · competidores." },
    { icon: Target, t: "Alinea brief", d: "Preguntas antes de ejecutar." },
    { icon: PenTool, t: "Ejecuta plugin", d: "/marketing:borrador-contenido" },
    { icon: Send, t: "Entrega al equipo", d: "Notion · brief de diseño." },
    { icon: Workflow, t: "Automatiza", d: "Resumen diario por engagement." },
  ];
  return (
    <Section id="marketing" eyebrow="10 — Caso real"
      title={<>Marketing en <span className="font-display italic text-gradient-brand">5 minutos</span></>}
      lead="Un departamento de marketing pasa de cero a contenido listo, paso a paso."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 relative">
        {flow.map((s, i) => (
          <div key={s.t} className="relative">
            <Card className="text-center hover:-translate-y-1 transition h-full">
              <div className="w-11 h-11 rounded-2xl bg-brand/15 text-brand grid place-items-center mx-auto mb-3">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-muted-foreground mb-1">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-semibold text-sm mb-1">{s.t}</div>
              <div className="text-[11px] text-muted-foreground">{s.d}</div>
            </Card>
            {i < flow.length - 1 && (
              <ArrowRight className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 text-brand/60 z-10" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================
   11 — CHEAT SHEET — 25 actions verbatim
================================================================ */
export function CheatSheet() {
  const actions = [
    { v: "PREGUNTA", p: "Chat", i: MessageCircle },
    { v: "PIENSA", p: "Opus 4.7", i: Brain },
    { v: "RÁPIDO", p: "Sonnet 4.6", i: Zap },
    { v: "RAZONA", p: "Extended Thinking", i: Lightbulb },
    { v: "CONSTRUYE", p: "Cowork", i: Cpu },
    { v: "PROGRAMA", p: "Claude Code", i: Terminal },
    { v: "MODELA", p: "Claude in Excel", i: BarChart3 },
    { v: "SLIDES", p: "Gamma", i: Layers },
    { v: "DISEÑA", p: "Claude Design", i: Palette },
    { v: "NAVEGA", p: "Claude in Chrome", i: Globe },
    { v: "HAZ CLIC", p: "Computer Use", i: MousePointerClick },
    { v: "REMOTO", p: "Dispatch", i: Send },
    { v: "BUSCA", p: "Web Search", i: Search },
    { v: "INVESTIGA", p: "Research", i: Eye },
    { v: "ACTIVA", p: "Skills", i: BookOpen },
    { v: "AMPLÍA", p: "Plugins", i: Hash },
    { v: "PERSISTE", p: "Projects", i: FolderKanban },
    { v: "AUTOMATIZA", p: "Scheduled Tasks", i: Calendar },
    { v: "CONECTA", p: "Connectors", i: Plug },
    { v: "RENDERIZA", p: "Artifacts", i: Wand2 },
    { v: "VOZ", p: "Custom Styles", i: Mic },
    { v: "COMPARTE", p: "Team Projects", i: Users },
    { v: "PROTEGE", p: "Global Instructions", i: ShieldCheck },
    { v: "ORGANIZA", p: "Obsidian Vault", i: FileText },
    { v: "BRIEF", p: "About-Me File", i: Briefcase },
  ];
  return (
    <Section id="cheatsheet" eyebrow="11 — Cheat sheet"
      title={<>25 formas de usar <span className="font-display italic text-gradient-brand">Claude</span></>}
      lead="Tu mapa rápido. Guárdalo."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {actions.map((a, i) => {
          const isBrand = i % 2 === 0;
          return (
            <div key={a.v}
              className="group glass rounded-2xl p-4 hover:-translate-y-1 hover:bg-white/[0.07] transition-all duration-300 cursor-default relative overflow-hidden">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl grid place-items-center transition-transform group-hover:scale-110
                  ${isBrand ? "bg-brand text-brand-foreground" : "bg-cool text-white"}`}>
                  <a.i className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <div className="font-semibold text-sm tracking-wide">{a.v}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{a.p}</div>
            </div>
          );
        })}
      </div>

      {/* Final CTA */}
      <div className="mt-20 text-center">
        <Card className="py-14 bg-gradient-to-br from-brand/10 via-white/[0.02] to-transparent">
          <Sparkles className="w-6 h-6 text-brand mx-auto mb-4" />
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">
            Ahora por fin <span className="font-display italic text-gradient-brand">entiendes Claude</span>
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Vuelve a esta guía cuando lo necesites. Y empieza a construir tu sistema.
          </p>
          <a href="#que-es"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground rounded-full px-6 py-3 text-sm font-semibold shadow-glow hover:scale-[1.02] transition">
            Volver al inicio <ArrowRight className="w-4 h-4" />
          </a>
        </Card>

        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Una formación de</div>
          <img src={new URL("/src/assets/talentia-logo.jpg", import.meta.url).href}
            alt="Talentia" className="h-7 invert opacity-90" />
          <div className="text-xs text-muted-foreground mt-2">
            Guía Definitiva de Claude · Edición 2026 · Hecho con cuidado para alumnos curiosos.
          </div>
        </div>
      </div>
    </Section>
  );
}
