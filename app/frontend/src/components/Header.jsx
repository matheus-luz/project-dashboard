import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/header.css';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <div className="header">
      <h2 className='title__header'>{ title }:</h2>
      <Link
        className='link__update' 
        to={`/client/update`}
      >
       Editar 
      </Link>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;