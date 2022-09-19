import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NewPerson({getFormData, logInId}){
  let navigate = useNavigate();
  const [personFormData, setPersonFormData] = useState({
    name: "",
    location:"",
    age:"",
    date_missing:"",
    description: "",
    image: "",
    found: false,
    created_at: new Date(),
    user_id: logInId
  });

  function handleChange(e){
    setPersonFormData({
      ...personFormData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    const newFormData = {
      name: personFormData.name,
      location: personFormData.location,
      age: personFormData.age,
      date_missing: personFormData.date_missing,
      description: personFormData.description,
      image: personFormData.image,
      found:false,
      created_at: personFormData.created_at,
      user_id: personFormData.user_id
    } 
    setPersonFormData(newFormData);
    fetch("http://localhost:9292/missings",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newFormData),
    })
    .then(r=>r.json())
    .then(data=>{
      getFormData(data)
      navigate(`/person/${data.location}/${data.id}`)    
    })
  }

 
  return (
    <>
          <div className="flex items-center justify-center content-center bg-gray-100">
            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
              <div className="flex justify-between text-teal-600">
                <h3 className="text-2xl font-bold text-center text-blue-900">Report a missing person</h3>
                <NavLink to="/" className="text-xs flex text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Cancel</NavLink>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <div>
                    <label className="block" for="Name">Full Name</label>
                    <input type="text" required placeholder="John Doe" name="name" onChange={handleChange}  value={personFormData.name} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1"/>
                  </div>
                  <div className="mt-4">
                    <label className="block" for="Name">How old is this person</label>
                    <input type="number" required placeholder="Age of the missing person" name="age" min="1" onChange={handleChange}  value={personFormData.age} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1"/>
                  </div>
                  <div className="mt-4">
                    <label className="block" for="Name">When did you last see this person?</label>
                    <input type="date" required placeholder="Date person went missen" name="date_missing" onChange={handleChange}  value={personFormData.date_missing} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1"/>
                  </div>
                  <div className="mt-4">
                    <label for="locations" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Where did you last see this person</label>
                    <select id="categories" required defaultValue="Select location" name="location" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option value="">Select location</option>
                      <option value="Adenta">Adenta</option>
                      <option value="Madina">Madina</option>
                      <option value="Lapaz">Lapaz</option>
                      <option value="Achimota">Achimota</option>
                      <option value="Accra">Accra</option>
                      <option value="Accra">Tema</option>
                      <option value="Accra">Kumasi</option>
                      <option value="Accra">Cape Coast</option>
                    </select>
                  </div>  
                  <div className="mt-4">
                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Describe the missing person</label>
                    <textarea id="description" rows="3" name="description" onChange={handleChange}  value={personFormData.description} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Eg, Very skinny, was wearing a black long dress"></textarea>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="w-3/5">
                      <label className="block" for="Image">Person's Image</label>
                      <input type="text" name="image" onChange={handleChange}  value={personFormData.image} placeholder="Kindly enter image url" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1"/>
                      <span className="text-xs text-gray-400">Enter the full url of the image.</span>
                    </div>
                    <div className="w-2/5 ml-2 relative rounded-md border-dashed h-24 border-2">
                      {
                        personFormData.image !== "" ? <img className="h-full w-full rounded-md object-cover" src={personFormData.image} alt={personFormData.name} /> : null
                      }
                      
                    </div>
                    
                  </div>
                  <div className="flex">
                    <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-gray-500">Add Missing Person Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
    </>
  ) 
}

export default NewPerson