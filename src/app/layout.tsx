import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { THEME_BOOT_SCRIPT } from "@/lib/lol/theme";

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
  title: "Topo do Rift — Builds de Top Lane | League of Legends",
  description:
    "Builds atualizadas de top laners do League of Legends: itens, runas, feitiços, ordem de habilidades, dicas de early/mid/late game, matchups e counters. Feito para jogadores iniciantes e intermediários.",
  keywords: [
    "League of Legends",
    "LoL",
    "top lane",
    "builds",
    "runas",
    "counters",
    "top laners",
    "guia de campeões",
  ],
  openGraph: {
    title: "Topo do Rift — Builds de Top Lane",
    description:
      "Builds, runas, feitiços e dicas para dominar a rota superior no League of Legends.",
    type: "website",
    locale: "pt_BR",
  },
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
        <Toaster />
      </body>
    </html>
  );
}
