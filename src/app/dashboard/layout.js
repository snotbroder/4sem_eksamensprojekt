import Dashboard_header from "@/components/dashboard/Dashboard_header";
import Dashboard_navigation from "@/components/dashboard/Dashboard_navigation";
import "@/styles/globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Lamar Dashboard",
  description: "Great food, great vibes",
};

export default function DashboardLayout({ children }) {
  return (
    // Clerk komponent der kræver alt indhold fra root er nested
    <ClerkProvider>
      <html lang="en">
        <body>
          <Dashboard_header />
          {/* Denne del bliver faktisk aldrig vist, da jeg har sat redirect/reroute hvis man er signed out */}
          <SignedOut>
            <h1>U r logged out</h1>
            <p>please sign in :)</p>
            <SignInButton />
          </SignedOut>
          {/* Dette virker ligesom conditional rendering; når du er logget ind, viser den indholdet */}
          <SignedIn>
            <div className="bg-white flex min-h-screen">
              <Dashboard_navigation />
              <main className="flex-grow overflow-auto m-sm md:ml-8xl mt-3xl md:mt-8xl min-h-screen">{children}</main>
            </div>
          </SignedIn>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
