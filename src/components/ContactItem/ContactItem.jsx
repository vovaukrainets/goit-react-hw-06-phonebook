import React from 'react';
import { useDispatch } from 'react-redux';
import { ContactListItem } from './ContactItem.styled';
import { Button } from 'components/Commons/Button.styled';
import { deleteContact } from '../redux/contacts/contactsSlice';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactListItem>
      <p>
        {name}: {number}
      </p>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </ContactListItem>
  );
};
