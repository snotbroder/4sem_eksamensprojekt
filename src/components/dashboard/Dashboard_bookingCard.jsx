import { useState } from "react";
import IconComponent from "../ui/IconComponent";
import Dashboard_tag from "./Dashboard_tag";

function BookingCard({ data }) {
  const [openBooking, setOpenBooking] = useState(false);
  const createdDate = data.created_at.split("T")[0];
  return (
    <article onClick={() => setOpenBooking((prevState) => !prevState)} className={`hover:bg-gray-200 px-xs py-[4px] group rounded-md border-2 border-transparent  ${openBooking && "hover:border-configure not-hover:border-transparent "} slideIn`}>
      <main className="grid grid-cols-4 items-center">
        <Dashboard_tag content={data.date} />
        <span className="">
          Booking of <strong>{data.peopleCount}</strong> people
        </span>

        <div className="">
          <p>
            <strong>Message:</strong>
          </p>
          {openBooking ? "" : <p>{data.message.length > 20 ? `${data.message.slice(0, 20)}...` : data.message}</p>}
        </div>

        {openBooking ? <IconComponent className="group-hover:text-configure ml-auto" size="2rem" icon="edit" /> : <IconComponent className="opacity-0 ml-auto" icon="edit" size="2rem" />}
      </main>
      {openBooking && (
        <footer className="slideIn grid grid-cols-4">
          <div className="flex flex-col">
            <p>
              Booked by {data.fName} <strong>{data.lName}</strong>
            </p>
            <p>
              Write to <strong>{data.email}</strong>
            </p>
            <p>
              Call at <strong>{data.phone}</strong>
            </p>
            <p>
              Accepts newsletter? <strong>{data.acceptsNewsletter ? "Yes" : "No"}</strong>
            </p>
          </div>
          <div className="max-w-[600px] col-start-3 col-span-3 flex flex-col justify-between">
            <p>{data.message}</p>
            <span className="text-gray-300 flex flex-col">
              <span> Created at: {createdDate},</span>
              <span>UUID: {data.uuid}</span>
            </span>
          </div>
        </footer>
      )}
    </article>
  );
}

export default BookingCard;
