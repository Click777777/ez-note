import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../contexts/CourseContext";

const Nav = () => {
  const { state1, dispatch1 } = useContext(Context);

  return (
    <nav className=" ">
      <div className="grid grid-cols-12 p-2 py-6 text-start">
        <NavLink to="/" className=" col-span-6 p-2 ">
          <span className=" font-Main text-xl font-bold  uppercase text-green navMin637:text-2xl lg:text-3xl">
            course by e2n
          </span>
        </NavLink>

        {state1 ? (
          <NavLink to="/" className=" col-span-6 p-2  text-end">
            <span
              onClick={() => dispatch1({ type: "notLoggedIn", payload: false })}
              className=" px-3 py-1 font-Main text-xl font-bold uppercase text-green decoration-2 underline-offset-8 transition-all duration-500 hover:text-gold hover:underline navMin637:text-2xl lg:text-3xl"
            >
              log out
            </span>
          </NavLink>
        ) : (
          <NavLink to="/login" className=" col-span-6 p-2  text-end">
            <span className=" px-3 py-1 font-Main text-xl font-bold uppercase text-green decoration-2 underline-offset-8 transition-all duration-500 hover:text-gold hover:underline navMin637:text-2xl lg:text-3xl">
              login
            </span>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
