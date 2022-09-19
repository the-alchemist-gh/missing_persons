import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Comments from "./Comments";


function PersonDetails({updatedItem, onUpdateComment, getCommentFormData, commentData, logInId, isLoggedIn}){
  const [personDetail, setPersonDetail] = useState({});
  const [commentDetail, setCommentDetail] = useState([]);

  const { id } = useParams();
  const [commentFormData, setCommentFormData] = useState({
    comments: "",
    missing_id: id,
    user_id: logInId,
    created_at: new Date()
    
  });

  
  

  

  useEffect(() => {

      fetch(`http://localhost:9292/missings/${id}`)
      .then(r => r.json())
      .then(data => {
        setPersonDetail(data);
      })

    const newCommentData = commentData.filter((comment) => comment.missing_id === parseInt(id));
    setCommentDetail(newCommentData);
  }, [commentData, id]);

  
  function handleDeleteComment(id) {
    const updatedComment = commentDetail.filter((comments) => comments.id !== id);
    setCommentDetail(updatedComment);
  }

  function handleUpdateComment(commentsObj){
    const updatedComment = commentDetail.map((comment) => {
      if (comment.id === commentsObj.id) {
        return commentsObj;
      } else {
        return comment;
      }
    });
    setCommentDetail(updatedComment);
  }
  
  function handleChange(e){
    setCommentFormData({
      ...commentFormData,
      [e.target.name]: e.target.value
    });
  }


  function handleSubmit(e){
    e.preventDefault();
    if (isLoggedIn){
      const newFormData = {
        comments: commentFormData.comments,
        missing_id: commentFormData.missing_id,
        user_id: commentFormData.user_id,
        created_at: new Date()
      } 
      setCommentFormData(newFormData);
      fetch("http://localhost:9292/last_seens",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(newFormData),
      })
      .then(r=>r.json())
      .then(data=>{
        getCommentFormData(data)
        setCommentFormData({
          comments: "",
          missing_id: id,
          user_id: logInId,
          created_at: new Date()
        })
        // navigate(`/person/${data.missing.location}/${data.missing_id}`)
      })
    } else {
      alert("Kindly log in to add a comment")
    }
    
  }

  const timestamp = new Date(personDetail.date_missing).toLocaleDateString('en-US');


  
  

  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <div className="max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="py-10 lg:pt-6 lg:col-start-1 lg:col-span-2 lg:border-gray-200 lg:pr-8 relative">
              <img src={personDetail.image} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full rounded-md object-center object-cover"/>
            </div>

            <div className="py-10 lg:pt-6 lg:pr-8">
              {/* <!-- Description and details --> */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{personDetail.name}
                  <span className="ml-4 text-gray-400 text-xs font-medium ">{personDetail.age} years</span>
                  </h1>
                  
                  <p className="text-base text-gray-900">{personDetail.description}</p>
                </div>
              </div>
              <div className="mt-10 pb-3 border-b">
                <ul className="flex justify-between text-xs">
                  <li className="text-gray-400 font-medium "><span>Got missen at  {personDetail.location} on {timestamp}</span></li>
                </ul>
              </div>
              <div className="border-b pb-3 mb-3">
                <form onSubmit={handleSubmit}>
                  <div>
                    <div>
                      <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Have you sighted or have an info on {personDetail.name}, Post your info below: </label>
                        <textarea id="comments" rows="3" name="comments" onChange={handleChange}  value={commentFormData.comments} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-100" placeholder="Eg, I last saw this person at Madina with a lady"></textarea>
                    </div>
                    <div className="flex">
                      <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-gray-500">Post Comment</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="mt-3 flex grid justify-items-stretch">
              {
          
                commentDetail?.map(comments1 => (
                  <Comments key={comments1.id} comments1={comments1} isLoggedIn={isLoggedIn} logInId={logInId} onUpdateComment = {handleUpdateComment} onCommentDelete={handleDeleteComment} />
                  

                ))
              }
              </div>
            </div>

          </div>

          
        </div>
      </div>

    </>
  )
}

export default PersonDetails;