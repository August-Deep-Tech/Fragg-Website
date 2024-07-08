import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/fragg-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fragg-favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
