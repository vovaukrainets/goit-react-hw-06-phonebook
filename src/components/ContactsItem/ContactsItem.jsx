import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Commons/Button.styled';
import { deleteContact } from '../redux/contacts/contactsSlice';
import { ContactItem } from 'components/ContactsItem/ContactsItem.styled';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </ContactItem>
  );
};
