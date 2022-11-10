import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestData } from '../services/api';

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
    console.log(1);
  }, []);

  const cardItem = () => {
    if (cities) {
      return (
        cities.map((city, index) => {
          return (
            <Link
              key={ index }
              to={ `${city.id}` }
            >
              <div>
                <h4>
                  {city.name}
                </h4>
              </div>
            </Link>
          );
        })
      );
    }
  }

  return (
    <>
      <section>
        { cardItem() }
      </section>
    </>
  );
};

export default City;