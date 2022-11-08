import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin, setToken, requestData } from '../services/api';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const login = async (event) => {
    event.preventDefault()

    try {
      const { token } = await requestLogin('/login', { firstName, email });

      setToken(token);

      const { id } = await requestData('/login/validate', { firstName, email });

      localStorage.setItem('token',  token);
      localStorage.setItem('id',  id);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [name, email]);

  if (isLogged) return <Navigate to="/client" />;

  return (
    <>
      <section>
        <form>
          <h1>Área do usuário</h1>
          <label htmlFor="name-input">
            <input
              type="text"
              value={ firstName }
              onChange={ ({ target: { value } }) => setFirstName(value) }
              data-testid="login__name_input"
              placeholder="Nome"
            />
          </label>
          <label htmlFor="email-input">
            <input
              type="text"
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
              placeholder="Email"
            />
          </label>
          {
            (failedTryLogin)
              ? (
                <p>
                  {
                    `O endereço de e-mail não está correto.
                    Por favor, tente novamente.`
                  }
                </p>
              )
              : null
          }
          <button
            type="submit"
            onClick={ (event) => login(event) }
          >
            Entrar
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;