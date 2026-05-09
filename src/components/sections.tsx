import { Section, Card, Pill } from "./primitives";
import {
  Brain, Zap, Coins, Code2, GraduationCap, Building2, Check, X,
  MessageCircle, FolderKanban, Wand2, Cpu, Globe, Smartphone, Terminal,
  Settings2, Shield, Sparkles, Target, Layers, Lightbulb, AlertTriangle,
  Compass, Calendar, Rocket, TrendingUp, Search, FileText, Image, Video,
  Megaphone, Mail, BarChart3, Clock, ChevronRight, ArrowRight, FlaskConical,
  Crown, Gauge, Trophy
} from "lucide-react";

/* ============ QUE ES CLAUDE ============ */
export function QueEs() {
  const features = [
    { icon: Brain, title: "Razonamiento real", desc: "No autocompleta. Piensa, analiza y propone." },
    { icon: Shield, title: "Diseño seguro", desc: "Constitución basada en principios. Menos alucinaciones." },
    { icon: Sparkles, title: "Multimodal", desc: "Texto, imagen, código y documentos en un solo flujo." },
    { icon: Target, title: "Foco práctico", desc: "Ideal para trabajo creativo, técnico y empresarial." },
  ];
  return (
    <Section id="que-es" eyebrow="01 — Fundamentos"
      title={<>Una IA que <span className="font-display italic text-gradient-brand">piensa contigo</span></>}
      lead="Claude es la familia de modelos de Anthropic. Está diseñada para ser útil, honesta e inofensiva — y para integrarse en tu trabajo real, no solo para responder preguntas."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f) => (
          <Card key={f.title} className="hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand grid place-items-center mb-4">
              <f.icon className="w-5 h-5" />
            </div>
            <div className="font-semibold mb-1">{f.title}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{f.desc}</div>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        <Card className="md:col-span-2 bg-gradient-to-br from-white/[0.03] to-transparent">
          <Pill tone="brand"><Lightbulb className="w-3 h-3" /> Idea clave</Pill>
          <p className="mt-4 text-xl leading-relaxed">
            Claude no es un chatbot. Es un <span className="text-gradient-brand font-semibold">colaborador con memoria, contexto y capacidad de ejecutar</span>.
            Trátalo como un equipo, no como un buscador.
          </p>
        </Card>
        <Card>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Hecho por</div>
          <div className="text-2xl font-semibold mb-1">Anthropic</div>
          <div className="text-sm text-muted-foreground">
            Fundada en 2021 por ex-investigadores de OpenAI. Foco en IA segura y alineada.
          </div>
        </Card>
      </div>
    </Section>
  );
}

