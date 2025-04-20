"use client";

import { useEffect, useState } from "react";
import { getAllMenus } from "../api.js";

function TestVisualizer() {
  const [menus, setMenus] = useState([]); //Laver et state for at "lagre" den fetchede data fra databasen

  useEffect(() => {
    //Fetcher databasens data, og sætter det i lokalt state
    async function fetchMenus() {
      const fetchedMenus = await getAllMenus();
      setMenus(fetchedMenus);
    }

    fetchMenus();
  }, []); //Jeg bruger useEffect fordi ellers renderer komponenten hele tiden. Jeg får den kun til at køre én gang når siden lades

  // Clickhandler for hvis man klikker på én af menuerne. Den får tilsendt det respektive UUID med
  function clickHandler(uuid) {
    console.log("Hellow. UUID: ", uuid);
  }
  return (
    <div>
      <h1>Test visualizer</h1>
      <h4>Existing menus in database:</h4>
      <ul className="flex">
        {/* Looper hen over den fetchede data */}
        {menus.map((menu) => (
          <li className="m-4 bg-gray-100 p-5" key={menu.uuid} onClick={() => clickHandler(menu.uuid)}>
            <strong>{menu.menuTitle}</strong> - {menu.course1}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TestVisualizer;
