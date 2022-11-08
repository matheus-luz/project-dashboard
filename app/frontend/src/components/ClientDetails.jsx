import React, { useEffect, useState } from 'react';
import { requestData } from '../services/api';
import { useLocation } from 'react-router-dom';

const ClientDetails = () => {
  const [client, setClient] = useState([]);
  const location = useLocation();


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
            {console.log(client)}
            {/* {/* <p>{client.company.name}</p> */}
            {/* <p>{client.city.name}</p> */}
            {/* <p>{client.office.name}</p> */}
          </div>
        )
        }
    </div>
  );
}

export default ClientDetails;