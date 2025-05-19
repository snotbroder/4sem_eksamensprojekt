import { useState } from "react";
import IconComponent from "../ui/IconComponent";
import Dashboard_tag from "./Dashboard_tag";

function BookingCard({ date, message, peopleCount }) {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <article onClick={() => setOpenBooking((prevState) => !prevState)} className="border-2 border-darkbrown ">
      <main className="grid grid-cols-4 gap-2xl items-center">
        <Dashboard_tag content={date} />
        <span>
          Booking of <strong>{peopleCount}</strong> people
        </span>

        <div className="col-span-2">
          <p>
            <strong>Message:</strong>
          </p>
          <p>{message}</p>
        </div>
      </main>
      {openBooking && (
        <footer className="slideIn">
          <h1>HALLØJs</h1>
        </footer>
      )}
    </article>
  );
}

export default BookingCard;
