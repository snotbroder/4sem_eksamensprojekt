"use client";
import { ToastContainer, toast } from "react-toastify";
import { getAllItems } from "@/app/api";
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
                <h2>{selectedMenu ? selectedMenu.menuTitle : "Error: No menu selected"}</h2>
              </header>
              <form onSubmit={sendData}>
                <div className="grid md:grid-cols-2 gap-xxs">
                  <article>
                    <div className="form-field">
                      <label htmlFor="fName" className="form-label">
                        Menu title*
                      </label>
                      <input type="text" name="fName" id="fName" className="form-input" value={editedBooking.fName} onChange={(e) => setEditedMenu({ ...editedMenu, menuTitle: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="course1" className="form-label">
                        Course 1*
                      </label>
                      <input type="text" name="course1" id="course1" className="form-input" value={editedMenu.course1} onChange={(e) => setEditedMenu({ ...editedMenu, course1: e.target.value })}></input>
                    </div>

                    <div className="flex flex-col form-field">
                      <label htmlFor="bgColor" className="form-label">
                        Background color*
                      </label>
                      <select className="capitalize form-select" name="bgColor" id="bgColor" value={editedMenu.bgColor} onChange={(e) => setEditedMenu({ ...editedMenu, bgColor: e.target.value })} required>
                        <option></option>
                        <option>primary-200</option>
                        <option>primary-400</option>
                        <option>secondary-200</option>
                        <option>secondary-400</option>
                        <option>secondary-500</option>
                      </select>
                    </div>
                  </article>
                  <article>
                    <div className="form-field">
                      <label htmlFor="course6" className="form-label">
                        Course 6
                      </label>
                      <input type="text" name="course6" id="course6" className="form-input" value={editedMenu.course6} onChange={(e) => setEditedMenu({ ...editedMenu, course6: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="course7" className="form-label">
                        Course 7
                      </label>
                      <input type="text" name="course7" id="course7" className="form-input" value={editedMenu.course7} onChange={(e) => setEditedMenu({ ...editedMenu, course7: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="course8" className="form-label">
                        Course 8
                      </label>
                      <input type="text" name="course8" id="course8" className="form-input" value={editedMenu.course8} onChange={(e) => setEditedMenu({ ...editedMenu, course8: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="course9" className="form-label">
                        Course 9
                      </label>
                      <input type="text" name="course9" id="course9" className="form-input" value={editedMenu.course9} onChange={(e) => setEditedMenu({ ...editedMenu, course9: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="course10" className="form-label">
                        Course 10
                      </label>
                      <input type="text" name="course10" id="course10" className="form-input" value={editedMenu.course10} onChange={(e) => setEditedMenu({ ...editedMenu, course10: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="menuNote" className="form-label">
                        Menu note
                      </label>
                      <input type="text" name="menuNote" id="menuNote" className="form-input" value={editedMenu.menuNote} onChange={(e) => setEditedMenu({ ...editedMenu, menuNote: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="price" className="form-label">
                        Price
                      </label>
                      <input type="text" name="price" id="price" className="form-input" value={editedMenu.price} onChange={(e) => setEditedMenu({ ...editedMenu, price: e.target.value })}></input>
                    </div>
                  </article>
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
                <h2>{selectedBooking ? selectedBooking.fName : "Error: No menu selected"}</h2>
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
