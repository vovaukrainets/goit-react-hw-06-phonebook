import { setFilter } from '../redux/filter/filterSlice';
import { FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleSetFilter = e => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleSetFilter}
      />
    </FilterLabel>
  );
};
