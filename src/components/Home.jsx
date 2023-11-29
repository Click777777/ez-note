import React, { useContext } from "react";
import Card from "./subComponent/Card";
import { Context } from "../contexts/CourseContext";

const Home = () => {
  const { state } = useContext(Context);
  return (
    <div className="xs:px-6 480px:px-16 px-4 py-6">
      <div className="grid w-full grid-cols-12 gap-y-14 sm:gap-x-12 ">
        {state.map((i) => (
          <div
            key={i.id}
            className=" 3xl:col-span-2 col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
          >
            <Card value={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
