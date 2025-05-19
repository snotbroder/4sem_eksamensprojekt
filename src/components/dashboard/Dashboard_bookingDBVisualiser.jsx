"use client";
import { ToastContainer, toast } from "react-toastify";
import { getAllItems } from "@/app/api";
import Dashboard_bookingCard from "@/components/dashboard/Dashboard_bookingCard.jsx";
import AddBooking from "@/components/utility/AddBooking";
import { useState, useEffect } from "react";

function bookingVisualiser() {
  // const bookings = { item1: "1", item2: "2", item3: "3" };
  const [bookings, setBookings] = useState([]);
  function clickHandler(e) {
    toast.success("Hello");
    console.log(e);
  }

  useEffect(() => {
    //Kør funktion når kompomenten lades

    //Fetch bookings fra DB
    async function fetchBookings() {
      const fetchedBooking = await getAllItems("bookings-database");
      setBookings(fetchedBooking);
    }
    fetchBookings();
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} pauseOnHover />
      <AddBooking></AddBooking>
      <ul className="flex flex-col divide-y divide-gray-300">
        {/* Looper hen over den fetchede data */}
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <li className="flex flex-col gap-xxs" key={index}>
              <Dashboard_bookingCard data={booking} />
            </li>
          ))
        ) : (
          <p className="animate-pulse">Loading bookings...</p>
        )}
      </ul>
    </>
  );
}
export default bookingVisualiser;
