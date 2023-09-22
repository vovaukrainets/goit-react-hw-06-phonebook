import React from 'react';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { SearchingFilter } from './SearchingFilter/SearchingFilter';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h1>Contacts</h1>
      <SearchingFilter />
      <ContactsList />
    </>
  );
};
