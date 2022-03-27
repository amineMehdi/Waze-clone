import React, { useRef, useEffect } from "react";
import dropdownStyle from "./Dropdown.module.css";
import {AiOutlineCloseCircle} from "react-icons/ai";

function Dropdown({ children, dropdown, setDropdown }) {
  const dropdownRef = useRef();
  useEffect(() => {
    dropdownRef.current.classList.toggle(dropdownStyle.active, dropdown);
  }, [dropdown]);

  return (
    <div
      ref={dropdownRef}
      className={`${dropdownStyle.dropdown} absolute w-full h-2/3 p-5 z-20 bg-gray-100 bottom-0 rounded-t-3xl shadow-2xl`}
    >
      <div className="rounded-full w-10 h-1 bg-gray-500 mx-auto -translate-y-2">
      </div>
      <div className="absolute right-0 top-0 p-5 cursor-pointer">
        <AiOutlineCloseCircle size={30} color="black" onClick={() => setDropdown(false)}/>
      </div>
      {children}
    </div>
  );
}

export default Dropdown;
