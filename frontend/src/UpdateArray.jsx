import { useState } from 'react'
import './UpdateArray.css'

function UpdateArray() {

    const [foods, setFoods] = useState(["Burger", "Frenchfries", "Spaghetti"]);
    
    function handleAddFood(event) {

        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return(
        <div>
            <div className="array-container">
                <h1>Array</h1>
                <ul>
                    {foods.map((food, index) => 
                        <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
                    )}
                </ul>
                <input type="text" id='foodInput' placeholder='Enter food name' />
                <button onClick={handleAddFood}>Enter food</button>
            </div>
        </div>
    );
}

export default UpdateArray