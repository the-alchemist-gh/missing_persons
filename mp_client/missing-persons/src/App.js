import React,{useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import ItemList from "./components/PersonList";
import Login from "./components/Login";
import Register from "./components/Register";
import NewPerson from "./components/AddMissingPerson";
import PersonDetails from "./components/PersonDetails";


function App() {
  const [logInState, setLogInState] = useState(false);
  const [logInName, setLogInName] = useState("");
  const [logInId, setLogInId] = useState();
  const [itemState, setItemState] = useState([]);
  const [commentState,setCommentState] = useState([])
  const [searchState, setSearchState] = useState("");
  

  function confirmLogin(value, name, id){
    setLogInState(value)
    setLogInName(name)
    setLogInId(id)
  }

  useEffect(()=>{
    // logInState ? (
      fetch("http://localhost:9292/missings")
      .then(r=> r.json())
      .then((data)=>{

      fetch("http://localhost:9292/last_seens")
      .then(resp=>resp.json())
      .then(commentData=>{
        setCommentState(commentData)
      })
        setItemState(data)
      })
  },[])

  function addNewComment(value){
    setCommentState([...commentState, value])
  }

  function getSearchValue(value){
    setSearchState(value);
  }

  function onUpdateItem(value){
    const updateItem = itemState.map((item)=>{
      if(item.id===value.id){
        return value
      } else {
        return item
      }
    })

    setItemState(updateItem)
  }

  function addNewItem(value){
    setItemState([...itemState, value])
  }

    const filteredItemData = itemState.filter((item)=>{

      if (!item.found && searchState === '') return true;

      return (!item.found && (item.name.toLowerCase().includes(searchState.toLowerCase())));
    })

  return (
    <>
      <Navbar sendSearchValue = {getSearchValue} isLoggedIn={logInState} loginName = {logInName} />
      
      <Routes>
        <Route path="/person/:location/:id" element={
          <>
            <Header isLoggedIn={logInState} />
            <PersonDetails updatedItem={onUpdateItem} getCommentFormData={addNewComment} commentData = {commentState} isLoggedIn={logInState} logInId={logInId}/>
          </>
          
          
        }>
        </Route>
        <Route path="/person/add-new" element={<NewPerson getFormData={addNewItem} logInId={logInId} />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/login" element={<Login confirmLogin={confirmLogin} />}></Route>
        <Route exact path="/" element={
          <>
            <Header isLoggedIn={logInState} />
            <ItemList isLoggedIn={logInState} logInId={logInId} updatedItem={onUpdateItem} commentData = {commentState} itemData = {filteredItemData} />
          </>
        }>
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
