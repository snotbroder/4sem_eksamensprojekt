"use client";
import { useEffect } from "react";
import Dashboard_card from "../../components/dashboard/Dashboard_card";
import Dashboard_pageName from "../../components/dashboard/Dashboard_pageName";
import { SignIn, useUser } from "@clerk/nextjs";

import { storeSelectedNavigation } from "@/stores/storeSelectedNavigation";

export default function dashboard() {
  // Noget clerk kræver, henter userdata for current session
  const { user } = useUser();

  // Ændr globalt state pageName
  const setSelected = storeSelectedNavigation((state) => state.setStoreSelectedNavigation);
  useEffect(() => {
    setSelected("home");
  }, []);

  // Hvis der ikke er en bruger knyttet til sessionen, så redirect til accounts.voorde.dk/sign-in
  if (!user) return <SignIn />;
  return (
    <>
      <Dashboard_pageName text="home" />
      <section className="flex items-center flex-col md:flex-row md:flex-wrap gap-s slideIn">
        <Dashboard_card href="dashboard/menus" btntxt="edit menus" head="Menus" icon="restaurant" copy="Add a menu to the website, or configure an existing one. Change images or delete a menu." />
        <Dashboard_card href="dashboard/bookings" btntxt="see bookings" head="bookings" icon="event" copy="See large groups planned to use the venue. Send emails or cancel the booking" />
        <Dashboard_card href="dashboard/newsletter" btntxt="send a newsletter" head="newsletter" icon="mail" copy="Send newsletters to subscribers. Notify about a new event or an updated season menu." />
      </section>
    </>
  );
}
