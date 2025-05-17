"use client";
import { useEffect } from "react";
import Dashboard_card from "../../components/dashboard/Dashboard_card";
import Dashboard_pageName from "../../components/dashboard/Dashboard_pageName";
import { SignIn, useUser } from "@clerk/nextjs";

import { storeSelectedNavigation } from "@/stores/storeSelectedNavigation";
import RoutingButton from "@/components/ui/buttons/RoutingButton";
import Button from "@/components/ui/buttons/Button";

export default function dashboard() {
  const { user } = useUser();
  const setSelected = storeSelectedNavigation((state) => state.setStoreSelectedNavigation); // always called

  useEffect(() => {
    setSelected("home");
  }, [setSelected]); // safe because this hook always runs now

  if (!user) return <SignIn />;

  return (
    <>
      <Dashboard_pageName text="home" />
      <section className="flex flex-col md:flex-row gap-s slideIn">
        <Dashboard_card href="dashboard/menus" btntxt="edit menus" head="Menus" icon="restaurant" copy="Add a menu to the website, or configure an existing one. Change images or delete a menu." />
        <Dashboard_card href="dashboard/bookings" btntxt="see bookings" head="bookings" icon="event" copy="See large groups planned to use the venue. Send emails or cancel the booking" />
        <Dashboard_card href="dashboard/newsletter" btntxt="send a newsletter" head="newsletter" icon="mail" copy="Send newsletters to subscribers. Notify about a new event or an updated season menu." />
      </section>
    </>
  );
}
