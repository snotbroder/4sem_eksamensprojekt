"use client";
import { useState } from "react";

import { addItem } from "../../app/api";
import { ToastContainer, toast } from "react-toastify";
import Button from "../ui/buttons/Button";
function Dashboard_addMenuDBItem() {
  const initialMenu = {
    menuTitle: "",
    price: "",
    menuNote: "",
    bgColor: "",
  };

  // Lad det være muligt at tilføje 10 courses
  for (let i = 1; i <= 10; i++) {
    initialMenu[`course${i}`] = "";
  }
  const [menu, setMenu] = useState([initialMenu]);
  const [courseCount, setCourseCount] = useState(1); //Start med to courses

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
  };
  const addCourseField = () => {
    if (courseCount < 10) {
      setCourseCount(courseCount + 1);
    }
    return;
  };

  const removeCourseField = () => {
    if (courseCount > 1) {
      const newMenu = { ...menu[0], [`course${courseCount}`]: "" };
      setMenu([newMenu]);
      setCourseCount(courseCount - 1);
    }
    return;
  };

  function sendData(e) {
    e.preventDefault(); // For at stoppe siden reloades, ellers når den ikke at sende den opdaterede data/state med. den tømmer feltene når der reloades
    let data = {
      uuid: crypto.randomUUID(),
      ...menu[0],
    };

    if (!data.menuTitle || !data.course1 || !data.price || !data.bgColor) {
      // Hvis IKKE alt er som det skal, opdater toast indhold og type
      toast.error("Please fill all required inputs");

      return;
    }
    toast.success("Added new menu");

    // Hvis alt går som det skal, opdater toast indhold og type
    addItem(data, "menu-database");
    //empty input fields
    setMenu([initialMenu]);
    setCourseCount(1);
  }

  return (
    <section className="bg-gray-100 p-m md:p-xl mt-s rounded-md">
      <div className="max-w-[1000px] m-auto">
        <h2>create a new menu</h2>
      </div>
      <hr className="text-gray-300 my-xs max-w-[1000px] mx-auto" />
      {/* Jeg bruger onSubmit, da det er bedre for next.js. Desuden, hvis jeg ikke laver en arrowfunction,
       er det sværre at implementere manglende udfyldte indputfeldte osv.*/}
      <form onSubmit={sendData}>
        <section className="grid md:grid-cols-2 gap-s md:gap-lg max-w-[1000px] m-auto">
          <article>
            <div className="form-field">
              <label htmlFor="menuTitle" className="form-label">
                Menu title*
              </label>
              <input type="text" name="menuTitle" id="menuTitle" className="form-input" value={menu[0].menuTitle} onChange={handleChange} required placeholder="E.g.: Fish season menu"></input>
            </div>

            <div className="flex flex-col form-field">
              <label htmlFor="bgColor" className="form-label">
                Background color*
              </label>
              <select className="capitalize form-select" name="bgColor" id="bgColor" value={menu[0].bgColor} onChange={handleChange} required>
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
              <label className="form-label" htmlFor="menuNote">
                Menu note
              </label>
              <input type="text" name="menuNote" id="menuNote" className="form-input" value={menu[0].menuNote} onChange={handleChange} placeholder="E.g.: This menu is also served pescetarian. . ."></input>
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="price">
                Price*
              </label>
              <input type="number" name="price" id="price" className="form-input" value={menu[0].price} onChange={handleChange} required></input>
            </div>
          </article>
        </section>
        <hr className="text-gray-300 my-xs max-w-[1000px] mx-auto" />
        <div className="grid md:grid-cols-3 gap-xxs md:gap-lg max-w-[1000px] m-auto">
          <div></div>
          <div className=" p-xxs rounded-md col-span-2 flex flex-col">
            <div className="flex gap-xxs mt-xs">
              <Button type="button" variant="configure" disabled={courseCount == 10} onClick={addCourseField}>
                Add Course
              </Button>
              <Button type="button" variant="danger" disabled={courseCount <= 1} onClick={removeCourseField}>
                Remove Last Course
              </Button>
            </div>
          </div>
        </div>

        <article className="flex md:flex-row flex-wrap max-w-[1000px] gap-x-sm  m-auto">
          {[...Array(courseCount)].map((_, index) => (
            <div key={index} className="form-field ">
              <label htmlFor={`course${index + 1}`} className="form-label">
                {`Course ${index + 1}${index === 0 ? "*" : ""}`}
              </label>
              <input
                type="text"
                name={`course${index + 1}`}
                id={`course${index + 1}`}
                className="form-input"
                value={menu[0][`course${index + 1}`]}
                onChange={handleChange}
                required={index === 0} // only course1 is required
              />
            </div>
          ))}
        </article>
        <hr className="text-gray-300 my-xs max-w-[1000px] mx-auto" />
        <div className="grid md:grid-cols-3 gap-xxs md:gap-lg max-w-[1000px] m-auto">
          <div>
            <p className="sm mb-xxs">*Required</p>
          </div>
          <div className=" p-xxs rounded-md col-span-2 flex flex-col">
            <Button variant="success" type="submit" disabled={!menu[0].menuTitle || !menu[0].course1 || !menu[0].price || !menu[0].bgColor}>
              save new menu
            </Button>
          </div>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={5000} pauseOnHover />
    </section>
  );
}

export default Dashboard_addMenuDBItem;
