import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { THEME_BOOT_SCRIPT } from "@/lib/lol/theme";
import { PWARegister } from "@/components/lol/PWARegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://topodorift.app"),
  title: {
    default: "Topo do Rift — Builds de Top Lane | League of Legends",
    template: "%s | Topo do Rift",
  },
  description:
    "Builds atualizadas de top laners do League of Legends: itens, runas, feitiços, ordem de habilidades, curva de poder, dicas de early/mid/late game, matchups, counters e Academia do Topo (macro 101). Feito para jogadores iniciantes e intermediários.",
  keywords: [
    "League of Legends",
    "LoL",
    "top lane",
    "builds",
    "runas",
    "counters",
    "top laners",
    "guia de campeões",
    "tier list",
    "wave management",
    "macro",
  ],
  applicationName: "Topo do Rift",
  authors: [{ name: "Topo do Rift" }],
  openGraph: {
    title: "Topo do Rift — Builds de Top Lane",
    description:
      "Builds, runas, feitiços, curva de poder e macro para dominar a rota superior no League of Legends.",
    type: "website",
    locale: "pt_BR",
    siteName: "Topo do Rift",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topo do Rift — Builds de Top Lane",
    description:
      "Builds, runas e macro para dominar a rota superior no LoL.",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Topo do Rift",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1428",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        {/* Aplica o tema salvo ANTES da hidratação para evitar flash de tema errado */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {children}
        <PWARegister />
        <Toaster />
      </body>
    </html>
  );
}
