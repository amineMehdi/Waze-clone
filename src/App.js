import React, { useState } from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from './components/ThirdPage/ThirdPage';
import FourthPage from './components/FourthPage/FourthPage';
import FifthPage from './components/FifthPage/FifthPage';

function App() {
  const [page, setPage] = useState(0);
  const pageComponents = [<FirstPage />, <SecondPage />, <ThirdPage />, <FourthPage />, <FifthPage/>];
  
  const changePage = (page) => {
    setPage(Math.abs(page % pageComponents.length));
  };

  return (
    
    <div className="w-[415px] h-[690px] mx-auto mt-4 border rounded-3xl overflow-hidden z-auto">
      {/* {pageComponents[page]} */}
      {pageComponents[4]}
      <div className="absolute -translate-y-1/2 left-20 top-1/2 rounded-full bg-blue-logo p-5 cursor-pointer" onClick={() => changePage(page - 1)}>
        <AiOutlineArrowLeft fontSize={50}/>
      </div>
      <div className="absolute -translate-y-1/2 right-20 top-1/2 rounded-full bg-blue-logo p-5 cursor-pointer" onClick={() => changePage(page + 1)}>
        <AiOutlineArrowRight fontSize={50}/>
      </div>
    </div>
  );
}

export default App;
