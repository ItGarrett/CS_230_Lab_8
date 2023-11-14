import './App.css';
import { useRef, useState } from "react";

import React from "react";

function App() {
  const inputRef = useRef(null);
  const [listItem, setItem] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const newItem = inputRef.current.value;
    if (newItem !== "") {
      setItem([...listItem, newItem]);
    }
    inputRef.current.value = "";
  }

  const removeItem = (index) => {
    const updatedItems = listItem.filter((_, i) => i !== index);
    setItem(updatedItems);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <input type="text" placeholder="Enter an item"  ref={inputRef}></input>
      <ul>
        {listItem.map((listItem, index) => (
          <li className="li-item" key={index}>
            {listItem}
            <span className="remove-button" onClick={() => removeItem(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <button class="my-btn" onClick={addItem}>Add to list</button>
    </div>
    
  );
}

export default App;
