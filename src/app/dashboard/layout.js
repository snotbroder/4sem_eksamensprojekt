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
    <html lang="en">
      <body>
        <ClerkProvider>
          <Dashboard_header />
          <SignedOut>
            <h1>U r logged out</h1>
            <p>please sign in :)</p>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <div className="bg-white flex min-h-screen">
              <Dashboard_navigation />
              <main className="flex-grow overflow-auto m-sm md:ml-8xl mt-3xl md:mt-8xl min-h-screen">{children}</main>
            </div>
          </SignedIn>
        </ClerkProvider>
        <Footer />
      </body>
    </html>
  );
}
