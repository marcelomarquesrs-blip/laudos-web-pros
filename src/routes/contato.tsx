import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, MessageCircle, Building2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE, WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Safetech Engenharia" },
      { name: "description", content: "Solicite orçamento ou fale com nossos especialistas. Atendimento em Rio de Janeiro." },
      { property: "og:title", content: "Contato — Safetech Engenharia" },
      { property: "og:description", content: "Fale com nossos especialistas e solicite seu orçamento." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${form.name}.%0A%0AServiço: ${form.service}%0AE-mail: ${form.email}%0ATelefone: ${form.phone}%0A%0A${form.message}`;
    window.open(`https://wa.me/${SITE.phoneRaw}?text=${text}`, "_blank");
  };

  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">Contato</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Fale com nossos especialistas</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Solicite seu orçamento ou tire dúvidas técnicas. Respondemos em até 1 dia útil.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={Phone} title="Telefone / WhatsApp" value={SITE.phone} href={WHATSAPP_URL} />
            <InfoCard icon={Mail} title="E-mail" value={SITE.email} href={`mailto:${SITE.email}`} />
            <InfoCard icon={Building2} title="CNPJ" value={SITE.cnpj} />
            <InfoCard icon={MapPin} title="Localização" value={SITE.location} />
            <InfoCard icon={Clock} title="Horário de atendimento" value={SITE.hours} />

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-4 font-semibold text-white shadow-card transition hover:opacity-95"
            >
              <MessageCircle className="h-5 w-5" /> Conversar no WhatsApp
            </a>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 shadow-card">
            <h2 className="text-2xl font-bold text-primary">Solicite seu orçamento</h2>
            <p className="mt-1 text-sm text-muted-foreground">Preencha e enviaremos sua solicitação direto para o WhatsApp da nossa equipe.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Nome completo" required>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </Field>
              <Field label="Telefone" required>
                <Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </Field>
              <Field label="E-mail" required>
                <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </Field>
              <Field label="Serviço de interesse">
                <Input placeholder="NR-13, PPCI, SPDA…" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Mensagem">
                  <Textarea rows={5} placeholder="Conte-nos sobre sua necessidade…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </Field>
              </div>
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
              Enviar solicitação
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-sm">
        {label} {required && <span className="text-safety">*</span>}
      </Label>
      {children}
    </div>
  );
}

function InfoCard({ icon: Icon, title, value, href }: { icon: typeof Phone; title: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition hover:border-primary/40">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-0.5 font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a> : content;
}
