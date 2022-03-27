import React, { useState } from "react";
import MapComponent from "./MapComponent";
import Dropdown from "./Dropdown";

import { AiOutlinePlusCircle, AiFillCar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import {MdPlace} from 'react-icons/md';

import ProfileDropdownComponent from "./ProfileDropdownComponent";
import CarDropdownCompnent from "./CarDropdownCompnent";

function ThirdPage() {
  const navMenuItem = "bg-blue-logo p-4 rounded-full cursor-pointer";
  const iconSize = 40;
  const iconColor = "#fff";
  const [dropdown, setDropdown] = useState(false);
  const [dropDownComponent, setDropDownComponent] = useState(null);

  const toggleDropDownComponent = (component) => {
    setDropdown(!dropdown);
    setDropDownComponent(component);
  };
  return (
    <div className="w-full h-full relative">
      <div className="search p-4 relative h-fit bg-transparent z-10">
        <div className="absolute inset-y-0 left-4 pl-3 flex items-center pointer-events-none">
          <BiSearchAlt size={20} color="black" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-12 sm:text-s rounded-lg border shadow-md h-12 border-gray-300 focus:outline-none focus:shadow-outline"
          placeholder="Search here"
        />
        <div className="absolute right-7 inset-y-0 flex items-center cursor-pointer">
          <BsThreeDots size={30} color="black" />
        </div>
      </div>
      <div className="bar-bottom w-full absolute bottom-0 p-4 z-20">
        <ul className="flex flex-row justify-between">
          <li
            className={navMenuItem}
            onClick={() => toggleDropDownComponent(<CarDropdownCompnent />)}
          >
            <span>
              <AiFillCar fontSize={iconSize} color={iconColor} />
            </span>
          </li>
          <li className={navMenuItem}>
            <span>
              <MdPlace fontSize={iconSize} color={iconColor} />
            </span>
          </li>
          <li
            className={navMenuItem}
            onClick={() =>
              toggleDropDownComponent(<ProfileDropdownComponent />)
            }
          >
            <span>
              <CgProfile fontSize={iconSize - 2} color={iconColor} />
            </span>
          </li>
        </ul>
      </div>
      <div
        className="w-full h-full absolute top-0 z-0"
      >
        <MapComponent
          dropdown={dropdown}
          setDropdown={setDropdown}
          dropDownComponent={dropDownComponent}
          setDropDownComponent={setDropDownComponent}
          toggleDropDownComponent={toggleDropDownComponent}
        />
      </div>
      <Dropdown dropdown={dropdown} setDropdown={setDropdown}>
        {dropDownComponent}
      </Dropdown>
    </div>
  );
}

export default ThirdPage;
