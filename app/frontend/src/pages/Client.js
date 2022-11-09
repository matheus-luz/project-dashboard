import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { requestData, setToken } from '../services/api';

const City = () => {
  const [city, setCity] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token') || '';

      if (!token) return navigate('/');

      setToken(token);

      requestData('/login/validate')
        .then(() => setIsAuthenticated(true))
        .catch(() => navigate('/'));
    })();
  }, [navigate]);

  useEffect(() => {
    const endpoint = '/client';

    const token = localStorage.getItem('token') || '';
    if (token !== '') {
      setToken(token);
    }
    if (!city.length) {
      requestData(endpoint)
        .then((response) => {
          setCity(response);
        })
        .catch((error) => console.log(error));
    }
  });


  if (!isAuthenticated) return <Loading />;

  const cardItem = () => {
    if (city === null) return;
    if (city) {
      return (
        city.map((c, index) => {
          return (
            <Link
              key={ index }
              to={ `${c.id}` }
            >
              <div>
                <h4>
                  {c.first_name} {c.last_name}
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
      { !Loading
        ? <span>Loading...</span>
        : cardItem() }
      </section>
    </>
  );
};

export default City;