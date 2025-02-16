import "./globals.css";
import Menu from "../components/Menu";
import Lenis from "./comp/Lenis";
import localFont from "next/font/local";

const Ogg = localFont({
  src: "../public/fonts/Ogg-Regular.ttf",
});

export const metadata = {
  title: "Raihan Arif | Portofolio",
  description: "This is Raihan Arif personal portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Ogg.className}`}>
        <Menu />
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
