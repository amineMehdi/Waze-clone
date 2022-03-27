import React from 'react'
import {GiPoliceOfficerHead} from 'react-icons/gi'
import {FaCarCrash} from 'react-icons/fa';
import {VscArchive} from 'react-icons/vsc';
import {BsFillChatDotsFill} from 'react-icons/bs';

function CarDropdownCompnent() {
  const iconSize = 40;
  const iconStyle = 'p-3 mb-4 rounded-full bg-blue-400 shadow-sm cursor-pointer';
  return (
    <div className='grid gap-4 grid-cols-3 mt-3'>
      <div className='flex flex-col items-center'>
        <div className={iconStyle}>
          <GiPoliceOfficerHead size={iconSize} color='white'/>
        </div>
        <span>
          Police
        </span>
      </div>
      <div className='flex flex-col items-center'>
        <div className={iconStyle}>
          <FaCarCrash size={iconSize} color='white'/>
        </div>
        <span>
          Accident
        </span>
      </div>

      <div className='flex flex-col items-center'>
        <div className={iconStyle}>
          <VscArchive size={iconSize} color='white'/>
        </div>
        <span>
          Constat
        </span>
      </div>

      <div className='flex flex-col items-center'>
        <div className={iconStyle}>
          <BsFillChatDotsFill size={iconSize} color='white'/>
        </div>
        <span>
          Chat
        </span>
      </div>


    </div>
  )
}

export default CarDropdownCompnent