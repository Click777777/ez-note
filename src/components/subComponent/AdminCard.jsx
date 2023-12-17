import React, { useContext, useState } from "react";
import { Context } from "../../contexts/CourseContext";
import Overlay from "./Overlay";
import { deleteCourse } from "../../api/RestApi";

const AdminCard = ({ value }) => {
  const { dispatch } = useContext(Context);
  const [expanded, setExpanded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const delHandler = () => {
    dispatch({ type: "Delete", payload: value.id });
    deleteCourse(value.id);
  };

  return (
    <div className="">
      <div className=" flex flex-col justify-start gap-6 480px:flex-row ">
        <div className="flex justify-center 480px:justify-start">
          <img
            src="https://jobsdigit.com/wp-content/uploads/2021/12/BCom-Course-Details.png"
            alt="image Error"
            className=" max-w-[230px] rounded-sm"
          />
        </div>
        <div className="flex max-w-[600px] flex-col gap-1 gap-y-2">
          <h1 className="  text-2xl font-medium uppercase text-gold">
            {value.title}
          </h1>
          <p
            onClick={() => setExpanded(!expanded)}
            className={` mt-1 cursor-pointer ${
              expanded ? "line-clamp-none" : "line-clamp-2"
            }`}
          >
            {value.description}
          </p>
          <div className=" flex space-x-4">
            <button
              onClick={handleClick}
              className=" rounded-md bg-green px-4 py-1 capitalize"
            >
              edit
            </button>
            <button
              onClick={delHandler}
              className=" rounded-md bg-red-600 px-4 py-1 capitalize"
            >
              delete
            </button>
          </div>
        </div>
      </div>

      <Overlay value={value} setClicked={setClicked} clicked={clicked} />
    </div>
  );
};

export default AdminCard;
