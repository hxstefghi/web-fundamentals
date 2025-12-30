import List from './List.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx';
import './App.css'

function App() {

  /*
  let fruits = [{id: 1, name: "banana", calories: 98},
                {id: 2, name: "apple", calories: 50},
                {id: 3, name: "orange", calories: 38},
                {id: 4, name: "santol", calories: 140},
                {id: 5, name: "grapes", calories: 125},
  ];

  let vegetables = [{id: 6, name: "ampalaya", calories: 120},
                {id: 7, name: "sayote", calories: 35},
                {id: 8, name: "potatoes", calories: 68},
                {id: 9, name: "tomatoes", calories: 178},
                {id: 10, name: "malunggay", calories: 79},
  ];
  */



  return (
    <>
        {/*
          {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
          {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
        */}

        {/*<Counter />*/}

        <ColorPicker />
    </>
  );
}

export default App