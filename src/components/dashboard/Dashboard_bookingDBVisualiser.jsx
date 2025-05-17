"use client";
import { ToastContainer, toast } from "react-toastify";

import Dashboard_bookingCard from "@/components/dashboard/Dashboard_bookingCard.jsx";

function bookingVisualiser() {
  const bookings = { item1: "1", item2: "2", item3: "3" };

  function clickHandler(e) {
    toast.success("Hello");
    console.log(e);
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} pauseOnHover />
      <ul className="flex flex-col">
        {/* Looper hen over den fetchede data */}
        {/* {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <li className="flex flex-col gap-xxs" key={index}>
              <h1>booking {booking[0]}</h1>
            </li>
          ))
        ) : (
          <p className="animate-pulse">Loading menu...</p>
        )} */}
        <Dashboard_bookingCard head="Booking" copy="Lorem ipsum dolor sit amet." icon="mail" />
      </ul>
    </>
  );
}
export default bookingVisualiser;
