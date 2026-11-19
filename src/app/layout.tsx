import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

const roboto = localFont({
  src: "./fonts/roboto-latin.woff2",
  weight: "400 600",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odysseum - modèles B2C",
  description: "Modèles de pages d'authentification Odysseum",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className={roboto.className} style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
