import styles from "./FoodItems.module.css";
import { useState } from "react";

const FoodItems = ({ items }) => {
  let [activeItems, setactiveItems] = useState([]);

  const handleOnClick = (item, event) => {
    let newItem = [...activeItems, item];
    setactiveItems(newItem);
  };
  return (
    <ul className="list-group">
      {items.map((item) => {
        const isActive = activeItems.includes(item);

        return (
          <li
            key={item}
            className={`${styles.list} list-group-item ${isActive && "active"}`}
          >
            {item}
            <button
              type="button"
              className={`${styles.buyButton} btn btn-info`}
              x
              onClick={(event) => handleOnClick(item, event)}
            >
              Buy
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FoodItems;
