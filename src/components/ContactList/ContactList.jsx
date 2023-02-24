import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
export const ContactList = () => {
  const inputedFilter = useSelector(state => state.filter);

  const contactsArr = useSelector(selectContacts);
  console.log(contactsArr);

  const dispatch = useDispatch();
  const normalizedFilter = inputedFilter.toLowerCase();
  const newArray = contactsArr.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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
