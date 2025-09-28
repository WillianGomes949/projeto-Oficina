import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Site Oficina",
  description: "Uma oficina para gerar confiança",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
