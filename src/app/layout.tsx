import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./(components)/NavBar";
import Footer from "./(components)/Footer";
import { Frank_Ruhl_Libre, Quicksand } from "next/font/google";

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["hebrew"],
  display: "swap",
  variable: "--font-frank-ruhl-libre",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "AJSI Creative",
  description:
    "AJSI Creative is a creative agency providing graphic design, web development, photography, and branding services to entrepreneurs and small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${frankRuhlLibre.variable} ${quicksand.variable}`}
    >
      <body className={`subpixel-antialiased`}>
        <header>
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
