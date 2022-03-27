import React from "react";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdAssistantNavigation } from "react-icons/md";
import {BiHelpCircle} from "react-icons/bi";

function ProfileDropdownComponent() {
  return (
    <div>
      <div className="mx-auto w-fit h-fit">
        <img
          className="w-[150px] h-[150px]"
          alt="profile"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=Black&facialHairType=BeardMedium&facialHairColor=Black&clotheType=Overall&clotheColor=PastelYellow&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale"
        />
      </div>
      <div className="h-[1px] w-2/5 bg-gray-300 mx-auto my-5"></div>

      <div className="mx-auto w-fit h-fit text-lg">Mark</div>

      <div className="menu">
        <ul>
          <li className="flex gap-5 items-center">
            <CgProfile size={20} color="black" /> 
            Profile
          </li>
          <div className="h-[1px] w-2/5 bg-gray-300 mx-auto my-3"></div>
          <li className="flex gap-5 items-center">
            <FiSettings size={20} color="black" /> 
            Paramètres
          </li>
          <div className="h-[1px] w-2/5 bg-gray-300 mx-auto my-3"></div>
          <li className="flex gap-5 items-center">
            <MdAssistantNavigation size={20} color="black" />
            Navigation
          </li>
          <div className="h-[1px] w-2/5 bg-gray-300 mx-auto my-3"></div>
          <li className="flex gap-5 items-center">
            <BiHelpCircle size={20} color="black" />
            Aide
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileDropdownComponent;
