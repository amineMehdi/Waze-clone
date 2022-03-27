import React from "react";
import logo from "../../assets/images/logo.png";
import Spinner from "./Spinner";

function FirstPage() {
  return (
    <div className="w-full h-full bg-blue-logo">
      <div className="w-fit absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
        <img src={logo} alt="logo" className="w-[150px] h-[150px]" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[60%]">
        <Spinner color="#000" width={3}/>
      </div>

    </div>
  );
}

export default FirstPage;
