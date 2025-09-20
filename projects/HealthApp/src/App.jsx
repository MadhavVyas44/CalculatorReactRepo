import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import "./App.css";
import styles from "./components/Container.module.css";
import SearchInput from "./components/SearchInput";
import { useState } from "react";

function App() {
  let [Fooditems, setFoodItems] = useState([
    "Banana",
    "Mango",
    "Apple",
    "Sabzi",
  ]);

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFooditem = event.target.value.trim();
      if (newFooditem !== "") {
        setFoodItems((prevItems) => [...prevItems, newFooditem]);
        event.target.value = "";
      }
    }
  };

  return (
    <Container>
      <h1 className={styles.heading}>Healthy Foods</h1>
      <SearchInput handleOnKeyDown={handleOnKeyDown} />
      <FoodItems items={Fooditems} />
    </Container>
  );
}

export default App;
