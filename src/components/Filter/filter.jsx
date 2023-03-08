
import PropTypes from 'prop-types';
import { LabelFilter } from "components/Filter/Filret.style"
export const Filter = ({ value, onChange }) => {
  return (
    <LabelFilter>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </LabelFilter>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}