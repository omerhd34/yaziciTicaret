import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactFloatingButton from "@/components/ContactFloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yazıcı Ticaret - PROFiLO Dayanıklı Ev Aletleri",
  description: "PROFiLO dayanıklı ev aletleri - Güvenilir ve kaliteli ürünler",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta name="theme-color" content="#004B87" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ContactFloatingButton />
      </body>
    </html>
  );
}
