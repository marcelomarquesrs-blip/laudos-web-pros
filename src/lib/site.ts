export const SITE = {
  name: "Safetech Engenharia",
  phone: "(21) 96679-2641",
  phoneRaw: "5521966792641",
  email: "contato@safetecheng.com.br",
  cnpj: "66.174.166/0001-32",
  location: "Rio de Janeiro · RJ",
  hours: "Seg. a sex., 8h às 18h",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento com a Safetech Engenharia."
)}`;

export const MAILTO_URL = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Solicitação de orçamento"
)}`;
