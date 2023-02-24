import { Form, Input, AddBtnContact } from './ContactForm.styled';
import { useDispatch /* , useSelector */ } from 'react-redux';
/* import { selectContacts } from 'redux/selectors'; */
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  /* const noticedContacts = useSelector(selectContacts); */

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const phone = e.currentTarget.elements.number.value;
    /* const newContact = {
      name: e.currentTarget.elements.name.value,
      phone: e.currentTarget.elements.number.value,
    }; */

    /* const names = noticedContacts.map(contact => contact.name.toLowerCase());
    const lowerCaseName = newContact.name.toLowerCase();
    if (names.indexOf(lowerCaseName) >= 0) {
      alert(newContact.name + 'is already in contacts');
      return;
    } */
    dispatch(
      addContact({
        name,
        phone,
      })
    );
    e.currentTarget.reset();
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
