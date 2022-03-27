import React from "react";
import logo from "../../assets/images/logo.png";
import map from "../../assets/images/map.png";
import { FcGoogle } from "react-icons/fc";
import { FiFacebook } from "react-icons/fi";

function SecondPage({ changePage }) {
  return (
    <div className="w-full h-full relative">
      <div className="w-fit absolute left-1/2 -translate-x-1/2 top-[15%] z-10">
        <img src={logo} alt="logo" className="w-[150px] h-[150px]" />
      </div>
      <div className="w-full h-full relative">
        <img src={map} alt="map" className="w-[100%] h-[100%] z-0 object-cover" />
        <div className="w-full h-full absolute z-1 top-0 bg-opacity-60 bg-blue-logo"></div>
      </div>
      <div className="w-[70%] absolute left-[50%] top-[50%] -translate-x-1/2 flex justify-center items-center flex-col gap-4">
        <button className=" w-full rounded-full flex gap-4 py-2 px-4 items-center text-black bg-white ">
          <FcGoogle fontSize={30} /> Se connecter avec Google
        </button>
        <button className="w-full rounded-full flex gap-4 py-2 px-4 items-center bg-blue-400 text-white ">
          <FiFacebook fontSize={30} fill={"blue"} stroke={"none"} /> Se connecter avec Facebook
        </button>
        <button className="rounded-full flex gap-4 py-2 px-6 items-center bg-black text-white ">
          S'inscrire
        </button>
      </div>

      <div className="absolute bottom-0 w-full bg-white rounded-t-lg p-4 text-center">
        <div className="bg-gray-300 w-20 h-2 mx-auto rounded-xl"></div>
        <h2 className="mt-3">Deja Client ?</h2>
        <br/>
        <button className=" text-black bg-blue-logo rounded-full px-4 py-2">Connectez-vous</button>
      </div>
    </div>
  );
}

export default SecondPage;
