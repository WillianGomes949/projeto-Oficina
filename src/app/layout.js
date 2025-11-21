import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StartButton from "@/components/ui/startButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  weight: ["400", "500", "600", "700"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Ar-veicular",
  description: "Uma oficina para gerar confiança",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Header/>
        {children}
        <StartButton/>
        <Footer/>
      </body>
    </html>
  );
}
