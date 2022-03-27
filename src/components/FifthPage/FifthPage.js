import React, {useState} from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import {BsPlusCircle} from 'react-icons/bs';
import {MdKeyboardVoice} from 'react-icons/md';

import DefMessageComponent from './DefMessageComponent';
import Dropdown from "../ThirdPage/Dropdown";

function FifthPage() {
  const [dropdownComponent, setDropdownComponent] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  const toggleDropDownComponent = (component) => {
    setDropdown(!dropdown);
    setDropdownComponent(component);
  };
  const otherUserImage = (
    <img
      className="w-[50px] h-[50px]"
      alt="profile"
      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
    />
  );

  const userImage = (
    <img
      className="w-[50px] h-[50px]"
      alt="profile"
      src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=Black&facialHairType=BeardMedium&facialHairColor=Black&clotheType=Overall&clotheColor=PastelYellow&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale"
    />
  );

  return (
    <div className="relative w-full h-full">
      <div className="banner shadow-md px-3 py-1 flex items-center">
        <div>
          <BsArrowLeft size={30} />
        </div>
        <div className="flex flex-col gap-2 w-fit h-fit items-center mx-auto">
          {otherUserImage}
          <div>Alice</div>
        </div>
        <div>
          <BsThreeDotsVertical size={20} />
        </div>
      </div>

      <div className="chat mt-4">
        <ChatBubble image={userImage} message="Bonjour" direction="left" />
        <ChatBubble image={otherUserImage} message="Bonjour" direction="right" />
        <ChatBubble image={userImage} message="Vous avez un probléme dans votre voiture" direction="left" />
      </div>

      <div className="grid grid-cols-message-column absolute shadow-md w-full p-3 bottom-0">
        <div 
        className="flex justify-center items-center cursor-pointer"
        onClick={() => toggleDropDownComponent(<DefMessageComponent/>)}>
        <BsPlusCircle size={30} color="black" />

        </div>

        <div className="flex justify-center items-center px-4">
          <input type="text w-full" 
          className="block w-full pl-10 pr-12 sm:text-s rounded-full border shadow-md h-12 border-gray-300 focus:outline-none focus:shadow-outline"            
          placeholder="Ecrivez votre message"
          />
        </div>

        <div className="flex justify-center items-center cursor-pointer">
          <MdKeyboardVoice size={30} color="black" />
        </div>
      </div>
      <Dropdown dropdown={dropdown} setDropdown={setDropdown}>
        {dropdownComponent}
      </Dropdown>
    </div>
  );
}

function ChatBubble({ image, message, direction }) {
  if (direction === "right") {
    return (
      <div className="inline-grid grid-cols-chat-column w-full mx-4 mb-3">
        <div className="flex justify-center items-center">{image}</div>
        <div className="col-span-2 flex justify-start">
          <div className="w-fit h-full p-3 px-5 bg-gray-400 text-white rounded-r-2xl rounded-tl-2xl shadow-md">
            {message}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="inline-grid grid-cols-chat-column w-full mx-4 mb-3">
        <div className="col-span-2 flex justify-end">
          <div className="w-fit h-full p-3 px-5 bg-blue-500 text-white rounded-l-2xl rounded-tr-2xl shadow-md">
            {message}
          </div>
        </div>
        <div className="flex justify-center items-center">{image}</div>
      </div>
    )
  }
}
export default FifthPage;
