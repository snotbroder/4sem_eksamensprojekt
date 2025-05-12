"use client";
import { useState } from "react";

import { addItem } from "../../app/api";
import { ToastContainer, toast } from "react-toastify";
function Dashboard_addMenuDBItem() {
  const menuData = [
    {
      menuTitle: "",
      course1: "",
      course2: "",
      course3: "",
      course4: "",
      course5: "",
      course6: "",
      course7: "",
      price: "",
      menuNote: "",
      bgColor: "",
    },
  ];

  const [menu, setMenu] = useState(menuData);

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

  function sendData(e) {
    e.preventDefault(); // For at stoppe siden reloades, ellers når den ikke at sende den opdaterede data/state med. den tømmer feltene når der reloades
    let data = {
      uuid: crypto.randomUUID(),
      ...menu[0],
    };

    if (!data.menuTitle || !data.course1 || !data.price || !data.bgColor) {
      // Hvis IKKE alt er som det skal, opdater toast indhold og type
      toast.error("Please fill all required inputs", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    }
    toast.success("Added new menu", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // Hvis alt går som det skal, opdater toast indhold og type
    addItem(data, "menu-database");

    //empty input fields
    setMenu(menuData);
  }

  return (
    <section className="bg-gray-100 p-m md:p-xl mt-s">
      <h2>Tilføj menu</h2>
      {/* Jeg bruger onSubmit, da det er bedre for next.js. Desuden, hvis jeg ikke laver en arrowfunction,
       er det sværre at implementere manglende udfyldte indputfeldte osv.*/}
      <form className="grid grid-cols-2 gap-s md:gap-lg max-w-[1000px] mx-auto" onSubmit={sendData}>
        <article>
          <label htmlFor="menuTitle">Menu title</label>
          <input name="menuTitle" id="menuTitle" value={menu[0].menuTitle} onChange={handleChange}></input>
          <label htmlFor="course1">Course 1</label>
          <input name="course1" id="course1" value={menu[0].course1} onChange={handleChange}></input>
          <label htmlFor="course2">Course 2</label>
          <input name="course2" id="course2" value={menu[0].course2} onChange={handleChange}></input>
          <label htmlFor="course3">Course 3</label>
          <input name="course3" id="course3" value={menu[0].course3} onChange={handleChange}></input>
          <label htmlFor="course4">Course 4</label>
          <input name="course4" id="course4" value={menu[0].course4} onChange={handleChange}></input>
          <label htmlFor="course5">Course 5</label>
          <input name="course5" id="course5" value={menu[0].course5} onChange={handleChange}></input>
        </article>
        <article>
          <label htmlFor="course6">Course 6</label>
          <input name="course6" id="course6" value={menu[0].course6} onChange={handleChange}></input>
          <label htmlFor="course7">Course 7</label>
          <input name="course7" id="course7" value={menu[0].course7} onChange={handleChange}></input>
          <label htmlFor="price">Price</label>
          <input name="price" id="price" value={menu[0].price} onChange={handleChange}></input>
          <div className="flex flex-col">
            <label htmlFor="bgColor">Background color</label>
            <select className="capitalize" name="bgColor" id="bgColor" value={menu[0].bgColor} onChange={handleChange}>
              <option>primary-200</option>
              <option>primary-400</option>
              <option>secondary-200</option>
              <option>secondary-400</option>
              <option>secondary-500</option>
            </select>
          </div>
          <label htmlFor="menuNote">Menu note</label>
          <input className="h-[25.2%]" name="menuNote" id="menuNote" value={menu[0].menuNote} onChange={handleChange}></input>
        </article>
        <button className="border-2 border-gray-300 rounded w-30" type="submit">
          Submit
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </section>
  );
}

export default Dashboard_addMenuDBItem;
