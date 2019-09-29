import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Selects from 'react-select';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { PADDING } from '../../styles/padding';

/*eslint-disable */

const StyledContainer = styled.div`
  margin: ${PADDING.BASE} 0;
`;

const StyledNoOptionsMessage = styled(Typography)`
  padding: ${PADDING.SMALL} ${PADDING.BASE};
`;

const NoOptionsMessage = props => {
  return (
    <StyledNoOptionsMessage color="textSecondary" {...props.innerProps}>
      {props.children}
    </StyledNoOptionsMessage>
  );
};

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.PropTypes.shape({}).isRequired,
  selectProps: PropTypes.PropTypes.shape({}).isRequired,
};

const inputComponent = ({ inputRef, ...props }) => {
  return <div ref={inputRef} {...props} />;
};

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
};

const Control = props => {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { TextFieldProps },
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          style: { display: 'flex', padding: '0', height: 'auto' },
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
};

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func.isRequired,
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.object,
  ]).isRequired,
  selectProps: PropTypes.object.isRequired,
};

class Option extends React.PureComponent {
  render() {
    const {
      innerProps,
      isFocused,
      isSelected,
      innerRef,
      children,
    } = this.props;
    const { onClick, id } = innerProps;
    return (
      <MenuItem
        ref={innerRef}
        selected={isFocused}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
        key={id}
        onClick={onClick}
      >
        {children}
      </MenuItem>
    );
  }
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    tabIndex: PropTypes.number.isRequired,
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
  isFocused: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

const StyledPlaceholder = styled(Typography)`
  position: absolute;
  bottom: 6px;
  font-size: 16px;
`;

const Placeholder = props => {
  const { innerProps = {}, children } = props;
  return (
    <StyledPlaceholder color="textSecondary" {...innerProps}>
      {children}
    </StyledPlaceholder>
  );
};

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

const StyledSingleValue = styled(Typography)`
  font-size: 16px;
`;

const SingleValue = props => {
  return (
    <StyledSingleValue {...props.innerProps}>
      {props.children}
    </StyledSingleValue>
  );
};

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.any,
  selectProps: PropTypes.object.isRequired,
};

const StyledValueContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  overflow: hidden;
`;

const ValueContainer = props => {
  return <StyledValueContainer>{props.children}</StyledValueContainer>;
};

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
};

const StyledMenu = styled(Paper)`
  position: absolute;
  z-index: 1;
  margin-top: ${PADDING.BASE};
  left: 0;
  right: 0;
`;

const Menu = props => {
  return (
    <StyledMenu square {...props.innerProps}>
      {props.children}
    </StyledMenu>
  );
};

Menu.propTypes = {
  children: PropTypes.element.isRequired,
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
};

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

const noOptions = () => {
  return `Nie znaleziono.`;
};

const Select = ({
  name,
  onChange,
  options,
  defaultValue,
  className,
  placeholder,
  label,
  isClearable,
}) => {
  return (
    <StyledContainer className={className}>
      <Selects
        TextFieldProps={{
          label: label,
          InputLabelProps: {
            shrink: true,
          },
        }}
        placeholder={placeholder}
        options={options}
        components={components}
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
        noOptionsMessage={noOptions}
        isClearable={isClearable}
      />
    </StyledContainer>
  );
};

Select.defaultProps = {
  defaultValue: '',
  className: '',
  placeholder: '',
  isClearable: false,
};

Select.propTypes = {
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  isClearable: PropTypes.bool,
};

export default Select;

/*eslint-disable */
