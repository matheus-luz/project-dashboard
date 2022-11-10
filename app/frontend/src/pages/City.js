import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { requestData } from '../services/api';

import '../styles/pages/city.css';

const City = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const endpoint = '/city';

    if (!cities.length) {
      requestData(endpoint)
        .then((response) => {
          setCities(response);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const cardItem = () => {
    if (cities) {
      return (
        cities.map((city, index) => {
          return (
            <div className='container__city' key={index}>
              <Link
              key={ index }
              to={ `${city.id}` }
              className="city__link"
            >
              <div className="city__link">
                <h4>
                  {city.name}
                </h4>
                <p>Total de clientes: 1</p>
              </div>
            </Link>
            </div>
          );
        })
      );
    }
  }

  return (
    <>
      <section>
        <Header title="Lugares" />
        { cardItem() }
      </section>
    </>
  );
};

export default City;