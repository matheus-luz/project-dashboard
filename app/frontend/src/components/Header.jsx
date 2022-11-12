import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ title }) => {
  const location = useLocation();
  return (
    <div className="header">
      <h2 className='title__header'>{ title }:</h2>
      {
        location.pathname === '/client/update'
        ?  <Link
              className='link__update' 
              to={`/city`}
            >
              Cidades
      </Link>
          :
          <Link
            className='link__update' 
            to={`/client/update`}
          >
            Editar 
          </Link>
      }
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;