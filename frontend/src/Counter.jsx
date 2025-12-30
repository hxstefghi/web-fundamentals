import { useState } from 'react'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    }

    const resetCounter = () => {
        setCount(0);
    }

    const decrementCounter = () => {
        setCount(count - 1);
    }

    return(
        <div>
            <div className="counter-container">
                <h1 className='counter-header'>Counter</h1>
                <h1 className='counter-display'>{count}</h1>

                <div className="counter-buttons">
                    <button className='counter-decrement' onClick={decrementCounter}>Decrement</button>
                    <button className='counter-reset' onClick={resetCounter}>Reset</button>
                    <button className='counter-increment' onClick={incrementCounter}>Increment</button>
                </div>
            </div>
        </div>
    );
}

export default Counter