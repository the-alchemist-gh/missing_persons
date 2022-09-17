import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login({confirmLogin}){
  let homeRedirect = useNavigate();
  const [loginDataState, setLoginDataState] = useState({
    email: "",
    password: ""
  });

  function handleChange(e){
    setLoginDataState({
      ...loginDataState,
      [e.target.name]: e.target.value
    });
  }

  function handleFormSubmit(e){
    e.preventDefault();

    // get request to get all users
    fetch("http://localhost:9292/users")
      .then(r=> r.json())
      .then((data)=>{

        const newLogInData = {
          email: loginDataState.email,
          password: loginDataState.password
        };
        setLoginDataState(newLogInData);
        data.map(userData=>{
          if(userData.email === loginDataState.email){
            if(userData.password === loginDataState.password ){
              confirmLogin(true, userData.name, userData.id)
              return homeRedirect("/");
            } else{
              return console.log("wrong password")
            };
          } else {
            return console.log("wrong email")
          }

        });

      })

  }

  return (
    <>
      <div className="flex items-center justify-center content-center bg-gray-100">
            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
              <div className="mt-6 text-1xl bg-red-100 rounded-md border-2 border-red-600 text-red-600 text-center">
                  Can't go through the signup hustle? Login with the test credentials below<br></br>
                <p>Email: <span className="font-bold">ibrahim@gmail.com</span></p>
                <p>Password: <span className="font-bold">ibrahim</span></p>
              </div>
              <h3 className="text-2xl mt-2 font-bold text-center text-blue-900">Login</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="mt-4">
                  <div className="mt-4">
                    <label className="block" for="email">Email</label>
                    <input type="text" placeholder="Email" name="email" onChange={handleChange}  value={loginDataState.email} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                  <div className="mt-4">
                    <label className="block">Password</label>
                      <input type="password" placeholder="Password" name="password" onChange={handleChange}  value={loginDataState.password}  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                      <span className="text-xs text-gray-400">Forgot Password?</span>
                  </div>
                  <div className="flex">
                    <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-gray-500">Login</button>
                  </div>
                  <div className="mt-6 text-grey-dark">
                    Don't have an account yet? <span> 
                      <NavLink className="text-blue-900 text-bold hover:underline" to="/register">
                        Register Now
                      </NavLink>
                    </span>
                    
                  </div>
                  <div className="mt-6 text-grey-dark">
                    Go back to <span> 
                      <NavLink className="text-blue-900 hover:underline" to="/">
                        HomePage
                      </NavLink>
                    </span>
                    
                  </div>
                </div>
              </form>
            </div>
      </div>
    </>
  )
}

export default Login