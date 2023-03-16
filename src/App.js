import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import MyRecepieComponent from "./MyRecepieComponent";

function App() {

  const[mySearch, setMySearch] = useState ('');
  const[myRecepie, setMyRecepie] = useState([]);
  const[myWord, setMyWord] = useState('');

 
  
  useEffect(() => {
    const getRecepie = async () =>{
    const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${myWord}&app_id=92e6f20f&app_key=bb33901803385e800d37e54e1b7304ca`);
    const data = await response.json();
    console.log(data.hits);
    setMyRecepie(data.hits);
        
    }
    getRecepie()
    }, [myWord])

    const findRecepie =(e) =>{
      console.log(e.target.value);
      setMySearch(e.target.value);
  } 

  const finalWord = (e) =>{
    e.preventDefault();
    setMyWord(mySearch);
  }

  return (
    <div className="App">

  <div>
<div className="top" >
  <img src="./logo.PNG" alt="logo" width ='250px'/>
</div>
 
  {/* <h1 className="top">Find a Recipe</h1> */}

  </div>

<div className="top">
  <div >
    <form onSubmit={finalWord}>
      <input className="search" placeholder="Search by Ingridient..." onChange={findRecepie} value={mySearch}></input>
    </form>
  </div>

<div>
        <button ><img src=""  className="icon" /></button>
      </div>
</div>      

<div className="main">
{myRecepie.map((element, index) => (
  <MyRecepieComponent key={index}
  label = {element.recipe.label} 
  image = {element.recipe.image} 
  calories ={element.recipe.calories}
  ingredients ={element.recipe.ingredientLines}
  time = {element.recipe.totalTime}
  link = {element.recipe.url}
  />
))
}
</div>
  

  <div className="footer">
         
          <p className="footer_disclaimer">
            This website created for educational purposes only<br></br> by
            Xeniya Plakhotnyuk
          </p>
        
      </div>

  </div>

  );
}

export default App;

