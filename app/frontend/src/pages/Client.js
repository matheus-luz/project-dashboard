import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { requestData } from '../services/api';

import '../styles/pages/client.css';

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
            <div className='container__client' key={index}>
              <Link
              key={ index }
              to={ `/client/${client.id}` }
            >
              <ul>
                <li>
                  {client.first_name} {client.last_name}
                </li>
              </ul>
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
        <section className='client'>
          <Header title="Clientes da cidade" />
          {cardItem()}
        </section>
      </section>
    </>
  );
};

export default Client;