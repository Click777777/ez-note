import React, { useContext, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import PostOverlay from "./PostOverlay";
import { Context } from "../../contexts/CourseContext";

const MobileNav = () => {
  const { dispatch1 } = useContext(Context);
  const [moblie, setMoblie] = useState(false);
  const [clicked, setClicked] = useState(false);

  const isClickedPost = (e) => {
    dispatch1({ type: "loggedIn", payload: true });
    setClicked(!clicked);
    setMoblie(!moblie);
  };

  const adminClick = (e) => {
    dispatch1({ type: "loggedIn", payload: true });
    setMoblie(!moblie);
  };

  const adminLogOut = (e) => {
    dispatch1({ type: "notLoggedIn", payload: false });
    setMoblie(!moblie);
  };
  return (
    <div className="relative sm:hidden">
      <button onClick={() => setMoblie(!moblie)}>
        {moblie ? (
          <VscClose className="pt-2 align-baseline text-4xl" />
        ) : (
          <VscMenu className="pt-2 align-baseline text-4xl" />
        )}
      </button>
      {moblie && (
        <div className="absolute right-0 top-10 z-10 flex w-[160px] flex-col text-center">
          <Link
            to="/"
            onClick={isClickedPost}
            className="bg-green px-2 py-3 capitalize transition-all duration-500 hover:bg-gold hover:text-dark"
          >
            post
          </Link>
          <Link
            to="admin"
            onClick={adminClick}
            className="bg-green px-2 py-3 capitalize transition-all duration-500 hover:bg-gold hover:text-dark"
          >
            admin
          </Link>
          <Link
            to="/"
            onClick={adminLogOut}
            className="bg-green px-2 py-3 capitalize transition-all duration-500 hover:bg-gold hover:text-dark"
          >
            logout
          </Link>
        </div>
      )}

      <PostOverlay setClicked={setClicked} clicked={clicked} />
    </div>
  );
};

export default MobileNav;
