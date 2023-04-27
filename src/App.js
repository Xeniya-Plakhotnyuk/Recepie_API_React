import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import MyRecepieComponent from "./MyRecepieComponent";
import video from "./food.mp4";

function App() {
  const [mySearch, setMySearch] = useState("");
  const [myRecepie, setMyRecepie] = useState([]);
  const [myWord, setMyWord] = useState("");

  useEffect(() => {
    const getRecepie = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${myWord}&app_id=92e6f20f&app_key=bb33901803385e800d37e54e1b7304ca`
      );
      const data = await response.json();
      console.log(data.hits);
      setMyRecepie(data.hits);
    };
    getRecepie();
  }, [myWord]);

  const findRecepie = (e) => {
    console.log(e.target.value);
    setMySearch(e.target.value);
  };

  const finalWord = (e) => {
    e.preventDefault();
    setMyWord(mySearch);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="top">
          <img src="./logo.PNG" alt="logo" width="250px" />
        </div>

        <div className="top">
          <h1 className="top">Find a Recipe</h1>
          <div className="form_inside">
            <form onSubmit={finalWord}>
              <input
                className="search"
                placeholder="Insert your Ingridient..."
                onChange={findRecepie}
                value={mySearch}
              ></input>
            </form>
            <div>
              <button>
                <img
                  src="https://img.icons8.com/fluency/48/000000/fry.png"
                  className="icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="main">
        {myRecepie.map((element, index) => (
          <MyRecepieComponent
            key={index}
            label={element.recipe.label}
            image={element.recipe.image}
            calories={element.recipe.calories}
            ingredients={element.recipe.ingredientLines}
            time={element.recipe.totalTime}
            link={element.recipe.url}
          />
        ))}
      </div>

      <div className="footer">
        <p className="footer_disclaimer">
          This website created for educational purposes only<br></br> by Xeniya
          Plakhotnyuk
        </p>
      </div>
    </div>
  );
}

export default App;
