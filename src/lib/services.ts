import { Flame, ShieldCheck, Cog, Zap, CloudLightning, Wind, Building2, Anchor } from "lucide-react";

export const SERVICES = [
  {
    slug: "nr13",
    icon: Cog,
    title: "NR-13",
    short: "Caldeiras, Vasos de Pressão e Tubulações",
    desc: "Inspeção de segurança, prontuário e laudos técnicos para equipamentos sob pressão conforme NR-13.",
  },
  {
    slug: "nr12",
    icon: ShieldCheck,
    title: "NR-12",
    short: "Segurança em Máquinas e Equipamentos",
    desc: "Análise de conformidade, apreciação de riscos e adequação de máquinas e equipamentos industriais.",
  },
  {
    slug: "nr10",
    icon: Zap,
    title: "NR-10",
    short: "Segurança em Instalações Elétricas",
    desc: "Laudos, prontuário das instalações elétricas (PIE) e adequação às normas de segurança em eletricidade.",
  },
  {
    slug: "spda",
    icon: CloudLightning,
    title: "SPDA",
    short: "Proteção contra Descargas Atmosféricas",
    desc: "Projetos, laudos e inspeções de Sistemas de Proteção contra Descargas Atmosféricas — NBR 5419.",
  },
  {
    slug: "ppci",
    icon: Flame,
    title: "PPCI",
    short: "Plano de Prevenção e Combate a Incêndio",
    desc: "Elaboração, regularização e acompanhamento de projetos PPCI junto ao Corpo de Bombeiros.",
  },
  {
    slug: "rigging",
    icon: Anchor,
    title: "Plano de Rigging",
    short: "Movimentação de Cargas Críticas",
    desc: "Planos técnicos de içamento, ART e análise estrutural para operações com guindastes e cargas.",
  },
  {
    slug: "estrutural",
    icon: Building2,
    title: "Projetos Estruturais",
    short: "Cálculo e Memorial Técnico",
    desc: "Projetos estruturais em concreto e metálica, laudos de estabilidade e reforços estruturais.",
  },
  {
    slug: "gas",
    icon: Wind,
    title: "Sistemas de Gás",
    short: "Inspeção e Conformidade",
    desc: "Inspeção de sistemas de gás combustível, laudos e adequação às normas técnicas vigentes.",
  },
] as const;
