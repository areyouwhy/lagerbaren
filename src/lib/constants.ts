export const BRAND = {
  lagerbaren: {
    name: "Lagerbaren",
    tagline: "Sportbar & Restaurang",
    color: "#d4a843",
    phone: "08-643 18 08",
  },
  masalaArt: {
    name: "Masala Art",
    tagline: "Indisk & Bengalisk mat",
    color: "#76e9c7",
    phone: "08-36 88 48",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Hem", href: "/" },
  { label: "Lagerbaren", href: "/lagerbaren" },
  { label: "Masala Art", href: "/masala-art" },
  { label: "Lunch", href: "/lunch" },
  { label: "Dryck", href: "/dryck" },
  { label: "Festväningen", href: "/festvaning" },
  { label: "Boka bord", href: "/boka" },
  { label: "Hitta oss", href: "/hitta-oss" },
] as const;
