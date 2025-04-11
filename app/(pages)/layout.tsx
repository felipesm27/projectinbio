import "./globals.css";
import { Roboto } from "next/font/google";

const robotoDisplay = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased ${robotoDisplay.className} bg-background-primary text-content-body`}
      >
        {children}
      </body>
    </html>
  );
}
