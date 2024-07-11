import { useState } from "react";
import "./App.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newItem);

    if (!newItem) {
      alert("Please input a value");
    } else
      setTodos((currentTodos) => {
        // console.log(
        //   currentTodos.map((tod) => {
        //     return tod.title == "s";
        //   })
        // );
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), title: newItem, completed: false },
        ];
      });

    setNewItem(""); //clears the input every submit
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)} //accepts the text being typed in the input
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add Item</button>
      </form>
      <h1 className="header"></h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete Item</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
