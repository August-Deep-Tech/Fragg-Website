import type {Metadata} from "next";
import "../globals.css";
import Footer from "@/components/Footer";
import {Header} from "@/components/Header";

// export const metadata: Metadata = {
//   title: "Fragg GmBH",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
