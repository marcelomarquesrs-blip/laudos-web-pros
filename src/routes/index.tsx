import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Award, Clock3, Users } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services";
import { WHATSAPP_URL } from "@/lib/site";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safetech Engenharia — Laudos e Inspeções Técnicas no RJ" },
      { name: "description", content: "Engenharia especializada em NR-13, NR-12, NR-10, SPDA, PPCI, Plano de Rigging, projetos estruturais e sistemas de gás. Atendimento em todo o Rio de Janeiro." },
      { property: "og:title", content: "Safetech Engenharia — Laudos e Inspeções Técnicas" },
      { property: "og:description", content: "Engenharia de segurança, conformidade e responsabilidade técnica no RJ." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImg}
          alt="Engenheiro realizando inspeção industrial"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Engenharia · Segurança · Conformidade
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] md:text-6xl">
              Laudos e inspeções <span className="text-white/80">técnicas</span> para a sua operação industrial.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
              Atuamos em todo o Rio de Janeiro com NR-13, NR-12, NR-10, SPDA, PPCI,
              Plano de Rigging, projetos estruturais e sistemas de gás — com responsabilidade técnica e prazo.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-safety text-safety-foreground hover:bg-safety/90">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Solicitar orçamento
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/servicos">Nossos serviços <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-6">
              <Stat icon={Award} label="Anos de experiência" value="15+" />
              <Stat icon={Users} label="Clientes atendidos" value="200+" />
              <Stat icon={Clock3} label="Resposta" value="24h" />
            </dl>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-safety">Nossos serviços</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Soluções completas em engenharia de segurança</h2>
              <p className="mt-3 text-muted-foreground">
                Equipe técnica habilitada e ART emitida em todos os serviços. Atuação rápida em todo o estado do RJ.
              </p>
            </div>
            <Button asChild variant="outline"><Link to="/servicos">Ver todos <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/80">{s.short}</p>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-border bg-muted/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-safety">Por que a Safetech</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Engenharia técnica com responsabilidade e agilidade.</h2>
            <p className="mt-4 text-muted-foreground">
              Atuamos lado a lado com a sua operação para garantir conformidade legal, segurança
              dos colaboradores e continuidade dos seus processos produtivos.
            </p>
            <div className="mt-8 flex gap-3">
              <Button asChild><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar com especialista</a></Button>
              <Button asChild variant="outline"><Link to="/sobre">Sobre a empresa</Link></Button>
            </div>
          </div>
          <ul className="grid gap-4">
            {[
              "Engenheiros habilitados com CREA ativo e ART em todos os serviços",
              "Laudos técnicos detalhados e em conformidade com as normas vigentes",
              "Atendimento em todo o estado do Rio de Janeiro",
              "Acompanhamento técnico durante adequações e regularizações",
              "Equipe pronta para atendimentos emergenciais",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-lg border border-border bg-background p-5 shadow-card">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety" />
                <span className="text-sm font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Award; label: string; value: string }) {
  return (
    <div>
      <Icon className="h-5 w-5 text-white/70" />
      <dd className="mt-2 text-2xl font-bold">{value}</dd>
      <dt className="text-xs text-primary-foreground/70">{label}</dt>
    </div>
  );
}
