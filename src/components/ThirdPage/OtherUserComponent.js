import React from 'react'
import {BsFillChatDotsFill} from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";

function OtherUserComponent() {
  const menuItemsStyle = 'flex gap-5 items-center cursor-pointer';
  return (
    <div>
      <div className='w-fit mx-auto'>
      <img className='w-[150px] h-[150px]'
      alt="profile" 
      src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
      </div>

      <div className="h-[1px] w-2/5 bg-gray-300 mx-auto my-5"></div>

      <div className='mx-auto w-fit'>
        Alice
      </div>

      <div className="menu">
        <ul>
          <li className={menuItemsStyle}>
            <CgProfile size={20} color="black" /> 
            Profile
          </li>
          <div className="h-[1px] w-2/5 bg-gray-300 mx-auto my-3"></div>
          <li className={menuItemsStyle}>
            <BsFillChatDotsFill size={20} color="black" /> 
            Contacter l'utilisateur
          </li>
        </ul>
      </div>

    </div>
  )
}

export default OtherUserComponent