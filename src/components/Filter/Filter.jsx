import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';
export const Filter = () => {
  const dispatch = useDispatch();
  let queryFilter;
  const handleChange = e => {
    queryFilter = e.currentTarget.value;
    dispatch(setFilter(queryFilter));
  };
  return (
    <>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={queryFilter} onChange={handleChange} />
      </FilterLabel>
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
