import { useState } from 'react'
import List from './List';

function ArrayObject() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {year: carYear, make: carMake, model: carModel}
        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars(cars.filter((_, i) => i !== index))
    }

    function handleCarYear(event) {
        setCarYear(event.target.value);

    }

    function handleCarMake(event) {
        setCarMake(event.target.value)
    }

    function handleCarModel(event) {
        setCarModel(event.target.value)
    }

    return(
        <div>
            <div className="array-object-container">
                <h1>Car List</h1>

                <ul style={{marginBottom: 10}}>
                    {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)} style={{cursor: "pointer"}}>
                        {car.year} {car.make} {car.model}
                    </li>)}
                </ul>

                <input type="number" value={carYear} onChange={handleCarYear} /><br/>
                <input type="text" value={carMake} onChange={handleCarMake} placeholder='Enter car make' /><br/>
                <input type="text" value={carModel} onChange={handleCarModel} placeholder='Enter car model' /><br/>
                <button style={{marginTop: "10px"}} onClick={handleAddCar}>Add car</button>
            </div>
        </div>
    );
}

export default ArrayObject