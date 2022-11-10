import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestData } from '../services/api';

const Client = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const endpoint = `${location.pathname}`;

    if (!clients.length) {
      requestData(endpoint)
        .then((response) => {
          setClients(response);
        })
        .catch((error) => console.log(error));
    }
  });

  const cardItem = () => {
    if (clients) {
      return (
        clients.map((client, index) => {
          return (
            <Link
              key={ index }
              to={ `/client/${client.id}` }
            >
              <div>
                <h4>
                  {client.first_name} {client.last_name}
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

export default Client;