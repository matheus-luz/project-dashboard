import React, { useEffect, useState } from 'react';
import { requestData } from '../../services/api';
import { useLocation } from 'react-router-dom';

const ClientDetails = () => {
  const [client, setClients] = useState([]);
  const location = useLocation();


  useEffect(() => {
    const endpoint = `${location.pathname}`;

    if (!client.length) {
      requestData(endpoint)
        .then((response) => {
          setClients(response);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div>
      <h1>Detalhes do Cliente</h1>
        {client && (
          <div key={ client.id }>
            <h3>Nome: {client.first_name} { client.last_name }</h3>
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