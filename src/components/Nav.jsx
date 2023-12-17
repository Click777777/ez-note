import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../contexts/CourseContext";
import MobileNav from "./subComponent/MobileNav";
import Overlay from "./subComponent/Overlay";
import PostOverlay from "./subComponent/PostOverlay";

const Nav = () => {
  const { state1, dispatch1 } = useContext(Context);
  const [clicked, setClicked] = useState(false);

  const isClickedPost = (e) => {
    dispatch1({ type: "loggedIn", payload: true });
    setClicked(!clicked);
  };

  return (
    <nav className=" ">
      <div className="flex items-center justify-between p-2 py-6 text-start lg:px-12">
        <NavLink to="/" className="  ">
          <span className=" navMin637:text-2xl font-Main text-xl  font-bold uppercase text-green lg:text-3xl">
            course by e2n
          </span>
        </NavLink>

        {state1 ? (
          <div className="">
            <MobileNav />
            <div className=" hidden flex-col items-end divide-y divide-green 480px:flex-row 480px:divide-y-0 sm:flex">
              <div className="">
                <NavLink to="/" className=" col-span-6 p-2  text-end">
                  <span
                    onClick={isClickedPost}
                    className=" navMin637:text-2xl px-3 py-1 font-Main text-xl font-bold uppercase text-green decoration-2 underline-offset-8 transition-all duration-500 hover:text-gold 480px:hover:underline lg:text-3xl"
                  >
                    post
                  </span>
                </NavLink>
              </div>

              <div className="">
                <NavLink to="/admin" className=" ">
                  <span
                    onClick={() =>
                      dispatch1({ type: "loggedIn", payload: true })
                    }
                    className=" navMin637:text-2xl px-3 py-1 font-Main text-xl font-bold uppercase text-green decoration-2 underline-offset-8 transition-all duration-500 hover:text-gold 480px:hover:underline lg:text-3xl"
                  >
                    admin
                  </span>
                </NavLink>
              </div>

              <div className="">
                <NavLink to="/" className=" col-span-6 p-2  text-end">
                  <span
                    onClick={() =>
                      dispatch1({ type: "notLoggedIn", payload: false })
                    }
                    className=" navMin637:text-2xl px-3 py-1 font-Main text-xl font-bold uppercase text-green decoration-2 underline-offset-8 transition-all duration-500 hover:text-gold 480px:hover:underline lg:text-3xl"
                  >
                    log out
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <NavLink to="/login" className=" col-span-6 p-2  text-end">
            <span className=" navMin637:text-2xl px-3 py-1 font-Main text-xl font-bold uppercase text-green decoration-2 underline-offset-8 transition-all duration-500 hover:text-gold hover:underline lg:text-3xl">
              login
            </span>
          </NavLink>
        )}

        <PostOverlay setClicked={setClicked} clicked={clicked} />
      </div>
    </nav>
  );
};

export default Nav;
