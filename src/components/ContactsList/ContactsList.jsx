// import React from 'react';
// import PropTypes from 'prop-types';
// import { ContactsItem } from '../ContactsItem/ContactsItem';

// export const ContactsList = ({ data, filter, actions }) => {
//   return (
//     <ul>
//       {data.map(item => {
//         if (item.name.toLowerCase().includes(filter)) {
//           return (
//             <ContactsItem
//               key={item.id}
//               id={item.id}
//               name={item.name}
//               number={item.number}
//               actionOnClick={actions}
//             />
//           );
//         } else {
//           return '';
//         }
//       })}
//     </ul>
//   );
// };

// ContactsList.propTypes = {
//   data: PropTypes.array.isRequired,
//   filter: PropTypes.string.isRequired,
//   actions: PropTypes.func.isRequired,
// };

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../contactsSlice/contactsSlice';
import { ContactsItem } from '../ContactsItem/ContactsItem';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(item => (
        <ContactsItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          actionOnClick={() => dispatch(deleteContact(item.id))}
        />
      ))}
    </ul>
  );
};
