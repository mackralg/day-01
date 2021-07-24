
function Meal(props) {
    let youtubeId = props.meal['strYoutube'].replace('https://www.youtube.com/watch?v=', '')
    let ingredients = [];
    for(let i=1; i<=20; i++) {
        if(props.meal[`strIngredient${i}`]) {
            ingredients.push(`${props.meal[`strIngredient${i}`]} - ${props.meal[`strMeasure${i}`]}`)
        } else {
            break;
        }
    }
    return (
        <div className="meal-container">
            <div className="meal-img">
                <img src={props.meal.strMealThumb} alt="" />                
            </div>    
            <div className="meal-description">
                <h2 className="meal-header">{props.meal.strMeal}</h2>
                <p className="meal-tags">
                    {props.meal.strCategory ? <span><strong>Category:</strong> {props.meal.strCategory}</span> : ''}
                    {props.meal.strArea ? <span><strong>Area:</strong> {props.meal.strArea}</span> : ''}
                    {props.meal.strTags ? <span><strong>Tags:</strong> {props.meal.strTags.split(',').join(', ')}</span> : ''}
                </p>
                <div className="meal-instruction">{props.meal.strInstructions}</div>
            </div>       
            <div className="meal-ingredients">
                <h3>Ingredients:</h3>
				<ul>
					{ingredients.map((ingredient, keyId) => 
                        <li key={keyId}>{ingredient}</li>
                        )}
				</ul>
                <h3>Video Recipe:</h3>
                <div className="video-responsive">
                    <iframe frameborder='0' allow='autoplay; encrypted-media'
                        allowfullscreen title='video'
                        src={`https://www.youtube.com/embed/${youtubeId}`}>
                    </iframe>
                </div>
            </div> 
        </div>
    );
}

export default Meal;
