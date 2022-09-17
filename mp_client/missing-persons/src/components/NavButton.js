import React from "react";
import { useNavigate } from "react-router-dom";

function NavButton({isLoggedIn}){
  let loginRedirect = useNavigate();

  function handleAddItem(){
    isLoggedIn ? (
    loginRedirect("/item/add-new")
    ):(
      alert("Kindly login to report a missing person")
    )
  }


  return (
    <>
      <button type="button" onClick={handleAddItem} to="/item/add-new" className="inline-flex justify-center w-full items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:text-blue-900 hover:bg-white">
        Report a Missing Person Now 
      </button>
    </>
  )
}

export default NavButton;