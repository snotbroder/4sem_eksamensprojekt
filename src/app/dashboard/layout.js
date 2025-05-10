import Dashboard_header from "../dashboard_components/Dashboard_header";
import Dashboard_navigation from "../dashboard_components/Dashboard_navigation";
import "../globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Great food, great vibes",
};

export default function RootLayout({ children }) {
  return (
    <section className="bg-white h-screen">
      <Dashboard_header />
      <div className="flex">
        <Dashboard_navigation />
        <main className="flex-grow overflow-auto m-sm">{children}</main>
      </div>
    </section>
  );
}
