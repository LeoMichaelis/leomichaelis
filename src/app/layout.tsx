import { fonts } from "@/config/fonts";
import { metadata } from "@/config/metadata";
import "./globals.css";

export { metadata };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr" className={fonts.variables} >
      <body className={fonts.body}>
        {children}
      </body>
    </html>
  );
}