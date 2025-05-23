"use client";
import { useState } from "react";

import { addItem } from "../../app/api";
import { ToastContainer, toast } from "react-toastify";
import Button from "../ui/buttons/Button";
function AddBooking() {
  const initialBooking = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    peopleCount: 9,
    acceptsNewsletter: true,
  };

  const [booking, setBooking] = useState([initialBooking]);

  const handleChange = (e) => {
    //hent ændringen fra det ændrede inputfelt
    const { name, value, type, checked } = e.target;

    //map gennem ændringerne
    const updatedBooking = booking.map((item, index) => {
      if (index === 0) {
        return {
          ...item,
          [name]:
            type === "checkbox"
              ? checked
              : name === //Hvis det er en checkbox så læs dens value sæt ind i updatedBooking
                "peopleCount"
              ? parseInt(value) //Lav peoplecount fra string til integer
              : value,
        };
      }
      return item;
    });
    setBooking(updatedBooking);
  };

  function sendData(e) {
    e.preventDefault(); // For at stoppe siden reloades, ellers når den ikke at sende den opdaterede data/state med. den tømmer feltene når der reloades
    let data = {
      uuid: crypto.randomUUID(), //Lav et uuid
      ...booking[0],
    };

    if (!data.fName || !data.lName || !data.email || !data.message || !data.date || !data.peopleCount) {
      // Hvis IKKE alt er som det skal, opdater toast indhold og type
      toast.error("Please fill all required inputs");
      return;
    }
    toast.success("Sent booking information");

    // Hvis alt går som det skal, opdater toast indhold og type
    addItem(data, "bookings-database");
    //empty input fields
    setBooking([initialBooking]);
  }

  return (
    <section>
      <h2>Book our venue </h2>
      <form onSubmit={sendData}>
        <section className="grid grid-cols-2 gap-xxs">
          <article>
            <div className="form-field">
              {/* First Name */}
              <label htmlFor="fName" className="form-label">
                First name*
              </label>
              <input type="text" name="fName" id="fName" className="form-input" value={booking[0].fName} onChange={handleChange} required placeholder="John"></input>
            </div>
            {/* Email */}
            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input type="email" name="email" id="email" className="form-input" value={booking[0].email} onChange={handleChange} required></input>
            </div>
            {/* Date */}
            <div className="form-field">
              <label htmlFor="date" className="form-label">
                Date*
              </label>
              <input type="date" name="date" id="date" className="form-input" value={booking[0].date} onChange={handleChange} required></input>
            </div>
          </article>
          <article>
            {/* Last Name */}
            <div className="form-field">
              <label htmlFor="lName" className="form-label">
                Last name*
              </label>
              <input type="text" name="lName" id="lName" className="form-input" value={booking[0].lName} onChange={handleChange} required placeholder="Johnson"></input>
            </div>
            {/* Phone */}
            <div className="form-field">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input type="phone" name="phone" id="phone" className="form-input" value={booking[0].phone} onChange={handleChange}></input>
            </div>
            {/* People count */}
            <div className="form-field">
              <label htmlFor="peopleCount" className="form-label">
                People on booking*
              </label>
              <input type="number" name="peopleCount" id="peopleCount" className="form-input" value={booking[0].peopleCount} onChange={handleChange} min="9" max="50" required></input>
            </div>
          </article>
          {/* Message */}
          <div className="form-field col-span-2">
            <label htmlFor="message" className="form-label">
              Message*
            </label>
            <textarea type="text" name="message" id="message" placeholder="Inform us about eg. the occasion or other requests we should know" className="form-input min-h-20 resize-none" value={booking[0].message} onChange={handleChange} required></textarea>
          </div>
          {/* Accepts newsletter */}
          <div className="form-field flex">
            <label htmlFor="acceptsNewsletter" className="form-label">
              Want to recieve our newsletter?
            </label>
            <input type="checkbox" name="acceptsNewsletter" id="acceptsNewsletter" className="form-input place-self-start" value={booking[0].acceptsNewsletter} onChange={handleChange}></input>
          </div>
        </section>
        <div className="flex justify-between">
          <p className="sm mb-xxs">*Required</p>

          <Button variant="forms" type="submit" disabled={!booking[0].fName || !booking[0].lName || !booking[0].email || !booking[0].message || !booking[0].date || !booking[0].peopleCount}>
            Request booking
          </Button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={5000} pauseOnHover />
    </section>
  );
}

export default AddBooking;
