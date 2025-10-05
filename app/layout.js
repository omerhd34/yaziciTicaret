import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactFloatingButton from "@/components/ContactFloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yazıcı Ticaret",
  description: "Güvenilir ve hızlı iletişim hizmetleri",
  icons: "/logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta name="theme-color" content="#1e40af" />
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
