"use client";

import { useEffect, useState } from "react";
import { getAllItems, deleteItem } from "../api.js";
import Toast from "./Toast";

function TestVisualizer() {
  const [menus, setMenus] = useState([]); //Laver et state for at "lagre" den fetchede data fra databasen
  const [selectedUuid, setSelectedUuid] = useState(null); //Dette er for at lagre et selected databaserow som jeg vil redigere eller slette

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("success");

  useEffect(() => {
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
    setSelectedUuid(uuid); //Brug UUID i state så det lagres til idenktifikation

    dialog.showModal();
  }

  async function handleDelete() {
    if (selectedUuid) {
      await deleteItem(selectedUuid, "menu-database"); //Slet item fra database

      setMenus((menus) => menus.filter((menu) => menu.uuid !== selectedUuid)); //Slet item fra lokalt state, så vi ikke skal se den. Så undgår vi at refreshe siden.
      // Show success toast after delete
      setToastType("success"); // You can set this to "error" if needed
      setShowToast(true);
    } else {
      //Hvis der s
      setToastType("error");
      setShowToast(true);
    }
    dialog.close(); // Luk dialog
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
            <li className="m-4 bg-gray-100 p-5" key={menu.uuid} onClick={() => clickHandler(menu.uuid)}>
              <strong>{menu.menuTitle}</strong> - {menu.course1}
            </li>
          ))
        ) : (
          <p>Databasen er tom :(</p>
        )}
      </ul>
      <dialog className="m-auto" id="dialog">
        <div className="p-6 flex flex-col gap-4">
          What u want?
          <div className="flex flex-col gap-2">
            <button className="bg-yellow-300">Edit</button>
            <button className="bg-red-400" onClick={() => handleDelete()}>
              <strong>Delete</strong>
            </button>
            <button className="bg-gray-300" onClick={() => dialog.close()} autoFocus>
              Close
            </button>
          </div>
        </div>
      </dialog>

      {/* Toast komponent */}
      <Toast message="Successfully Deleted!" showToast={showToast} hideToast={() => setShowToast(false)} type={toastType} />
    </div>
  );
}
export default TestVisualizer;
