import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactActionBtn,
  ContactItem,
  ContactNumber,
} from 'components/ContactsItem/ContactsItem.styled';

export const ContactsItem = ({ id, name, number, actionOnClick }) => {
  return (
    <ContactItem key={id} id={id}>
      {name}:<ContactNumber>{number}</ContactNumber>
      <ContactActionBtn
        type="button"
        onClick={() => {
          actionOnClick(id);
        }}
      >
        Delete
      </ContactActionBtn>
    </ContactItem>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};
