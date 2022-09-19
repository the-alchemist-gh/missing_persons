import React, { useState } from "react";

function EditComment({ id, body,user, missing, onUpdateComment,  }) {
  const [updateCommentFormData, setUpdateCommentFormData] = useState({
    comments: body,
    missing_id: missing,
    user_id: user,
    updated_at: new Date()
    
  });

  function handleChange(e){
    setUpdateCommentFormData({
      ...updateCommentFormData,
      [e.target.name]: e.target.value
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const newUpdateData = {
        comments: updateCommentFormData.comments,
        missing_id: updateCommentFormData.missing_id,
        user_id: updateCommentFormData.user_id,
        updated_at: new Date()
    }
    fetch(`http://localhost:9292/last_seens/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUpdateData),
    })
      .then((r) => r.json())
      .then((updatedComment) => onUpdateComment(updatedComment));
  }

  return (
    <form onSubmit={handleFormSubmit}>
        <div>
        <div>
            <input id="comments" rows="2" name="comments" onChange={handleChange}  value={updateCommentFormData.comments} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-100"></input>
        </div>
        <div className="flex">
            <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-gray-500">Save</button>
        </div>
        </div>
    </form>
  );
}

export default EditComment;
