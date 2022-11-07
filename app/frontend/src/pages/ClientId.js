import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { requestData, setToken } from '../services/api';

const Client = () => {
  const [client, setClient] = useState([]);
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
    const endpoint = '/client/:id';

    const token = localStorage.getItem('token') || '';
    if (token !== '') {
      setToken(token);
    }
    if (!client.length) {
      requestData(endpoint)
        .then((response) => {
          setClient(response);
        })
        .catch((error) => console.log(error));
    }
  });


  if (!isAuthenticated) return <Loading />;

  const cardItem = () => {
    if (client === null) return;
    if (client) {
      return (
        client.map((c, index) => {
          return (
            <Link
              key={ index }
              to={ `${c.id}` }
            >
              <div>
                <h3>
                  {c.first_name}
                </h3>
                <p>{c.last_name}</p>
                <p>{c.email}</p>
                <p>{c.gender}</p>
                <p>{c.company.name}</p>
                <p>{c.city.name}</p>
                <p>{c.name}</p>
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

export default Client;