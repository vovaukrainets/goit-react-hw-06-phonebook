import React from 'react';
import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = ({ data, filter, actions }) => {
  return (
    <ul>
      {data.map(item => {
        if (item.name.toLowerCase().includes(filter)) {
          return (
            <ContactsItem
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
              actionOnClick={actions}
            />
          );
        } else {
          return '';
        }
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  actions: PropTypes.func.isRequired,
};
