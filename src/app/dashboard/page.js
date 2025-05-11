"use client";
import Dashboard_card from "../dashboard_components/Dashboard_card";
import Dashboard_pageName from "../dashboard_components/Dashboard_pageName";
import { SignIn, useUser } from "@clerk/nextjs";
export default function dashboard() {
  const { user } = useUser();

  if (!user) return <SignIn />;

  return (
    <>
      <Dashboard_pageName text="home" />
      <section className="flex flex-col md:flex-row gap-s">
        <Dashboard_card head="Menus" icon="restaurant" copy="Add a menu to the website, or configure an existing one. Change images or delete a menu." />
        <Dashboard_card head="bookings" icon="event" copy="See large groups planned to use the venue. Send emails or cancel the booking" />
      </section>
    </>
  );
}
