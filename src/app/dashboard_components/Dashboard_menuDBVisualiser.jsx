"use client";

import { useEffect, useState } from "react";
import { getAllItems, deleteItem, editItem } from "../api.js";
import { ToastContainer, toast } from "react-toastify";

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

    toast.success("Successfully deleted menu", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }

  const [editMode, SetOpenEditmode] = useState(false);
  const [editedMenu, setEditedMenu] = useState({});
  function handleOpenEditmode() {
    setEditedMenu(selectedMenu); //kopier den valgte menus data i editedMenu
    SetOpenEditmode((prevState) => !prevState); //Skrift state, toggle
  }

  function sendData(e) {
    e.preventDefault();
    const updatedData = { menuTitle: editedMenu.menuTitle, course1: editedMenu.course1 };

    if (!updatedData.menuTitle || !updatedData.course1) {
      alert("Please fill data");
      return;
    }

    editItem(selectedMenu.uuid, "menu-database", updatedData);

    SetOpenEditmode(false);
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-sm">
        {/* Looper hen over den fetchede data */}
        {menus.length > 0 ? (
          menus.map((menu) => (
            <li className="flex flex-col gap-xxs" key={menu.uuid} onClick={() => clickHandler(menu.uuid)}>
              <h4>{menu.menuTitle}</h4> <p>{menu.course1}</p>
            </li>
          ))
        ) : (
          <p className="animate-pulse">Loading menu...</p>
        )}
      </ul>
      <dialog className="m-auto" id="dialog">
        <div className="p-6 flex flex-col gap-4">
          {editMode ? (
            <div className="flex flex-col gap-2">
              <h3>
                Editing menu <strong>{selectedMenu.menuTitle}</strong>
              </h3>
              <form className="flex flex-col" onSubmit={sendData}>
                <label htmlFor="menuTitle">Menu Titel</label>
                <input className="border-gray-200 border-2 w-60" name="menuTitle" id="menuTitle" value={editedMenu.menuTitle || ""} onChange={(e) => setEditedMenu({ ...editedMenu, menuTitle: e.target.value })}></input>
                <label htmlFor="course1">Course 1 text</label>
                <input className="border-gray-200 border-2 w-60" name="course1" id="course1" value={editedMenu.course1 || ""} onChange={(e) => setEditedMenu({ ...editedMenu, course1: e.target.value })}></input>
                <button className="border-2 bg-green-300 hover:bg-green-400 mt-4" type="submit">
                  Edit changes
                </button>
              </form>

              <button className="bg-gray-300 hover:bg-gray-400" onClick={() => handleOpenEditmode()}>
                Cancel edit
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              What u want?
              <p>
                Selected menu: <strong>{selectedMenu ? selectedMenu.menuTitle : "Error: No menu selected"}</strong>
              </p>
              <button className="bg-yellow-300 hover:bg-yellow-400" onClick={() => handleOpenEditmode()}>
                Edit
              </button>
              <button className="bg-red-400 hover:bg-red-500" onClick={() => handleDelete()}>
                <strong>Delete</strong>
              </button>
              <button className="bg-gray-300 hover:bg-gray-400" onClick={() => dialog.close()} autoFocus>
                Close
              </button>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
export default TestVisualizer;
