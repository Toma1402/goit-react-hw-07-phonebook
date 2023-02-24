import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
export const ContactList = () => {
  const inputedFilter = useSelector(state => state.filter);
  const contactsArr = useSelector(selectContacts);
  const normalizedFilter = inputedFilter.toLowerCase();
  const newArray = contactsArr.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log(contactsArr);
  return (
    <ul>
      {newArray.map(({ name, id, phone }, index) => (
        <ContactItem key={id} name={name} idx={id} phone={phone} />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ),
};
