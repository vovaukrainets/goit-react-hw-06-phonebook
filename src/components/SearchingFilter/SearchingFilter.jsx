// import React from 'react';
// import PropTypes from 'prop-types';
import {
  SearchingWrapper,
  SearchingTextArea,
} from 'components/SearchingFilter/SearchingFilter.styled';

// export const SearchingFilter = ({ onFilterAction }) => {
//   return (
//     <SearchingWrapper>
//       Find contacts by Name
//       <SearchingTextArea onChange={onFilterAction}></SearchingTextArea>
//     </SearchingWrapper>
//   );
// };

// SearchingFilter.propTypes = {
//   onFilterAction: PropTypes.func.isRequired,
// };

import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../contactsSlice/contactsSlice';

export const SearchingFilter = () => {
  const dispatch = useDispatch();

  const hendleOnFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <SearchingWrapper>
      Find contacts by Name
      <SearchingTextArea onChange={hendleOnFilterChange}></SearchingTextArea>
    </SearchingWrapper>
  );
};
