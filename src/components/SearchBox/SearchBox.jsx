import styles from './SearchBox.module.css';
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.searchBox}
      />
    </div>
  );
};

export default SearchBox;