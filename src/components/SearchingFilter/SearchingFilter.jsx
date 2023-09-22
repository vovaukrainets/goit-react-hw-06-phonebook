import { FilterLabel } from './SearchingFilter.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filter/filterSlice';

export const SearchingFilter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleSetFilter = event => {
    const value = event.target.value;
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
