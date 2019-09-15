import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Selects from 'react-select';
import { PADDING } from '../../styles/padding';

const StyledContainer = styled.div`
  margin: ${PADDING.BASE} 0;
`;

const StyledTitle = styled.span`
  padding-top: ${PADDING.SMALL};
  margin-left: 4px;
`;

const StyledSelect = styled.select`
  width: 100%;
  border: 1px black solid;
  font-size: 16px;
  padding: ${PADDING.SMALL};
`;

const StyledOption = styled.option`
  max-width: 100%;
`;

const Select = ({
  value,
  name,
  onChange,
  defaultValue,
  options,
  title,
  className,
  placeholder,
}) => {
  return (
    <StyledContainer className={className}>
      {title ? <StyledTitle>{title}</StyledTitle> : null}
      <Selects
        onChange={onChange}
        value={value}
        options={options}
        isClearable
        placeholder={defaultValue}
      />
      {/* <StyledSelect value={value} name={name} onChange={onChange}>
        <StyledOption value="" disabled>
          {defaultValue}
        </StyledOption>
        {options.map(option => (
          <StyledOption key={option.id} value={option.value}>
            {option.value}
          </StyledOption>
        ))}
      </StyledSelect> */}
    </StyledContainer>
  );
};

Select.defaultProps = {
  title: '',
  value: '',
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
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Select;
