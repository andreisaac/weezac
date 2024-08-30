import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@components/navbar"
import { Analytics } from "@vercel/analytics/react"
import Weelytical from "weelytical-react"


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
      <body>
        <Analytics/>
        <Weelytical/>
        <div className="flex canvas bg-n900">
            <div className="circles z-0"/>
            <div className="circles z-0"/>
            <div className="circles z-0"/>
          <section className="mx-auto w-[1400px] max-2xl:w-full z-10">
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
