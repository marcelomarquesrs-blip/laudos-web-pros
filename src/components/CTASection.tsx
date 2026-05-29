import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

export function CTASection() {
  return (
    <section className="bg-gradient-hero py-20 text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase">
          Fale com um especialista
        </div>
        <h2 className="mt-6 text-3xl font-bold md:text-5xl">
          Precisa de um laudo ou projeto técnico?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          Receba uma proposta personalizada para a sua operação. Nossa equipe de engenheiros
          responde em até 1 dia útil.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar orçamento
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <Link to="/contato">
              Falar com especialista <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
