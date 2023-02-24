import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactsTitle, Phonebook, PhonebookTitle } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  return (
    <>
      <Phonebook>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {isLoading && !error && <p>LOADING...</p>}
        <ContactList />
      </Phonebook>
    </>
  );
};
