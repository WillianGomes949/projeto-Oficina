import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    <html lang="pt-br">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
      <Script src="./scrollreveal.min.js"></Script>
    </html>
  );
}
