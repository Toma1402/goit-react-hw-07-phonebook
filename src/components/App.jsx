import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactsTitle, Phonebook, PhonebookTitle } from './App.styled';

export const App = () => {
  return (
    <>
      <Phonebook>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
      </Phonebook>
    </>
  );
};
