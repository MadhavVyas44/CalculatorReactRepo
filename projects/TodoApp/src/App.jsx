import "./App.css";
import TodoHeading from "./Components/TodoHeading";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`the name is ${itemName} and date is ${itemDueDate}`);

    const newTodoItem = [
      ...todoItems,
      {
        taskName: itemName,
        taskDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItem);
  };

  return (
    <>
      <center>
        <TodoHeading />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
