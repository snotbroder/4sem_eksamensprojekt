import Dashboard_navchild from "./Dashboard-navchild";

function Dashboard_navigation() {
  return (
    <nav className="hidden md:block group h-screen border-r-2 border-darkbrown w-[100px] hover:w-[290px] transition-all duration-200 ease-in-out ">
      <ul className="flex flex-col gap-xs py-xl items-start pl-2">
        <Dashboard_navchild head="Home" icon="home" destination="/dashboard" />
        <Dashboard_navchild head="menus" icon="restaurant" destination="/dashboard/menus" />
        <Dashboard_navchild head="bookings" icon="event" destination="/dashboard/bookings" />
        <Dashboard_navchild head="newsletter" icon="mail" destination="/dashboard/newsletter" />
      </ul>
    </nav>
  );
}

export default Dashboard_navigation;
