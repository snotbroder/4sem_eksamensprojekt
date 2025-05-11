import Dashboard_header from "../dashboard_components/Dashboard_header";
import Dashboard_navigation from "../dashboard_components/Dashboard_navigation";
import "../globals.css";
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const metadata = {
  title: "Dashboard",
  description: "Great food, great vibes",
};

export default function DashboardLayout({ children }) {
  return (
    <ClerkProvider className="h-screen">
      <Dashboard_header />

      <SignedOut>
        <h1>HEJSA</h1>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <div className="bg-white flex">
          <Dashboard_navigation />
          <main className="flex-grow overflow-auto m-sm md:ml-9xl">{children}</main>
        </div>
      </SignedIn>
    </ClerkProvider>
  );
}
