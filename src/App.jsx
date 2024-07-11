import { useState } from "react";
import "./App.css";

const App = () => {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add Item</button>
      </form>
      <h1 className="header"></h1>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            todo1
          </label>
          <button className="btn btn-danger">Delete Item</button>
        </li>
      </ul>
    </>
  );
};

export default App;
