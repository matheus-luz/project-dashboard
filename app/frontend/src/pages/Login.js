import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin, setToken } from '../services/api';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const login = async (event) => {
    event.preventDefault()

    try {
      const { token } = await requestLogin('/login', { email, password });

      setToken(token);

      localStorage.setItem('token',  token);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [password, email]);

  if (isLogged) return <Navigate to="/city" />;

  return (
    <>
      <section>
        <form>
          <h1>Área do usuário</h1>
          <label htmlFor="email-input">
            <input
              type="text"
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
              placeholder="Email"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
              placeholder="Password"
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