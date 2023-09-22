import { useSelector } from 'react-redux';
import { Contacts } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const getVisibleContacts = (contacts, setedFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(setedFilter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <Contacts>
      {visibleContacts.map(contact => (
        <ContactsItem key={contact.id} contact={contact} />
      ))}
    </Contacts>
  );
};
