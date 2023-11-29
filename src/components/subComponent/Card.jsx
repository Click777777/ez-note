import React, { useState } from "react";

const Card = ({ value }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="w-full ">
      <img
        src="https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png"
        alt="image Error"
        className=" rounded-lg"
      />
      <h1 className=" mb-2 mt-6 text-2xl font-medium uppercase text-gold">
        {value.title}
      </h1>
      <p
        onClick={() => setExpanded(!expanded)}
        className={` cursor-pointer  ${
          expanded ? "line-clamp-none" : "line-clamp-4"
        }`}
      >
        {value.description}
      </p>
    </div>
  );
};

export default Card;
