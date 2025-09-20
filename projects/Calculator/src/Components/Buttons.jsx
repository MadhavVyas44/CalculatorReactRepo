import styles from "./Buttons.module.css";

const Buttons = ({ onButtonClicked }) => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "0",
    "9",
    "=",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((buttonName, index) => (
        <button
          key={index}
          className={styles.calcButtons}
          onClick={() => onButtonClicked(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
