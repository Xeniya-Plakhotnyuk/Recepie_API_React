
function MyRecepieComponent({label, image, calories, ingredients, time, id, link}){

    return(
        <div key={id} className='container'>
         

        <div className="tasty">
        <img src={image}/>
        </div>

       <div className="card_inside">
        <h2>{label}</h2>
        </div>

        <div>
        <ul>
            {ingredients.map(item =>(
                <li>⭐️ {item}</li>
            )
            )}
        </ul>

        
        <div className="button-32">
        <a href={link} target="_blank" rel="noreferrer">
        WATCH RECEPIE
      </a>
        </div>
        
        <div>
        <h3>{calories.toFixed()} calories</h3>
        </div>
</div>
              
        </div>
    )


}

export default MyRecepieComponent;