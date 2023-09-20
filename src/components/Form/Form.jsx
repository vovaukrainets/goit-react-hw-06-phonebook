import React from 'react';
import { Formik } from 'formik';
import {
  InputStyled,
  DataForm,
  InputWrapper,
} from 'components/Form/Form.styled';
// import * as yup from 'yup';
import { nanoid } from 'nanoid';

// export const ContactsForm = ({ setNewContact }) => {
//   const onFormSubmit = (values, { resetForm }) => {
//     const newContact = {
//       id: nanoid(),
//       name: values.name,
//       number: values.number,
//     };

//     setNewContact(newContact);

//     resetForm();
//   };

import { useDispatch } from 'react-redux';
import { addContact } from '../contactsSlice/contactsSlice';

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));

    resetForm();
  };

  return (
    <>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={onFormSubmit}>
        <DataForm name="myFirstReactForm">
          <InputWrapper htmlFor="name">
            Name
            <InputStyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputWrapper>

          <InputWrapper htmlFor="number">
            Tel
            <InputStyled
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputWrapper>

          <button type="submit" name="btn">
            Add contact
          </button>
        </DataForm>
      </Formik>
    </>
  );
};
