import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Selects from 'react-select';
import { PADDING } from '../../styles/padding';

const StyledContainer = styled.div`
  margin: ${PADDING.BASE} 0;
`;

const Select = ({
  name,
  onChange,
  options,
  defaultValue,
  className,
  placeholder,
  id,
}) => {
  return (
    <StyledContainer className={className}>
      <Selects
        name={name}
        onChange={onChange}
        options={options}
        defaultValue={defaultValue}
        placeholder={placeholder}
        id={id}
        isClearable
      />
    </StyledContainer>
  );
};

Select.defaultProps = {
  defaultValue: '',
  className: '',
  placeholder: '',
};

Select.propTypes = {
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

export default Select;
