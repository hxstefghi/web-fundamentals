import { useState } from 'react'

function UpdateObject() {

    const [car, setCar] = useState({year: 2024, brand: "Ford", model: "Mustang"})

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}))
    }

    function handleBrandChange(event){
        setCar(c => ({...c, brand: event.target.value}))
    }

    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }
   
    return(
        <div>
            <p>Your favorite car: {car.year} {car.brand} {car.model}</p>
            <input type="number" name="" id="" value={car.year} onChange={handleYearChange} /><br />
            <input type="text" name="" id="" value={car.brand} onChange={handleBrandChange} /><br />
            <input type="text" name="" id="" value={car.model} onChange={handleModelChange} /><br />
        </div>
    );
}
export default UpdateObject