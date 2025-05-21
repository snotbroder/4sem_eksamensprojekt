"use client";
import { useEffect, useState } from "react";

import { storeSelectedNavigation } from "@/stores/storeSelectedNavigation";
import Dashboard_pageName from "@/components/dashboard/Dashboard_pageName";
import Dashboard_bookingDBVisualiser from "@/components/dashboard/Dashboard_bookingDBVisualiser";
import Button from "@/components/ui/buttons/Button";
import IconComponent from "@/components/ui/IconComponent";
import AddBooking from "@/components/utility/AddBooking";

export default function menusPage() {
  const setSelected = storeSelectedNavigation((state) => state.setStoreSelectedNavigation); // always called

  useEffect(() => {
    setSelected("bookings");
  }, [setSelected]); // safe because this hook always runs now

  const [openAddBooking, setOpenAddBooking] = useState(false);

  function handleOpenAddBooking() {
    setOpenAddBooking((prevState) => !prevState);
  }

  return (
    <>
      <Dashboard_pageName text="bookings" />
      <section className="flex justify-between my-s">
        {openAddBooking ? <p className="max-w-[400px] ">Create a Please take note of the required fields for creating a new booking.</p> : <p className="max-w-[400px]">Manage current bookings. Contact the booker through clicking on a booking. Cancel/delete or edit an existing booking.</p>}

        <Button variant="primary" onClick={handleOpenAddBooking}>
          {openAddBooking ? <IconComponent icon="arrowback" /> : <IconComponent icon="add" />}
          {openAddBooking ? "Back" : "Add new booking"}
        </Button>
      </section>
      <section className="bg-gray-100 rounded-sm shadow-md p-sm">
        {openAddBooking ? (
          <div className="slideIn">
            <AddBooking />
          </div>
        ) : (
          <Dashboard_bookingDBVisualiser />
        )}
      </section>
    </>
  );
}
