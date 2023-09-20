// import React, { useState, useEffect } from 'react';
// import { ContactsForm } from 'components/Form/Form';
// import { ContactsList } from './ContactsList/ContactsList';
// import { SearchingFilter } from './SearchingFilter/SearchingFilter';

// export const App = () => {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);
//   const [newContact, setNewContact] = useState(undefined);

//   const [filter, setFilter] = useState('');

//   function hendleOnFilterChange(event) {
//     setFilter(event.target.value);
//   }

//   useEffect(() => {
//     if (!newContact) {
//       return;
//     }
//     setContacts(oldContactsState => {
//       if (
//         !oldContactsState.find(
//           item => item.name.toLowerCase() === newContact.name.toLowerCase()
//         )
//       ) {
//         return [...oldContactsState, newContact];
//       } else {
//         alert(`${newContact.name} is already in contacts`);
//         return oldContactsState;
//       }
//     });
//   }, [newContact]);

//   const onDeleteContact = deletedItemId => {
//     setContacts(oldState =>
//       [...oldState].filter(item => item.id !== deletedItemId)
//     );
//   };

//   return (
//     <>
//       <h1>Phonebook</h1>
//       <ContactsForm setNewContact={setNewContact} />

//       <h1>Contacts</h1>
//       <SearchingFilter onFilterAction={hendleOnFilterChange} />
//       <ContactsList data={contacts} filter={filter} actions={onDeleteContact} />
//     </>
//   );
// };

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/stor';
import { ContactsForm } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { SearchingFilter } from './SearchingFilter/SearchingFilter';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <h1>Phonebook</h1>
          <ContactsForm />

          <h1>Contacts</h1>
          <SearchingFilter />
          <ContactsList />
        </>
      </PersistGate>
    </Provider>
  );
};
