import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const endpoint = '/client';

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

  return (
    <>
    </>
  );
};

export default Client;