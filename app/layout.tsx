import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@components/navbar"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weezac",
  description: "From responsive design to seamless functionality, we ensure your website stands out in today's competitive digital landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth overflow-y-scroll">
      <body className={inter.className}>
        <Analytics/>
        <div className="flex canvas bg-darkerBlue">
            <div className="circles z-0"/>
            <div className="circles z-0"/>
            <div className="circles z-0"/>
          <section className="mx-auto w-[1340px] max-2xl:w-full z-10">
            <div className="z-10 w-full">
              <NavBar/>
              {children}
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
