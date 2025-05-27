import { useState } from "react";
import IconComponent from "../ui/IconComponent";
import Dashboard_tag from "./Dashboard_tag";
import Link from "next/link";
import Dashboard_statusTag from "./Dashboard_statusTag";

function BookingCard({ data, onEditClick }) {
  const [openBooking, setOpenBooking] = useState(false);
  const createdDate = data.created_at.split("T")[0]; //Split ved T i string
  return (
    <article tabIndex={0} onClick={() => setOpenBooking((prevState) => !prevState)} className={`hover:bg-gray-200 px-xs py-[4px]  group rounded-md border-2 border-transparent  ${openBooking && "hover:border-configure not-hover:border-transparent"} slideIn`}>
      <main className="flex flex-wrap md:grid md:grid-cols-4 items-center gap-xxs md:gap-0">
        <div className="flex flex-col">
          {/* <Dashboard_statusTag status={data.status} /> */}
          <p>
            {data.fName} <strong>{data.lName}</strong>
          </p>
          <Dashboard_tag content={data.date} />
        </div>
        <span className="hidden md:grid">
          Booking of <strong>{data.peopleCount}</strong>
        </span>

        <div>
          <p>
            <strong>Message:</strong>
          </p>
          {openBooking ? "" : <p>{data.message.length > 40 ? `${data.message.slice(0, 40)}...` : data.message}</p>}
        </div>
        <button
          className="ml-auto hover:cursor-pointer"
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // Prioriterer click på denne knap, og ikke dens parent booking card
            onEditClick?.(data.uuid); // Send data uuid gennem prop
          }}
        >
          <IconComponent className="hover:text-configure hover:border-2 border-configure rounded-sm" size="2rem" icon="edit" />
        </button>
      </main>
      {openBooking && (
        <footer className="slideDown grid grid-cols-4 gap-xxs">
          <div className="flex flex-col mt-xs">
            <Link
              target="_blank"
              onClick={(e) => {
                e.stopPropagation(); //Prioriter click på denne; hold cardet åbent
              }}
              href={`mailto:${data.email}`}
            >
              Email: <strong className="underline break-words">{data.email}</strong>
            </Link>
            <p>
              Phone: <strong>{data.phone}</strong>
            </p>
            <p>
              Accepts newsletter? <strong>{data.acceptsNewsletter ? "Yes" : "No"}</strong>
            </p>
            <span className="inline md:hidden">
              Booking of <strong>{data.peopleCount}</strong>
            </span>
          </div>
          <div className="max-w-[600px] col-start-3 col-span-3 flex flex-col justify-between">
            <p>{data.message}</p>
            <span className="text-gray-400 flex flex-col">
              <span> Created on: {createdDate},</span>
              <span>UUID: {data.uuid}</span>
            </span>
          </div>
        </footer>
      )}
    </article>
  );
}

export default BookingCard;
