"use client";
import { useEffect } from "react";

import { storeSelectedNavigation } from "@/stores/storeSelectedNavigation";
import Dashboard_pageName from "@/components/dashboard/Dashboard_pageName";
import Dashboard_bookingDBVisualiser from "@/components/dashboard/Dashboard_bookingDBVisualiser";

export default function menusPage() {
  const setSelected = storeSelectedNavigation((state) => state.setStoreSelectedNavigation); // always called

  useEffect(() => {
    setSelected("bookings");
  }, [setSelected]); // safe because this hook always runs now

  return (
    <>
      <Dashboard_pageName text="bookings" />
      <p className="max-w-[400px]">Manage current bookings. Contact the booker through clicking on a booking. Cancel/delete or edit an existing booking.</p>
      <section className="bg-gray-100 rounded-sm shadow-md p-sm">
        <Dashboard_bookingDBVisualiser></Dashboard_bookingDBVisualiser>
      </section>
    </>
  );
}