/* ============ MODELOS ============ */
export function Modelos() {
  const models = [
    {
      name: "Haiku 4.5", tag: "Velocidad", icon: Zap,
      speed: 95, intel: 70, cost: 95,
      use: "Tareas rápidas, automatizaciones, chats masivos",
      color: "from-emerald-400/20 to-transparent", accent: "text-emerald-300",
    },
    {
      name: "Sonnet 4.6", tag: "Equilibrio", icon: Gauge,
      speed: 80, intel: 88, cost: 75,
      use: "Día a día, marketing, código, análisis",
      color: "from-blue-400/20 to-transparent", accent: "text-blue-300",
      featured: true,
    },
    {
      name: "Opus 4.6", tag: "Inteligencia", icon: Brain,
      speed: 60, intel: 96, cost: 50,
      use: "Investigación, estrategia, problemas complejos",
      color: "from-purple-400/20 to-transparent", accent: "text-purple-300",
    },
    {
      name: "Opus 4.7", tag: "Frontera", icon: Crown,
      speed: 55, intel: 100, cost: 40,
      use: "Razonamiento avanzado, agentes autónomos",
      color: "from-orange-400/20 to-transparent", accent: "text-orange-300",
    },
  ];

  return (
    <Section id="modelos" eyebrow="02 — Modelos"
      title={<>Cuatro cerebros. <span className="font-display italic text-gradient-brand">Una decisión.</span></>}
      lead="Cada modelo de Claude está afinado para un tipo de trabajo. Aprende a elegir el correcto según velocidad, inteligencia y coste."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {models.map((m) => (
          <div key={m.name}
            className={`relative rounded-2xl p-6 border ${m.featured ? "border-brand/40 ring-brand" : "border-white/8"} glass shadow-card hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-b ${m.color} opacity-60 pointer-events-none`} />
            <div className="relative">
              {m.featured && (
                <div className="absolute -top-2 -right-2">
                  <Pill tone="brand"><Trophy className="w-3 h-3" /> Recomendado</Pill>
                </div>
              )}
              <div className={`w-10 h-10 rounded-xl bg-white/10 grid place-items-center mb-4 ${m.accent}`}>
                <m.icon className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{m.tag}</div>
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
      <div className="mt-12">
        <Card className="bg-gradient-to-br from-white/[0.04] to-transparent">
          <div className="flex items-center gap-2 mb-6">
            <FlaskConical className="w-5 h-5 text-brand" />
            <h3 className="text-xl font-semibold">¿Qué modelo usar?</h3>
            <span className="text-xs text-muted-foreground ml-2">Selector inteligente</span>
          </div>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <DecisionStep q="¿Necesitas respuesta en menos de 2s?" a="Haiku 4.5" tone="success" />
            <DecisionStep q="¿Es trabajo del día a día?" a="Sonnet 4.6" tone="brand" />
            <DecisionStep q="¿Problema complejo o estratégico?" a="Opus 4.6" tone="cool" />
            <DecisionStep q="¿Agente autónomo o razonamiento profundo?" a="Opus 4.7" tone="warning" />
          </div>
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

function DecisionStep({ q, a, tone }: { q: string; a: string; tone: any }) {
  return (
    <div className="rounded-xl bg-white/[0.03] p-4 border border-white/5">
      <div className="text-xs text-muted-foreground mb-3 leading-relaxed">{q}</div>
      <div className="flex items-center gap-2">
        <ChevronRight className="w-3 h-3 text-brand" />
        <Pill tone={tone}>{a}</Pill>
      </div>
    </div>
  );
}

/* ============ PLANES ============ */
export function Planes() {
  const plans = [
    { name: "Free", price: "0€", desc: "Probar Claude", features: ["Acceso limitado a Sonnet", "Chats básicos", "Sin Projects"] },
    { name: "Pro", price: "20€", desc: "Profesional individual", features: ["Sonnet + Opus", "Projects ilimitados", "Artefactos completos", "5x más uso"], featured: true },
    { name: "Max", price: "100€", desc: "Power users", features: ["Acceso prioritario", "Cowork avanzado", "20x uso", "Modelos frontera"] },
    { name: "Team", price: "30€/u", desc: "Equipos pequeños", features: ["Workspace compartido", "Admin", "Seguridad SSO"] },
    { name: "Enterprise", price: "Custom", desc: "Empresas", features: ["SLA dedicado", "API privada", "Compliance avanzado"] },
  ];
  return (
    <Section id="planes" eyebrow="03 — Planes"
      title={<>Elige el plan que <span className="font-display italic text-gradient-brand">crece contigo</span></>}
      lead="Desde curiosos hasta equipos enterprise. Un mismo Claude, distintos niveles de potencia y control."
    >
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
        {plans.map((p) => (
          <div key={p.name}
            className={`rounded-2xl p-5 glass shadow-card flex flex-col ${p.featured ? "ring-brand border-brand/40" : ""}`}>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.desc}</div>
            <div className="text-xl font-semibold mt-1">{p.name}</div>
            <div className="text-3xl font-semibold mt-3 mb-4">{p.price}<span className="text-xs text-muted-foreground font-normal">/mes</span></div>
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
    </Section>
  );
}

/* ============ ECOSISTEMA ============ */
export function Ecosistema() {
  const items = [
    { icon: Globe, title: "Claude.ai", desc: "Web — el centro de control" },
    { icon: Smartphone, title: "Apps móviles", desc: "iOS y Android nativas" },
    { icon: Terminal, title: "Claude Code", desc: "Terminal y editor" },
    { icon: Code2, title: "API", desc: "Integración programática" },
    { icon: FolderKanban, title: "Projects", desc: "Espacios con memoria" },
    { icon: Wand2, title: "Artefactos", desc: "Output ejecutable" },
    { icon: Cpu, title: "Cowork", desc: "Agentes autónomos" },
    { icon: MessageCircle, title: "MCP", desc: "Conectores universales" },
  ];
  return (
    <Section id="ecosistema" eyebrow="04 — Ecosistema"
      title={<>Más que un chat. <span className="font-display italic text-gradient-brand">Una plataforma.</span></>}
      lead="Claude vive en muchos sitios. Conoce dónde puedes usarlo y qué le da superpoderes."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((i) => (
          <Card key={i.title} className="hover:bg-white/[0.06] transition group">
            <div className="w-9 h-9 rounded-lg bg-brand/15 text-brand grid place-items-center mb-3 group-hover:scale-110 transition">
              <i.icon className="w-4 h-4" />
            </div>
            <div className="font-semibold text-sm">{i.title}</div>
            <div className="text-xs text-muted-foreground mt-1">{i.desc}</div>
          </Card>
        ))}
      </div>

      {/* Featured trio: Projects, Artefactos, Cowork */}
      <div className="mt-12 grid md:grid-cols-3 gap-4">
        <FeatureMock title="Projects" subtitle="Memoria persistente"
          icon={FolderKanban} accent="brand">
          <div className="space-y-2">
            {["Brand bible v2", "Lanzamiento Q1", "Investigación SaaS"].map((n, i) => (
              <div key={n} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span className="font-medium">{n}</span>
                <span className="ml-auto text-muted-foreground">{i + 12} archivos</span>
              </div>
            ))}
          </div>
        </FeatureMock>
        <FeatureMock title="Artefactos" subtitle="Output ejecutable"
          icon={Wand2} accent="cool">
          <div className="rounded-lg bg-black/40 p-3 font-mono text-[11px] text-muted-foreground border border-white/5">
            <div className="text-emerald-300">{`<Component>`}</div>
            <div className="pl-3">render dashboard</div>
            <div className="pl-3 text-blue-300">interactive ✓</div>
            <div className="text-emerald-300">{`</Component>`}</div>
          </div>
          <div className="text-xs text-muted-foreground mt-3">Apps, código y documentos vivos en una ventana.</div>
        </FeatureMock>
        <FeatureMock title="Cowork" subtitle="Agentes autónomos"
          icon={Cpu} accent="brand">
          <div className="space-y-2 text-xs">
            {[
              { s: "Investigando…", on: true },
              { s: "Resumiendo 12 fuentes", on: true },
              { s: "Generando entregable", on: false },
            ].map((x) => (
              <div key={x.s} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                <span className={`w-1.5 h-1.5 rounded-full ${x.on ? "bg-success pulse-dot" : "bg-white/20"}`} />
                {x.s}
              </div>
            ))}
          </div>
        </FeatureMock>
      </div>
    </Section>
  );
}

function FeatureMock({ title, subtitle, icon: Icon, accent, children }:
  { title: string; subtitle: string; icon: any; accent: "brand" | "cool"; children: any }) {
  return (
    <Card className="hover:-translate-y-1 transition">
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl grid place-items-center ${accent === "brand" ? "bg-brand text-brand-foreground" : "bg-cool text-white"}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-muted-foreground">{subtitle}</div>
        </div>
      </div>
      {children}
    </Card>
  );
}

/* ============ CONFIGURACION ============ */
export function Configuracion() {
  const steps = [
    { n: "01", t: "Crea cuenta", d: "Email o SSO. Verifica y entra." },
    { n: "02", t: "Define tus instrucciones", d: "Settings → System prompt personal." },
    { n: "03", t: "Conecta integraciones", d: "Drive, GitHub, Notion via MCP." },
    { n: "04", t: "Crea tu primer Project", d: "Sube context y arranca." },
  ];
  return (
    <Section id="configuracion" eyebrow="05 — Setup"
      title={<>Configura Claude <span className="font-display italic text-gradient-brand">en 5 minutos</span></>}
      lead="Una buena configuración inicial multiplica por 10 la calidad de las respuestas."
    >
      <div className="grid md:grid-cols-4 gap-3">
        {steps.map((s) => (
          <Card key={s.n} className="relative overflow-hidden">
            <div className="text-5xl font-semibold text-gradient-brand opacity-50 mb-2">{s.n}</div>
            <div className="font-semibold mb-1">{s.t}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{s.d}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ============ PROMPTS ============ */
export function Prompts() {
  const ctrl = [
    { l: "C", w: "Contexto", d: "Quién eres, para quién, qué situación.", c: "text-orange-300" },
    { l: "T", w: "Tarea", d: "Qué quieres exactamente. Verbo + objetivo.", c: "text-blue-300" },
    { l: "R", w: "Resultado", d: "Formato, longitud, estilo del output.", c: "text-emerald-300" },
    { l: "L", w: "Límites", d: "Qué evitar. Reglas. Tono. Restricciones.", c: "text-purple-300" },
  ];
  return (
    <Section id="prompts" eyebrow="06 — Prompt Engineering"
      title={<>El laboratorio de la <span className="font-display italic text-gradient-brand">comunicación con IA</span></>}
      lead="No se trata de magia. Se trata de claridad. La fórmula CTRL es tu plantilla mental para todo prompt."
    >
      {/* Editor mock */}
      <Card className="bg-black/40 border-white/10 p-0 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <span className="ml-3 text-xs font-mono text-muted-foreground">prompt.ctrl</span>
          <Pill tone="brand">en vivo</Pill>
        </div>
        <div className="p-6 font-mono text-sm space-y-3">
          <Line tag="C" tagColor="text-orange-300">Eres un copywriter senior B2B. Mi cliente es una SaaS de logística.</Line>
          <Line tag="T" tagColor="text-blue-300">Escribe 5 hooks para LinkedIn sobre IA aplicada a operaciones.</Line>
          <Line tag="R" tagColor="text-emerald-300">Formato: bullets. Cada hook ≤ 14 palabras. Tono directo.</Line>
          <Line tag="L" tagColor="text-purple-300">Evita clichés ("revoluciona", "disrupt"). Sin emojis.</Line>
        </div>
      </Card>

      <div className="mt-8 grid md:grid-cols-4 gap-3">
        {ctrl.map((x) => (
          <Card key={x.l} className="text-center hover:-translate-y-1 transition">
            <div className={`text-6xl font-display ${x.c} mb-2`}>{x.l}</div>
            <div className="font-semibold mb-1">{x.w}</div>
            <div className="text-xs text-muted-foreground leading-relaxed">{x.d}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Line({ tag, tagColor, children }: { tag: string; tagColor: string; children: any }) {
  return (
    <div className="flex gap-3">
      <span className={`${tagColor} font-bold w-4`}>{tag}</span>
      <span className="text-muted-foreground"><span className="text-foreground">{children}</span></span>
    </div>
  );
}

/* ============ ERRORES ============ */
export function Errores() {
  const items = [
    { bad: "Tratarlo como Google", good: "Tratarlo como un colega senior" },
    { bad: "Prompts de 1 línea", good: "Contexto + objetivo + formato" },
    { bad: "No revisar los outputs", good: "Iterar y validar siempre" },
    { bad: "Pedir todo de golpe", good: "Trabajar por pasos pequeños" },
    { bad: "No usar Projects", good: "Memoria + archivos + sistema" },
    { bad: "Copy-paste sin contexto", good: "Adapta al canal y audiencia" },
  ];
  return (
    <Section id="errores" eyebrow="07 — Errores comunes"
      title={<>Lo que <span className="font-display italic text-gradient-brand">nadie te cuenta</span></>}
      lead="Los 6 errores que cometen el 90% de los usuarios. Evítalos desde el día 1."
    >
      <div className="grid md:grid-cols-2 gap-3">
        {items.map((x, i) => (
          <Card key={i} className="flex items-stretch gap-4 p-0 overflow-hidden">
            <div className="flex-1 p-5 bg-red-500/[0.04] border-r border-white/5">
              <div className="flex items-center gap-2 text-xs text-red-300 mb-2">
                <X className="w-3.5 h-3.5" /> Mal
              </div>
              <div className="text-sm">{x.bad}</div>
            </div>
            <div className="flex-1 p-5 bg-emerald-500/[0.04]">
              <div className="flex items-center gap-2 text-xs text-emerald-300 mb-2">
                <Check className="w-3.5 h-3.5" /> Bien
              </div>
              <div className="text-sm">{x.good}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ============ MENTALIDAD ============ */
export function Mentalidad() {
  const ideas = [
    { icon: Brain, t: "Piensa en colaboración", d: "Claude es tu socio, no tu sirviente." },
    { icon: Compass, t: "Itera siempre", d: "El primer output rara vez es el final." },
    { icon: Target, t: "Define el éxito antes", d: "Si no sabes qué quieres, Claude tampoco." },
    { icon: Layers, t: "Construye sistemas", d: "Plantillas, projects, workflows reutilizables." },
  ];
  return (
    <Section id="mentalidad" eyebrow="08 — Mentalidad"
      title={<>La diferencia entre <span className="font-display italic text-gradient-brand">usar y dominar</span></>}
      lead="La técnica importa. Pero la mentalidad multiplica resultados."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {ideas.map((x) => (
          <Card key={x.t} className="flex gap-5 items-start hover:-translate-y-1 transition">
            <div className="w-12 h-12 rounded-2xl bg-brand/15 text-brand grid place-items-center shrink-0">
              <x.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-semibold mb-1">{x.t}</div>
              <div className="text-muted-foreground leading-relaxed">{x.d}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ============ ROADMAP ============ */
export function Roadmap() {
  const weeks = [
    { w: "Semana 1", t: "Bases y exploración", goals: ["Setup completo", "Primeros prompts CTRL", "10 conversaciones reales"], color: "from-orange-400/20" },
    { w: "Semana 2", t: "Projects y memoria", goals: ["Crear 3 Projects", "Subir contexto y archivos", "Workflows recurrentes"], color: "from-blue-400/20" },
    { w: "Semana 3", t: "Artefactos y código", goals: ["Generar tu primera app", "Documentos vivos", "Plantillas reutilizables"], color: "from-emerald-400/20" },
    { w: "Semana 4", t: "Automatización", goals: ["Cowork y agentes", "Integraciones MCP", "Sistema personal de IA"], color: "from-purple-400/20" },
  ];
  return (
    <Section id="roadmap" eyebrow="09 — Plan de 30 días"
      title={<>De cero a fluido en <span className="font-display italic text-gradient-brand">4 semanas</span></>}
      lead="Un roadmap pensado para que ganes confianza rápido y construyas un sistema de IA propio."
    >
      <div className="relative">
        {/* timeline line */}
        <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-white/10" />
        <div className="grid md:grid-cols-4 gap-4 relative">
          {weeks.map((w, i) => (
            <div key={w.w} className="relative">
              {/* dot */}
              <div className="hidden md:flex absolute -top-2 left-6 w-4 h-4 rounded-full bg-brand shadow-glow items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
              <Card className={`mt-8 hover:-translate-y-1 transition relative overflow-hidden bg-gradient-to-b ${w.color} to-transparent`}>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">{w.w}</div>
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
    </Section>
  );
}

/* ============ MARKETING WORKFLOW ============ */
export function MarketingFlow() {
  const flow = [
    { icon: Search, t: "Investigar", d: "Audiencia, dolores, mensajes" },
    { icon: Lightbulb, t: "Idear", d: "Ángulos, hooks, conceptos" },
    { icon: FileText, t: "Escribir", d: "Drafts en tono y formato" },
    { icon: Image, t: "Producir", d: "Visuales, posts, emails" },
    { icon: TrendingUp, t: "Optimizar", d: "Variantes, A/B, métricas" },
  ];
  return (
    <Section id="marketing" eyebrow="10 — Workflow real"
      title={<>Marketing con Claude, <span className="font-display italic text-gradient-brand">de la idea al post</span></>}
      lead="Un flujo probado para producir contenido y campañas con calidad humana y velocidad de máquina."
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 relative">
        {flow.map((s, i) => (
          <div key={s.t} className="relative">
            <Card className="text-center hover:-translate-y-1 transition">
              <div className="w-12 h-12 rounded-2xl bg-brand/15 text-brand grid place-items-center mx-auto mb-3">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-muted-foreground mb-1">PASO {i + 1}</div>
              <div className="font-semibold mb-1">{s.t}</div>
              <div className="text-xs text-muted-foreground">{s.d}</div>
            </Card>
            {i < flow.length - 1 && (
              <ArrowRight className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 text-brand/60 z-10" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============ CHEAT SHEET ============ */
export function CheatSheet() {
  const actions = [
    { i: FileText, t: "Resumir docs", c: "brand" },
    { i: Mail, t: "Redactar emails", c: "cool" },
    { i: Code2, t: "Programar apps", c: "brand" },
    { i: BarChart3, t: "Analizar datos", c: "cool" },
    { i: Megaphone, t: "Crear copy", c: "brand" },
    { i: Image, t: "Describir imágenes", c: "cool" },
    { i: Search, t: "Investigar temas", c: "brand" },
    { i: Lightbulb, t: "Brainstorming", c: "cool" },
    { i: Calendar, t: "Planificar agenda", c: "brand" },
    { i: GraduationCap, t: "Aprender skills", c: "cool" },
    { i: Building2, t: "Plan de negocio", c: "brand" },
    { i: Compass, t: "Tomar decisiones", c: "cool" },
    { i: Target, t: "OKRs y KPIs", c: "brand" },
    { i: Wand2, t: "Crear artefactos", c: "cool" },
    { i: FolderKanban, t: "Organizar projects", c: "brand" },
    { i: Cpu, t: "Automatizar tareas", c: "cool" },
    { i: Shield, t: "Revisar contratos", c: "brand" },
    { i: Coins, t: "Modelos financieros", c: "cool" },
    { i: Video, t: "Guiones de vídeo", c: "brand" },
    { i: MessageCircle, t: "Roleplay y prácticas", c: "cool" },
    { i: Layers, t: "Estructurar ideas", c: "brand" },
    { i: AlertTriangle, t: "Detectar riesgos", c: "cool" },
    { i: Rocket, t: "Lanzar productos", c: "brand" },
    { i: Clock, t: "Productividad diaria", c: "cool" },
    { i: Brain, t: "Pensar contigo", c: "brand" },
  ];
  return (
    <Section id="cheatsheet" eyebrow="11 — Cheat sheet"
      title={<>25 cosas que puedes hacer <span className="font-display italic text-gradient-brand">hoy</span></>}
      lead="Guarda esta cuadrícula. Es tu mapa rápido para no quedarte en blanco."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {actions.map((a, i) => (
          <div key={i}
            className="group glass rounded-2xl p-4 text-center hover:-translate-y-1 hover:bg-white/[0.07] transition-all duration-300 cursor-default">
            <div className={`w-11 h-11 rounded-xl grid place-items-center mx-auto mb-3 transition-transform group-hover:scale-110
              ${a.c === "brand" ? "bg-brand text-brand-foreground" : "bg-cool text-white"}`}>
              <a.i className="w-5 h-5" />
            </div>
            <div className="text-[11px] font-mono text-muted-foreground mb-1">{String(i + 1).padStart(2, "0")}</div>
            <div className="text-sm font-medium leading-tight">{a.t}</div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-20 text-center">
        <Card className="py-14 bg-gradient-to-br from-brand/10 to-transparent">
          <Sparkles className="w-6 h-6 text-brand mx-auto mb-4" />
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            Ahora por fin <span className="font-display italic text-gradient-brand">entiendes Claude</span>
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Vuelve a esta guía cuando necesites recordar lo esencial. Y empieza a construir.
          </p>
          <a href="#que-es"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground rounded-full px-6 py-3 text-sm font-semibold shadow-glow hover:scale-[1.02] transition">
            Volver al inicio <ArrowRight className="w-4 h-4" />
          </a>
        </Card>
        <div className="mt-10 text-xs text-muted-foreground">
          Guía Definitiva de Claude · Edición 2026 · Hecho con cuidado para alumnos curiosos.
        </div>
      </div>
    </Section>
  );
}
