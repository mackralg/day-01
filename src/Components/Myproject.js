import './Project.scss';
import React, { useState } from 'react';
import Meal from './Meal';

function Myproject() {
    const [meal, setMeal] = useState(null);
    const [error, setError] = useState(null);
    const getMeal = () =>{
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(
            (result) => {
                setMeal(result.meals[0]);
                // console.log(meal);
            },
            (error) => {
                setError({error});
            }
        )
    }
    return (
        <div className="App-container">
            <div className="meal-header">
                <h1>Feeling Hungry?</h1>
                <h3>Get a random meal by clicking below</h3>
                <p onClick={()=>getMeal()} className="get-btn">Get Meal 🍔</p>
            </div>
            {(error)?
                <div>{error}</div>:
                (meal)?<Meal meal={meal} />:<div></div>
            }
        </div>
    );
}

export default Myproject;
