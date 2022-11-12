import React, { useEffect, useState } from 'react';
import { requestData } from '../../services/api';

import '../../styles/components/details.css';
import Header from '../Header';

const ClientDetails = () => {
  const [client, setClients] = useState([]);


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
      <Header title="Detalhes do cliente" />
      {client && (
          <div className='details__client' key={ client.id }>
            <h3>{client.first_name} { client.last_name }</h3>
            <p>Email:  {client.email}</p>
            <p>Gênero: {client.gender}</p>
            <p>Empresa: {client?.company?.name}</p>
            <p>Cidade: {client?.city?.name}</p>
            <p>Cargo: {client?.office?.name}</p>
          </div>
          )
        }
    </div>
  );
}

export default ClientDetails;