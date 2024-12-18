import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";


import { Questrial } from 'next/font/google';
import { Tinos } from 'next/font/google';
import Lenis from "./comp/Lenis";

const questrial = Questrial({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-questrial"
});

const tinos = Tinos({
  subsets: ['latin'],
  weight: "400",
});

export const metadata = {
  title: "Raihan Arif | Portofolio",
  description: "This is Raihan Arif personal portofolio",
};

export default function RootLayout({ children }) {
  return (
<html lang="en">
      <body className={`${questrial.className}`}>
        <Menu />
        <Lenis >
          {children}
        </Lenis>
      </body>
    </html>
  );
}
