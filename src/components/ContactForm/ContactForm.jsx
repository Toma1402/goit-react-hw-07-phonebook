import { Form, Input, AddBtnContact } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const noticedContacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };
    e.currentTarget.reset();
    const names = noticedContacts.map(contact => contact.name.toLowerCase());
    const lowerCaseName = newContact.name.toLowerCase();
    if (names.indexOf(lowerCaseName) >= 0) {
      alert(newContact.name + 'is already in contacts');
      return;
    }
    dispatch(addContact(newContact));
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <div>
          Name <span>*</span>
        </div>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <div>
          Phone <span>*</span>
        </div>
        <div>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
      </label>
      <AddBtnContact type="submit">Add contact</AddBtnContact>
    </Form>
  );
};
