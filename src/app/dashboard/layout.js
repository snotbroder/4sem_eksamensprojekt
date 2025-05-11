import Dashboard_header from "../dashboard_components/Dashboard_header";
import Dashboard_navigation from "../dashboard_components/Dashboard_navigation";
import "../globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Footer from "../navigation_components/Footer";

export const metadata = {
  title: "Lamar Dashboard",
  description: "Great food, great vibes",
};

export default function DashboardLayout({ children }) {
  return (
    <>
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
            <main className="flex-grow overflow-auto m-sm ml-8xl mt-8xl min-h-screen">{children}</main>
          </div>
        </SignedIn>
      </ClerkProvider>
      <Footer />
    </>
  );
}
