import React, { useEffect, useState } from "react";
import { useParams,NavLink } from "react-router-dom";
import OfferButton from "./Comments";
import offerError from "../assets/404.gif";

function ItemDetails({updatedItem, offerData}){
  const [itemDetail, setItemDetail] = useState({});
  const [offerDetail, setOfferDetail] = useState([]);
  const [showOffer, setShowOffer] = useState(false);

  const { id } = useParams();

  useEffect(() => {

      fetch(`https://swapup-api.herokuapp.com/swaps/${id}`)
      .then(r => r.json())
      .then(data => {
        setItemDetail(data);
        
        fetch(`https://swapup-api.herokuapp.com/swaps/${id}`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            views: (data.views+1) ,
          }),
        })
        .then(r=>r.json())
        .then(data2=>{
          // console.log(data2);
          setItemDetail(data2);
        });
        
      })
  }, [id]);

  // if(itemDetail){
  //   updatedItem(itemDetail)
  // };

  function handleLikeBtn(){
    fetch(`https://swapup-api.herokuapp.com/swaps/${id}`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            likes :(itemDetail.likes +1 ),
          }),
        })
        .then(r=>r.json())
        .then(data3=>{
          updatedItem(data3);
          setItemDetail(data3);
        }
        
        )
  }
  
  function handleShowOffer(){
    const newOfferData = offerData.filter((offer) => {
        return (offer.offerFor=== parseInt(id));
  })
  setOfferDetail(newOfferData);

    setShowOffer(showOffer=>!showOffer)
  }


  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <NavLink to="/" className="mr-2 text-sm font-medium text-gray-900"> Homepage </NavLink>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <p className="mr-2 text-sm font-medium text-gray-300"> {itemDetail.category} </p>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <NavLink to={`/item/${itemDetail.id}`} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{itemDetail.name}</NavLink>
              </li>
            </ol>
          </nav>

          <div className="max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="py-10 lg:pt-6 lg:col-start-1 lg:col-span-2 lg:border-gray-200 lg:pr-8 relative">
              <img src={itemDetail.image_url} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full rounded-md object-center object-cover"/>
            </div>

            <div className="py-10 lg:pt-6 lg:pr-8">
              {/* <!-- Description and details --> */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{itemDetail.name}</h1>
                  <p className="text-base text-gray-900">{itemDetail.description}</p>
                </div>
              </div>
              <div className="mt-10">
                <ul className="flex justify-between text-xs">
                  <li className="text-gray-400 font-medium "><span>Category : {itemDetail.category}</span></li>
                </ul>
                <div className="mt-4">
                  <ul className="flex text-xs justify-between">
                    <li className="text-gray-400 py-2 font-medium">
                      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        {
                          itemDetail.type === "free" ? "Get Item for Free" : "Up for Swap"
                        }
                      </span>
                    </li>
                    <li className="text-gray-400 font-medium"><span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {itemDetail.views} views</span></li>
                    <li className="text-gray-400 font-medium" onClick={handleLikeBtn}><span>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mx-1 text-red-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {itemDetail.likes} Likes</span>
                    </li>                    
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">What I need for this Item</h2>
                <div className="mt-4">
                    {itemDetail.needs?
                      itemDetail.needs.map((need,index)=>(
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2">{need}</span>
                      )) : null
                    }
                </div>
              </div>
              <div className="mt-10 flex grid justify-items-stretch">
                <OfferButton />
              </div>
            </div>

          </div>

          {/* <!-- Offer info --> */}
          <div className="max-w-2xl mx-auto pb-1 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="w-full rounded-md my-4">
              <div className="rounded-md">
                  <div onClick={handleShowOffer} className="flex justify-between border border-b-0 bg-gray-100 text-teal-600 px-10 py-4" id="headingOne">
                      <h4 className="font-medium" >
                      View Offers
                      </h4>
                      {
                        !showOffer ? 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          : 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                      }
                  </div>
                  {
                    showOffer ? 

                    <div className="border px-4 py-4">
                      {
                        offerDetail.length>0 ? 
                        (
                          offerDetail.map((gOffer)=>(
                            <div key={gOffer.id} className="flex py-2 border-b">
                              <div className="relative md:h-60 w-1/3">
                                <img className="w-full h-full rounded-md object-center object-cover" src={gOffer.offerImage} alt={gOffer.offerName}/>
                              </div>
                              <div className="ml-5 flex flex-col justify-between">
                                <div>
                                  <p className="mr-2 text-gray-600 font-medium " >{gOffer.offerName}</p>
                                  <p>{gOffer.offerDisc}</p>
                                </div>
                                <div className="flex justify-between">
                                  <button type="button" className="inline-flex justify-center items-center px-4 mr-5 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-600 bg-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mr-1 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                    Deny
                                  </button>
                                  <button type="button" className={`inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-teal-900 bg-teal-500`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                                    </svg>
                                    Accept
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        )
                        :
                        (
                          <div className="flex py-2 border-b">
                              <div className="relative md:h-60 w-1/3">
                                <img className="w-full h-full rounded-md object-center object-cover" src={offerError} alt="offer error"/>
                              </div>
                              <div className="flex flex-col justify-between">
                                <div>
                                  <h1 className="mb-8 mr-2 text-red-600 text-3xl font-medium " >No Offers Yet, Be the first to make an Offer</h1>
                                  
                                  <OfferButton />
                                </div>
                              </div>
                            </div>
                        )
                      }
                      
                    </div>
                    : null
                  }
                  
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ItemDetails;