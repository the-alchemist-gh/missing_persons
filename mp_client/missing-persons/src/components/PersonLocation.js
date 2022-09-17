import React from "react";

function ItemCategory({sendCategoryValue}){

  function handleClick(e){
    let btn = e.target.id;
    const btnElement = e.target.parentElement.children;
    for(let i=0; i<btnElement.length; i++){
      btnElement[i].className="inline-flex justify-center items-center px-4 py-2 mx-2 border border-transparent rounded-full shadow-sm text-sm font-medium bg-gray-200 focus:bg-black focus:text-white hover:bg-slate-500 hover:text-white";
    }

    e.target.className= "inline-flex justify-center items-center px-4 py-2 mx-2 border border-transparent rounded-full shadow-sm text-sm font-medium bg-black text-white hover:bg-black hover:text-white";
    sendCategoryValue(btn);
  }

  return (
    <>
        <div className="w-full px-8 border-b border-gray-200 py-4 justify-center">
          <div className="flex flex-nowrap overflow-x-auto md:justify-center">
            <button type="button" id="All" onClick={handleClick} className="inline-flex justify-center items-center px-4 py-2 mx-2 border border-transparent rounded-full shadow-sm text-sm font-medium bg-gray-200 focus:bg-black focus:text-white hover:bg-slate-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              All
            </button>
            <button type="button" onClick={handleClick} id="Clothing" className="inline-flex justify-center items-center px-4 py-2 mx-2 border border-transparent rounded-full shadow-sm text-sm font-medium bg-gray-200 focus:bg-black focus:text-white hover:bg-slate-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
              Clothing
            </button>
            <button type="button" onClick={handleClick} id="Electronics" className="inline-flex justify-center items-center px-4 py-2 mx-2 border border-transparent rounded-full shadow-sm text-sm font-medium bg-gray-200 focus:bg-black focus:text-white hover:bg-slate-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
              </svg>
              Electronics
            </button>
            <button type="button" onClick={handleClick} id="Home" className="inline-flex justify-center items-center px-4 py-2 mx-2 border border-transparent rounded-full shadow-sm text-sm font-medium bg-gray-200 focus:bg-black focus:text-white hover:bg-slate-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </button>
            <button type="button" onClick={handleClick} id="Books" className="inline-flex justify-center items-center px-4 py-2 mx-2 border border-transparent rounded-full shadow-sm text-sm font-medium bg-gray-200 focus:bg-black focus:text-white hover:bg-slate-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Books
            </button>
            <button type="button" onClick={handleClick} id="Services" className="inline-flex justify-center items-center px-4 py-2 mx-2 border border-transparent rounded-full shadow-sm text-sm font-medium bg-gray-200 focus:bg-black focus:text-white hover:bg-slate-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              Services
            </button>
          </div>
        </div> 
    </>
  );
}

export default ItemCategory;