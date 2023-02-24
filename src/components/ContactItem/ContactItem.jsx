import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { ListItem, RemoveBtnContact } from './ContactItem.styled';
export const ContactItem = ({ name, idx, phone }) => {
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch();
  };
  return (
    <ListItem>
      <p>
        {name}: {phone}
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
  phone: PropTypes.string.isRequired,
};
