import React,{useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import NavButton from "./NavButton";

function Header({isLoggedIn}){

    return (
        <>
            <div className="pt-5 flex justify-center " id="banner-section">
                <div className="pt-10 mt-10">
                    <h1 className="text-white font-bold text-2xl mb-3">
                    Report your missing loved ones, let's help you find them.
                </h1>
                <NavButton isLoggedIn={isLoggedIn} />
                </div>
                
            </div>
        
        </>
    )
}

export default Header