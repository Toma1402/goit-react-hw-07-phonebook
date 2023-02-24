import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
export const ContactList = () => {
  const contactsArr = useSelector(state => state.contacts);
  const inputedFilter = useSelector(state => state.filter);
  console.log(inputedFilter);
  console.log(contactsArr);

  const normalizedFilter = inputedFilter.toLowerCase();
  const newArray = contactsArr.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {newArray.map(({ name, id, number }, index) => (
        <ContactItem key={id} name={name} idx={id} number={number} />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
