import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const searchQuery = evt.target.value.toLowerCase();
    dispatch(addFilter(searchQuery));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        onChange={handleChange}
        type="text"
        name="filter"
        className={styles.input}
      />
    </label>
  );
};

export default Filter;
