import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { LocalizationProvider } from "@/components/layout/LocalizationProvider";

export const metadata: Metadata = {
  title: {
    default: "B Connect",
    template: "%s | B Connect"
  },
  description: "B Connect platform overview and deployment-ready static documentation site."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="my">
      <body className="min-h-screen bg-white text-neutral-900">
        <LocalizationProvider>
          <Header />
          <Container className="py-10">{children}</Container>
          <Footer />
        </LocalizationProvider>
      </body>
    </html>
  );
}
