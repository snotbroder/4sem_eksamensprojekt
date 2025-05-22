"use client";
import { ToastContainer, toast } from "react-toastify";
import { getAllItems, editItem, deleteItem } from "@/app/api";
import Dashboard_bookingCard from "@/components/dashboard/Dashboard_bookingCard.jsx";
import { useState, useEffect } from "react";
import Button from "../ui/buttons/Button";

function bookingVisualiser() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null); //Dette er for at lagre et selected databaserow som jeg vil redigere eller slette

  useEffect(() => {
    //Kør funktion når kompomenten lades

    //Fetch bookings fra DB
    async function fetchBookings() {
      const fetchedBooking = await getAllItems("bookings-database");
      setBookings(fetchedBooking);
    }
    fetchBookings();
  }, []);

  // Edit mode
  // Clickhandler for hvis man klikker på én af bookingerne. Den får tilsendt det respektive UUID med
  function clickHandler(uuid) {
    console.log("UUID: ", uuid);
    const booking = bookings.find((booking) => booking.uuid === uuid);
    setSelectedBooking(booking); //Brug UUID i state så det lagres til idenktifikation

    dialog.showModal();
  }

  async function handleDelete() {
    if (selectedBooking) {
      await deleteItem(selectedBooking.uuid, "bookings-database"); //Slet item fra database

      setBookings((bookings) => bookings.filter((booking) => booking.uuid !== selectedBooking.uuid)); //Slet item fra lokalt state, så vi ikke skal se den. Så undgår vi at refreshe siden.
    }
    dialog.close(); // Luk dialog

    toast.success("Successfully deleted menu");
  }

  const [editMode, SetOpenEditmode] = useState(false);
  const [editedBooking, setEditedBooking] = useState({});

  function handleOpenEditmode() {
    setEditedBooking(selectedBooking); //kopier den valgte menus data i editedMenu
    SetOpenEditmode((prevState) => !prevState); //Skrift state, toggle
  }

  function sendData(e) {
    e.preventDefault();
    const updatedData = { ...editedBooking }; // spread data

    // || !updatedData.lName
    if (!updatedData.fName) {
      toast.error("Please fill data");
      return;
    }

    editItem(selectedBooking.uuid, "booking-database", updatedData);
    // Update local menus state
    setBookings((prevBookings) => prevBookings.map((booking) => (booking.uuid === selectedBooking.uuid ? { ...booking, ...updatedData } : booking))); // tjek for samme uuid, ogsammenlign den gamle og opdaterede data, hvis der er ny opdateret data så ændr denne i localstate
    toast.success("Successfully updated menu");
    dialog.close();
    SetOpenEditmode(false);
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} pauseOnHover />
      <ul className="flex flex-col divide-y divide-gray-300">
        {/* Looper hen over den fetchede data */}
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <li className="flex flex-col gap-xxs" key={index}>
              <Dashboard_bookingCard data={booking} onEditClick={(uuid) => clickHandler(uuid)} />
            </li>
          ))
        ) : (
          <p className="animate-pulse">Loading bookings...</p>
        )}
      </ul>
      {/* Edit mode / dialog popup */}
      <dialog id="dialog">
        <div className="p-6 flex flex-col gap-4 slideIn">
          {editMode ? (
            <div className="flex flex-col gap-2 slideIn">
              <header>
                <p>
                  <strong>Configuring</strong>
                </p>
                <h2>{selectedBooking ? `booking for ${selectedBooking.date}` : "Error: No booking selected"}</h2>
              </header>
              <form onSubmit={sendData}>
                <div className="grid md:grid-cols-2 gap-xxs">
                  <article>
                    <div className="form-field">
                      <label htmlFor="fName" className="form-label">
                        First name*
                      </label>
                      <input type="text" name="fName" id="fName" className="form-input" value={editedBooking.fName} onChange={(e) => setEditedBooking({ ...editedBooking, fName: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input type="text" name="email" id="email" className="form-input" value={editedBooking.email} onChange={(e) => setEditedBooking({ ...editedBooking, email: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="date" className="form-label">
                        Booked date
                      </label>
                      <input type="date" name="date" id="date" className="form-input" value={editedBooking.date} onChange={(e) => setEditedBooking({ ...editedBooking, date: e.target.value })}></input>
                    </div>
                  </article>
                  <article>
                    <div className="form-field">
                      <label htmlFor="lName" className="form-label">
                        Last name
                      </label>
                      <input type="text" name="lName" id="lName" className="form-input" value={editedBooking.lName} onChange={(e) => setEditedBooking({ ...editedBooking, lName: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input type="text" name="phone" id="phone" className="form-input" value={editedBooking.phone} onChange={(e) => setEditedBooking({ ...editedBooking, phone: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="peopleCount" className="form-label">
                        Party of
                      </label>
                      <input type="number" name="peopleCount" id="peopleCount" className="form-input" value={editedBooking.peopleCount} onChange={(e) => setEditedBooking({ ...editedBooking, peopleCount: e.target.value })}></input>
                    </div>
                  </article>
                </div>
                <div className="form-field">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <input type="textarea" name="message" id="message" className="form-input" value={editedBooking.message} onChange={(e) => setEditedBooking({ ...editedBooking, message: e.target.value })}></input>
                </div>
                <p>*Required</p>
                <Button variant="success" type="submit">
                  save changes
                </Button>
              </form>

              <Button variant="primary" onClick={() => handleOpenEditmode()}>
                cancel edit
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-s">
              <header>
                <p>
                  <strong>Configuring</strong>
                </p>
                <h2>{selectedBooking ? `booking for ${selectedBooking.date}` : "Error: No booking selected"}</h2>
                <p> {selectedBooking ? `Booker: ${selectedBooking.fName} ${selectedBooking.lName}` : "Error: No booking selected"}</p>
              </header>
              <p>Choose an option.</p>
              <footer className="flex flex-col gap-xxs">
                <Button variant="configure" onClick={handleOpenEditmode}>
                  configure content
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                  delete
                </Button>
                <Button variant="primary" onClick={() => dialog.close()}>
                  Close
                </Button>
              </footer>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
export default bookingVisualiser;
