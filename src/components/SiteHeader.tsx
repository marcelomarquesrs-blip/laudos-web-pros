import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-safetech.png";
import { SITE, WHATSAPP_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Safetech Engenharia" className="h-[4.8rem] w-[4.8rem] object-contain" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-bold text-primary">SAFETECH</span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-steel">ENGENHARIA</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
              activeProps={{ className: "text-primary bg-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:+${SITE.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Button asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Orçamento</a>
          </Button>
        </div>

        <button
          className="md:hidden rounded-md p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium hover:bg-accent"
                activeProps={{ className: "text-primary bg-accent" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Solicitar orçamento</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
