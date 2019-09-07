import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, surname, year, email }) => {
  return (
    <div>
      <span>Imie: {name}</span>
      <span>Nazwisko: {surname}</span>
      <span>year: {year}</span>
      <span>email: {email}</span>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  email: PropTypes.string.isRequired,
};

export default User;
