import "./globals.css";
import { Merriweather, Cormorant, Istok_Web } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700"], // example weights
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "700"],
});

const istokWeb = Istok_Web({
  subsets: ["latin"],
  variable: "--font-istok-web",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Katie Kimura's Personal Website",
  description: "My personal website showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${merriweather.variable} ${cormorant.variable} ${istokWeb.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
