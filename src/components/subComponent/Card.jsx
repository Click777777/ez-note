import React, { useState } from "react";

const Card = ({ value }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="w-full">
      <img
        src="https://jobsdigit.com/wp-content/uploads/2021/12/BCom-Course-Details.png"
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
