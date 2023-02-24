import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { ListItem, RemoveBtnContact } from './ContactItem.styled';
export const ContactItem = ({ name, idx, number }) => {
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch(removeContact(idx));
  };
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <RemoveBtnContact type="button" onClick={onRemove}>
        Remove
      </RemoveBtnContact>
    </ListItem>
  );
};
ContactItem.propTypes = {
  idx: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
