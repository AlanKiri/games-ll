import React, { useState } from "react";

interface IPickelement {
  title: string;
  buttons: string[];
}

const Pickelement = ({ title, buttons }: IPickelement) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="bg-red-800 flex rounded-2xl  "
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
    >
      <div className="bg-red-600 rounded-2xl px-2 py-3">
        <button>{title}</button>
      </div>
      <div className={`${isActive ? "flex" : "hidden"} flex gap-3 mx-3`}>
        {buttons.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Pickelement;
