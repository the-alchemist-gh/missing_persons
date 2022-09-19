import React,{useState} from "react";

function FoundButton({person, updatedItem}){
  const [foundState, setFoundState] = useState(person.found);
  const [personData, setPersonData] = useState({
    id:person.id,
    name: person.name,
    location:person.location,
    age:person.age,
    date_missing:person.date_missing,
    description: person.description,
    image: person.image,
    found: person.found,
    updated_at: new Date(),
    user_id: person.user_id
  });

  function handleClick(){
    console.log(foundState)
      setFoundState(!foundState)
      console.log(foundState)
      const newState = {
        id:personData.id,
        name: personData.name,
        location:personData.location,
        age:personData.age,
        date_missing:personData.date_missing,
        description: personData.description,
        image: personData.image,
        found: true,
        updated_at: new Date(),
        user_id: personData.user_id
      }
        fetch(`http://localhost:9292/missings/${personData.id}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newState),
          }) 
          .then(r=>r.json())
          .then(data=>{
            updatedItem(data)
            setPersonData(data)
            setFoundState(data.found)
          })
       
  }

  return (
    <>
      <button type="button" onClick={handleClick} className={`inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-900 bg-blue-900`}>
        Person Found
      </button>
    </>
  )
}

export default FoundButton;