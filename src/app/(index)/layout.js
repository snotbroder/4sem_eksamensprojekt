import Footer from "@/components/layout/Footer";
import Navigationsmenu from "@/components/layout/Navigationsmenu";
import "@/styles/globals.css";

export const metadata = {
  title: "LAMAR",
  description: "Great food, great vibes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* lå i body className: ${geistSans.variable} ${geistMono.variable} */}

      <body className={`antialiased  `}>
        <Navigationsmenu></Navigationsmenu>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
