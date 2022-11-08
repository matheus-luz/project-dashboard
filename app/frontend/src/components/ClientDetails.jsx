import React, { useEffect, useState } from 'react';
import { requestData, setToken } from '../services/api';
import { useLocation, useNavigate } from 'react-router-dom';

const ClientDetails = () => {
  const [client, setClient] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token') || '';

      if (!token) return navigate('/');

      setToken(token);
    })();
  }, [navigate]);



  useEffect(() => {
    const endpoint = `${location.pathname}`;

    if (!client.length) {
      requestData(endpoint)
        .then((response) => {
          setClient(response);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div>
      <h2>Detalhes do Cliente</h2>
        {client && (
          <div key={ client.id }>
            <h1>Nome: {client.first_name} { client.last_name }</h1>
            <p>{client.email}</p>
            <p>{client.gender}</p>
            <p>{client?.company?.name}</p>
            <p>{client?.city?.name}</p>
            <p>{client?.office?.name}</p>
          </div>
        )
        }
    </div>
  );
}

export default ClientDetails;