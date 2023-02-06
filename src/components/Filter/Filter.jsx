import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, changeFilterValue }) => {
  return (
    <>
      <div className={css.container}>
        <label className={css.label}>
          Find contacts by name
          <input
            className={css.input}
            type="text"
            name="contacts"
            value={value}
            onChange={changeFilterValue}
            required
          />
        </label>
      </div>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilterValue: PropTypes.func.isRequired,
};
