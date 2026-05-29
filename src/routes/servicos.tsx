import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Safetech Engenharia" },
      { name: "description", content: "Laudos e inspeções NR-13, NR-12, NR-10, SPDA, PPCI, Plano de Rigging, projetos estruturais e sistemas de gás." },
      { property: "og:title", content: "Serviços — Safetech Engenharia" },
      { property: "og:description", content: "Conheça todos os serviços técnicos da Safetech Engenharia." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">Serviços</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Engenharia técnica completa</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Atendemos indústrias, comércios, condomínios e construtoras em todo o Rio de Janeiro com
            laudos, inspeções e projetos com ART.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.slug} className="rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:border-primary/40 hover:shadow-elegant">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary">{s.title} — {s.short}</h2>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 grid gap-2 text-sm">
                    {["Laudo técnico com ART", "Equipe habilitada", "Atendimento em todo RJ"].map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-safety" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
