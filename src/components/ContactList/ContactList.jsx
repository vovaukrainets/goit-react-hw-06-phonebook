import { ContactItem } from 'components/ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const getVisibleContacts = (contacts, setedFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(setedFilter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <Contacts>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Contacts>
  );
};
