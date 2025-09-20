import styles from "./SearchInput.module.css";

const SearchInput = ({ handleOnKeyDown }) => {
  return (
    <>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Enter item to search!"
        onKeyDown={handleOnKeyDown}
      />
    </>
  );
};
export default SearchInput;
