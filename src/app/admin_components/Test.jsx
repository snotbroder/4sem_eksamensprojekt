"use client";
import { useState } from "react";
import { useStoreTest } from "@/stores/useStoreTest";
import { addItem } from "../api";
import Toast from "./Toast";

function Test() {
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const menuData = [
    {
      menuTitle: "",
      course1: "",
    },
  ];

  const [menu, setMenu] = useState(menuData);

  //Importerer zustand menu-array og setState
  // const setMenus = useStoreTest((state) => state.setNewItem);
  // const menus = useStoreTest((state) => state.menuData);

  const handleChange = (e) => {
    //hent ændringen fra det ændrede inputfelt
    const { name, value } = e.target;

    //map gennem ændringerne
    const updatedMenu = menu.map((item, index) => {
      if (index === 0) {
        return { ...item, [name]: value };
      }
      return item;
    });

    setMenu(updatedMenu);
    // setMenus(updatedMenu);
  };

  function sendData() {
    // e.preventDefault(); // For at stoppe siden reloades, ellers når den ikke at sende den opdaterede data/state med. den tømmer feltene når der reloades
    let data = {
      uuid: crypto.randomUUID(),
      ...menu[0],
    };

    if (!data.menuTitle || !data.course1) {
      // Hvis IKKE alt er som det skal, opdater toast indhold og type
      setToastType("error"); //Her sætter man typen af toast
      setShowToast(true);
      setToastMessage("An error occured :(((");
      return;
    }

    // Hvis alt går som det skal, opdater toast indhold og type
    setToastType("success");
    setShowToast(true);
    setToastMessage("Added item succesfully");
    addItem(data, "menu-database");
  }
  return (
    <div>
      <h3 className="text-2xl m-3 text-clock-that-tea">Tilføj menu</h3>
      <ul className="list-none flex flex-col justify-between gap-5 m-5">
        <li className="flex flex-col"></li>
      </ul>

      {/* Jeg bruger onSubmit, da det er bedre for next.js. Desuden, hvis jeg ikke laver en arrowfunction,
       er det sværre at implementere manglende udfyldte indputfeldte osv.*/}
      <form className="flex flex-col" onSubmit={sendData}>
        <label htmlFor="menuTitle">Menu Titel</label>
        <input className="border-gray-200 border-2 w-60" name="menuTitle" id="menuTitle" value={menu[0].menuTitle} onChange={handleChange}></input>
        <label htmlFor="course1">Course 1 text</label>
        <input className="border-gray-200 border-2 w-60" name="course1" id="course1" value={menu[0].course1} onChange={handleChange}></input>
        <button className="border-2 border-gray-500" type="submit">
          Submit
        </button>
      </form>
      {/* {menuData[0].map((menuTitle, index) => {
        return <div key={index}>Menu title: {menuTitle}</div>;
      })} */}

      {/* Toast komponent */}
      <Toast message={toastMessage} showToast={showToast} hideToast={() => setShowToast(false)} type={toastType} />
    </div>
  );
}

export default Test;
