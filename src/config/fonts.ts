import localFont from "next/font/local";
import { DynaPuff } from "next/font/google";

const main = localFont({ src: "./../assets/fonts/Satoshi-Variable.woff2", variable: "--font-main" });
const header = localFont({ src: "./../assets/fonts/CabinetGrotesk-Variable.woff2", variable: "--font-header" });
const logo = DynaPuff({ subsets: ["latin"], variable: "--font-logo" });
const hero = localFont({ src: "./../assets/fonts/Supreme-ExtraBold.woff2", variable: "--font-hero", display: "swap"});

export const fonts = {
  main,
  header,
  logo,
  hero,
  variables: [main.variable, header.variable, logo.variable, hero.variable].join(" "),
  body: `${main.className} antialiased`,
};
