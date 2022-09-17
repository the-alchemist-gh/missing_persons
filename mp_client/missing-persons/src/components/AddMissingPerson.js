import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NewItem({getFormData}){
  let navigate = useNavigate();
  const [itemFormData, setItemFormData] = useState({
    name: "",
    category:"",
    description: "",
    image_url: "",
    likes: 0,
    views: 0,
    needs: [],
    type: "swap",
    date_published: new Date()
  });

  function handleChange(e){
    setItemFormData({
      ...itemFormData,
      [e.target.name]: e.target.value
    });
  }

  function handleCheckChange(e){
    setItemFormData({
      ...itemFormData,
      [e.target.name]: !e.target.checked?"swap":"free"
    });
  } 

  function handleSubmit(e){
    e.preventDefault();
    const newFormData = {
      name: itemFormData.name,
      category:itemFormData.category,
      description: itemFormData.description,
      image_url: itemFormData.image_url,
      likes: 0,
      views: 0,
      needs: itemFormData.needs.split(','),
      type: itemFormData.type,
      date_published: itemFormData.date_published
    } 
    setItemFormData(newFormData);
    fetch("https://swapup-api.herokuapp.com/swaps",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newFormData),
    })
    .then(r=>r.json())
    .then(data=>{
      
      getFormData(data)
      navigate(`/item/${data.category}/${data.id}`)    
    })
  }


  return (
    <>
          <div className="flex items-center justify-center content-center bg-gray-100">
            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
              <div className="flex justify-between text-teal-600">
                <h3 className="text-2xl font-bold text-center text-teal-600">Swap/Give away a new Item</h3>
                <NavLink to="/" className="text-xs flex text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Cancel</NavLink>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <div>
                    <label className="block" for="Name">Name of Item</label>
                    <input type="text" required placeholder="Name of Item" name="name" onChange={handleChange}  value={itemFormData.name} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1"/>
                  </div>
                  <div className="mt-4">
                    <label for="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select the item category</label>
                    <select id="categories" required defaultValue="Select an Item" name="category" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="">Select an Item</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Home">Home</option>
                      <option value="Books">Books</option>
                      <option value="Services">Services</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Item Description</label>
                    <textarea id="description" rows="3" name="description" onChange={handleChange}  value={itemFormData.description} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg, Bought this 3months but I don't use it anymore..."></textarea>
                  </div>
                  <div className="mt-4">
                    <label for="default-toggle" className="inline-flex relative items-center mb-4 cursor-pointer">
                      <input type="checkbox" onChange={handleCheckChange} name="type" id="default-toggle" className="sr-only peer" value="swap"/>
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Give Away for Free</span>
                    </label>
                  </div>
                  <div className="mt-4">
                    <label for="itemswap" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">What do you want for this Item?</label>
                    <textarea id="item-swap" rows="2" name="needs" onChange={handleChange}  value={itemFormData.needs} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. Book,Lamp,Watch"></textarea>
                    <span className="text-xs text-gray-400">Enter Items separated by Comma. Eg. Book,Lamp,Watch</span>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="w-3/5">
                      <label className="block" for="Image_url">Item Image Url</label>
                      <input type="text" name="image_url" onChange={handleChange}  value={itemFormData.image_url} placeholder="Kindly enter image url" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1"/>
                      <span className="text-xs text-gray-400">Enter the full url to the image of the item.</span>
                    </div>
                    <div className="w-2/5 ml-2 relative rounded-md border-dashed h-24 border-2">
                      {
                        itemFormData.image_url !== "" ? <img className="h-full w-full rounded-md object-cover" src={itemFormData.image_url} alt={itemFormData.name} /> : null
                      }
                      
                    </div>
                    
                  </div>
                  <div className="flex">
                    <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-gray-500">Add Item Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
    </>
  )
}

export default NewItem