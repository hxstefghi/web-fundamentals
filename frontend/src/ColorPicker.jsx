import './ColorPicker.css'
import { useState } from 'react'

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return(
        <div>
            <div className="color-picker-container">
                <h1>Color Picker</h1>
                <div className="color-display">
                    <p style={{backgroundColor: color}}>Selected color: {color}</p>
                </div>

                <label htmlFor="color">Select a color:</label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </div>
    );
}
export default ColorPicker