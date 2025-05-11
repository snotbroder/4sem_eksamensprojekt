"use client";
import { storeSelectedNavigation } from "@/stores/storeSelectedNavigation";
import Dashboard_navchild from "./Dashboard-navchild";

function Dashboard_navigation() {
  const selectedNavigation = storeSelectedNavigation((state) => state.selectedNavigation);
  return (
    <nav className="opacity-70 hover:opacity-100 bg-white hidden md:block group h-screen border-r-2 border-darkbrown w-[85px] hover:w-[290px] transition-all duration-200 ease-in-out absolute ">
      <ul className="flex flex-col gap-xs py-xl items-start px-[11px] overflow-clip">
        <Dashboard_navchild selected={selectedNavigation} head="home" icon="home" destination="/dashboard" />
        <Dashboard_navchild selected={selectedNavigation} head="menus" icon="restaurant" destination="/dashboard/menus" />
        <Dashboard_navchild selected={selectedNavigation} head="bookings" icon="event" destination="/dashboard/bookings" />
        <Dashboard_navchild selected={selectedNavigation} head="newsletter" icon="mail" destination="/dashboard/newsletter" />
      </ul>
    </nav>
  );
}

export default Dashboard_navigation;
