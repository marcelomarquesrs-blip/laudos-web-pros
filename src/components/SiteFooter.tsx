import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo-safetech.png";
import { SITE, WHATSAPP_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Safetech" className="h-14 w-14 rounded bg-white p-1" />
            <div>
              <div className="text-lg font-bold">SAFETECH</div>
              <div className="text-xs tracking-[0.25em] text-primary-foreground/70">ENGENHARIA</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            Laudos técnicos, inspeções regulamentares e projetos de engenharia com segurança,
            conformidade e responsabilidade técnica.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Navegue</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/" className="hover:text-white">Início</Link></li>
            <li><Link to="/servicos" className="hover:text-white">Serviços</Link></li>
            <li><Link to="/sobre" className="hover:text-white">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Contato</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white break-all">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{SITE.location}</li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0" />{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Safetech Engenharia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
