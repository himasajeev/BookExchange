import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ value, name, onChange, defaultValue, options, title }) => {
  return (
    <div>
      {title ? <span>{title}</span> : null}
      <select value={value} name={name} onChange={onChange}>
        <option value="" disabled>
          {defaultValue}
        </option>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.defaultProps = {
  title: '',
  value: '',
};

Select.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Select;
