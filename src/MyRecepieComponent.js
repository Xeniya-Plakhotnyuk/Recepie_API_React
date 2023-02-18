
function MyRecepieComponent({label, image, calories, ingredients, time, id, link}){

    return(
        <div key={id}>
        <div className="container">
        <h2>{label}</h2>
        </div>
        <div className="tasty">
        <img src={image}/>
        </div>
        <div>
        <ul>
            {ingredients.map(item =>(
                <li>{item}</li>
            )
            )}
        </ul>

        
        <div className="button-32">
        <a href={link} target="_blank" rel="noreferrer">
        WATCH RECEPIE
      </a>
        </div>

        </div>
        <div>
        <h3>{calories.toFixed()} calories</h3>
        </div>

        <div className="container">
            <p>{time} MIN</p>
        </div>

        
        </div>
    )


}

export default MyRecepieComponent;