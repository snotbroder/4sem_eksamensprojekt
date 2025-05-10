// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "LAMAR",
  description: "Great food, great vibes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* lå i body className: ${geistSans.variable} ${geistMono.variable} */}
      <Navigationsmenu></Navigationsmenu>
      <body className={` antialiased`}>{children}</body>
      <Footer></Footer>
    </html>
  );
}
