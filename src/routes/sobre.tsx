import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Safetech Engenharia" },
      { name: "description", content: "Conheça a Safetech Engenharia, especialista em laudos e inspeções técnicas no Rio de Janeiro." },
      { property: "og:title", content: "Sobre a Safetech Engenharia" },
      { property: "og:description", content: "Equipe técnica especializada em segurança e conformidade industrial." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Missão", desc: "Garantir segurança, conformidade e continuidade operacional aos nossos clientes através de engenharia técnica de excelência." },
  { icon: Eye, title: "Visão", desc: "Ser referência em laudos, inspeções e projetos técnicos no estado do Rio de Janeiro." },
  { icon: Heart, title: "Valores", desc: "Responsabilidade técnica, ética profissional, agilidade e compromisso com a segurança das pessoas." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">Sobre nós</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Engenharia técnica feita por especialistas</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            A Safetech Engenharia atua oferecendo soluções completas em laudos, inspeções e projetos
            para indústrias, construtoras e edificações no Rio de Janeiro.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                <v.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-primary">{v.title}</h2>
              <p className="mt-2 text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Compromisso com segurança e conformidade</h2>
          <p className="mt-4 text-muted-foreground">
            Combinamos conhecimento técnico, normas regulamentadoras atualizadas e ferramentas de inspeção
            modernas para entregar laudos confiáveis e juridicamente válidos. Cada projeto recebe ART e
            acompanhamento do responsável técnico.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
