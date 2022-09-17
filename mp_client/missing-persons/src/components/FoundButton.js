import React from "react";

function FoundButton(name,found){
  return (
    <>
      <button type="button" className={`inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-900 bg-teal-600`}>
        {
          found===true ? `has been found` : `User Found`
        }
      </button>
    </>
  )
}

export default FoundButton;