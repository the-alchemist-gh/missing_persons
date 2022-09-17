import React,{useState,} from "react";
import { NavLink } from "react-router-dom";
import FoundButton from "./FoundButton";


function Item({isLoggedIn, items, updatedItem, offerData, logInId}){
  const {id,name,description,category,image,location,age,date_missing,found,last_seens, user_id} = items;
  // const [likeState, setLikeState] = useState(likes);
  // const [productUpdateState, setProductUpdateState] = useState({});
  const [btnIcon, setBtnIcon] = useState(false);

  // function handleClick(){
  //   if(isLoggedIn){
  //     setBtnIcon(btnIcon=>!btnIcon)
  //     if(!btnIcon){
  //       fetch(`https://swapup-api.herokuapp.com/swaps/${id}`,{
  //           method: "PATCH",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             likes: (likeState + 1) ,
  //           }),
  //         }) 
  //         .then(r=>r.json())
  //         .then(data=>{
  //           updatedItem(data)
  //           setLikeState(data.likes)
  //         })
  //     } else {
  //       fetch(`https://swapup-api.herokuapp.com/swaps/${id}`,{
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           likes: (likeState - 1) ,
  //         }),
  //       }) 
  //       .then(r=>r.json())
  //       .then(data=>{
  //         updatedItem(data)
  //         setLikeState(data.likes)
  //       })
  //     }
  //   } else {
  //     alert("Kindly login to Like an Item")
  //   }    
  // }

  return (
    <>
      {/* Individual Card for missing person */}
      <div className="max-w-md bg-white rounded overflow-visible shadow-lg">
        <div className="h-3/5 card-image-layer relative" >
          <img className="h-full w-full object-cover" src={image} alt={name}/>
        </div>
        <div className="py-4 border-b mx-6">
          <div className="font-bold text-xl mb-2"><NavLink to={`/person/${location}/${id}`}>{name}</NavLink>
          <span className="ml-2 text-gray-400 text-xs font-medium ">{age} years</span>
          <p className="mt-2 text-gray-500 text-sm font-medium ">{location}</p>
          </div>

          <p className="text-gray-700 text-base">
            {description}
            
          </p>
          <p className="  bg-red-200 text-red-800 text-xs px-2 inline-block rounded-full font-semibold tracking-wide">
              went missing on {date_missing}
          </p>
        </div>
        <div className="mx-6 pt-4 pb-2 flex justify-between">
          {/* Handle comment count */}
          <div>

              {
                isNaN(last_seens.length) ? 
                <h6 className="flex leading-none align-middle text-grey-700 items-center font-semibold text-sm">
                  No offers yet
                </h6>
                   : 
                    <h6 className="flex leading-none align-middle text-gray-700 bg-gray-100 px-2 py-1 rounded-md items-center font-semibold text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
</svg>
                      {
                        last_seens.length === 1 ? `${last_seens.length} Comment` : 
                        `${last_seens.length} Comments` 
                     }
                </h6>
              }
          </div>
          {
            isLoggedIn ? (

              logInId===user_id ? (
                <FoundButton found={found} name={name} />
              ):null

            ) : (
              null
            )
          }
          
          
        </div>
      </div>

    </>
  )
}

export default Item;