"use client";

import { useEffect, useState } from "react";
import { getAllItems, deleteItem, editItem } from "../api.js";
import { useStoreTest } from "@/stores/useStoreTest";
import Toast from "./Toast.js";

function TestVisualizer() {
  const [menus, setMenus] = useState([]); //Laver et state for at "lagre" den fetchede data fra databasen
  // const setMenus = useStoreTest((state) => state.setNewItem);
  // const menus = useStoreTest((state) => state.menuData);

  const [selectedMenu, setSelectedMenu] = useState(null); //Dette er for at lagre et selected databaserow som jeg vil redigere eller slette

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("");
  const [toastMessage, setToastMessage] = useState("");

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
    console.log("Hellow. UUID: ", uuid);
    const menu = menus.find((menu) => menu.uuid === uuid);
    setSelectedMenu(menu); //Brug UUID i state så det lagres til idenktifikation

    dialog.showModal();
  }

  async function handleDelete() {
    if (selectedMenu) {
      await deleteItem(selectedMenu.uuid, "menu-database"); //Slet item fra database

      setMenus((menus) => menus.filter((menu) => menu.uuid !== selectedMenu.uuid)); //Slet item fra lokalt state, så vi ikke skal se den. Så undgår vi at refreshe siden.
      // Show success toast after delete
      setToastType("success");
      setShowToast(true);
    } else {
      //Hvis noget går galt
      setToastType("error");
      setShowToast(true);
    }
    dialog.close(); // Luk dialog
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
      setToastType("error");
      setShowToast(true);
      setToastMessage("An error occured :(((");
      return;
    }

    setToastType("success");
    setShowToast(true);
    editItem(selectedMenu.uuid, "menu-database", updatedData);
    setToastMessage("Edited item succesfully");
    SetOpenEditmode(false);
  }

  return (
    <div className="p-2 border-amber-200 border-2 my-3">
      <h1>
        <strong>Test visualizer component</strong>
      </h1>
      <h4>Existing menus in database:</h4>
      <ul className="flex">
        {/* Looper hen over den fetchede data */}
        {menus.length > 0 ? (
          menus.map((menu) => (
            <li className="m-4 bg-gray-100 p-5 hover:bg-gray-300" key={menu.uuid} onClick={() => clickHandler(menu.uuid)}>
              <strong>{menu.menuTitle}</strong> - {menu.course1}
            </li>
          ))
        ) : (
          <p>Databasen er tom :(</p>
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

      {/* Toast komponent */}
      <Toast message="Successfully Deleted!" showToast={showToast} hideToast={() => setShowToast(false)} type={toastType} />
    </div>
  );
}
export default TestVisualizer;
