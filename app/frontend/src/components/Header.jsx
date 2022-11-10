import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/header.css';

const Header = ({ title }) => {
  return (
    <div className="header">
      <h2 className='title__header'>{ title }:</h2>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;