"use client";

import { useEffect, useState } from "react";
import { getAllItems, deleteItem, editItem } from "../../app/api.js";
import { ToastContainer, toast } from "react-toastify";
import Dashboard_menucard from "./Dashboard_menucard.jsx";
import Button from "../ui/buttons/Button.jsx";

function TestVisualizer() {
  const [menus, setMenus] = useState([]); //Laver et state for at "lagre" den fetchede data fra databasen
  const [selectedMenu, setSelectedMenu] = useState(null); //Dette er for at lagre et selected databaserow som jeg vil redigere eller slette

  useEffect(() => {
    //Kør funktion når kompomenten lades
    //Fetcher databasens data, og sætter det i lokalt state
    async function fetchMenus() {
      const fetchedMenus = await getAllItems("menu-database");
      setMenus(fetchedMenus);
    }

    fetchMenus();
  }, []); //Jeg bruger useEffect fordi ellers renderer komponenten hele tiden. Jeg får den kun til at køre én gang når siden lades

  // Clickhandler for hvis man klikker på én af menuerne. Den får tilsendt det respektive UUID med
  function clickHandler(uuid) {
    console.log("UUID: ", uuid);
    const menu = menus.find((menu) => menu.uuid === uuid);
    setSelectedMenu(menu); //Brug UUID i state så det lagres til idenktifikation

    dialog.showModal();
  }

  async function handleDelete() {
    if (selectedMenu) {
      await deleteItem(selectedMenu.uuid, "menu-database"); //Slet item fra database

      setMenus((menus) => menus.filter((menu) => menu.uuid !== selectedMenu.uuid)); //Slet item fra lokalt state, så vi ikke skal se den. Så undgår vi at refreshe siden.
    }
    dialog.close(); // Luk dialog

    toast.success("Successfully deleted menu");
  }

  const [editMode, SetOpenEditmode] = useState(false);
  const [editedMenu, setEditedMenu] = useState({});
  const [confirmDeletionMode, setConfirmDeletionMode] = useState(false);
  function handleOpenEditmode() {
    setEditedMenu(selectedMenu); //kopier den valgte menus data i editedMenu
    SetOpenEditmode((prevState) => !prevState); //Skrift state, toggle
  }

  function sendData(e) {
    e.preventDefault();
    const updatedData = { ...editedMenu }; // spread data

    if (!updatedData.menuTitle || !updatedData.course1) {
      toast.error("Please fill data");
      return;
    }

    editItem(selectedMenu.uuid, "menu-database", updatedData);
    // Update local menus state
    setMenus((prevMenus) => prevMenus.map((menu) => (menu.uuid === selectedMenu.uuid ? { ...menu, ...updatedData } : menu))); // tjek for samme uuid, ogsammenlign den gamle og opdaterede data, hvis der er ny opdateret data så ændr denne i localstate
    toast.success("Successfully updated menu");
    dialog.close();
    SetOpenEditmode(false);
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} pauseOnHover />
      <ul className="flex flex-wrap gap-sm my-s">
        {/* Looper hen over den fetchede data */}
        {menus.length > 0 ? (
          menus.map((menu) => (
            <li className="flex flex-col gap-xxs" key={menu.uuid} onClick={() => clickHandler(menu.uuid)}>
              <Dashboard_menucard menuData={menu} />
            </li>
          ))
        ) : (
          <p className="animate-pulse">Loading menu...</p>
        )}
      </ul>
      {/* Edit mode / dialog popup */}
      <dialog id="dialog">
        <div className="p-6 flex flex-col gap-4 slideIn">
          {editMode ? (
            <div className="flex flex-col gap-2 slideIn">
              <header>
                <p>
                  <strong>Configuring menu</strong>
                </p>
                <h2>{selectedMenu ? selectedMenu.menuTitle : "Error: No menu selected"}</h2>
              </header>
              <form onSubmit={sendData}>
                <div className="grid md:grid-cols-2 gap-xxs">
                  {/* Upper column left */}
                  <article>
                    <div className="form-field">
                      <label htmlFor="menuTitle" className="form-label">
                        Menu title*
                      </label>
                      <input type="text" name="menuTitle" id="menuTitle" className="form-input" value={editedMenu.menuTitle} onChange={(e) => setEditedMenu({ ...editedMenu, menuTitle: e.target.value })}></input>
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
                  {/* Upper column right */}
                  <article>
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

                <hr className="text-gray-300 my-xs" />
                <div className="grid md:grid-cols-2 gap-xxs">
                  {/* Lower column left */}
                  <article>
                    <div className="form-field">
                      <label htmlFor="course1" className="form-label">
                        Course 1*
                      </label>
                      <input type="text" name="course1" id="course1" className="form-input" value={editedMenu.course1} onChange={(e) => setEditedMenu({ ...editedMenu, course1: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="course2" className="form-label">
                        Course 2
                      </label>
                      <input type="text" name="course2" id="course2" className="form-input" value={editedMenu.course2} onChange={(e) => setEditedMenu({ ...editedMenu, course2: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="course3" className="form-label">
                        Course 3
                      </label>
                      <input type="text" name="course3" id="course3" className="form-input" value={editedMenu.course3} onChange={(e) => setEditedMenu({ ...editedMenu, course3: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="course4" className="form-label">
                        Course 4
                      </label>
                      <input type="text" name="course4" id="course4" className="form-input" value={editedMenu.course4} onChange={(e) => setEditedMenu({ ...editedMenu, course4: e.target.value })}></input>
                    </div>
                    <div className="form-field">
                      <label htmlFor="course5" className="form-label">
                        Course 5
                      </label>
                      <input type="text" name="course5" id="course5" className="form-input" value={editedMenu.course5} onChange={(e) => setEditedMenu({ ...editedMenu, course5: e.target.value })}></input>
                    </div>
                  </article>

                  {/* Lower column right */}
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
          ) : confirmDeletionMode ? (
            <>
              <h2>Deleting menu</h2>
              <p>
                Are you sure you want to delete <strong>{selectedMenu.menuTitle}</strong>?
              </p>
              <p>This action is irrevesible</p>

              <footer className="flex flex-col gap-xxs">
                <Button variant="danger" onClick={handleDelete}>
                  confirm delete
                </Button>
                <Button variant="primary" onClick={() => setConfirmDeletionMode(false)}>
                  cancel
                </Button>
              </footer>
            </>
          ) : (
            <div className="flex flex-col gap-s">
              <header>
                <p>
                  <strong>Configuring menu</strong>
                </p>
                <h2>{selectedMenu ? selectedMenu.menuTitle : "Error: No menu selected"}</h2>
              </header>
              <p>Choose an option.</p>
              <footer className="flex flex-col gap-xxs">
                <Button variant="configure" onClick={handleOpenEditmode}>
                  configure content
                </Button>
                <Button variant="danger" onClick={() => setConfirmDeletionMode(true)}>
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
export default TestVisualizer;
