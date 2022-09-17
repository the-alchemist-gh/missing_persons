import React from "react";
import { useNavigate } from "react-router-dom";

function NavButton({isLoggedIn}){
  let loginRedirect = useNavigate();

  function handleAddItem(){
    isLoggedIn ? (
    loginRedirect("/item/add-new")
    ):(
      alert("Kindly login to Add an Item")
    )
  }


  return (
    <>
      <button type="button" onClick={handleAddItem} to="/item/add-new" className="inline-flex justify-center w-full items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-teal-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        Add Item 
      </button>
    </>
  )
}

export default NavButton;