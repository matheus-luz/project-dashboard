import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin, setToken } from '../services/api';

import io from 'socket.io-client';

const socket = io('http://localhost:3001/login')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

import '../styles/pages/login.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const [messages, updateMessages] = useState([])

  const login = async (event) => {
    event.preventDefault()

    if (email.trim()) {
      socket.emit('login.message', {
          email
      })
      setEmail('')
    }

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
    const handleNewMessage = newMessage =>
            updateMessages([...messages, newMessage])
        socket.on('login.message', handleNewMessage)
        return () => socket.off('login.message', handleNewMessage)
    }, [])

  useEffect(() => {
    setFailedTryLogin(false);
  }, [password, email]);

  if (isLogged) return <Navigate to="/city" />;

  return (
      <div className="container">
        <form>
          <h1>Área do usuário</h1>
          <label htmlFor="email-input">
            <input
              className='input__email'
              type="text"
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
              placeholder="Email"
            />
          </label>
          <label htmlFor="password-input">
            <input
              className='input__password'
              type="password"
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
              placeholder="Password"
            />
          </label>
          {
            (failedTryLogin)
              ? (
                <p className='login__error'>
                  {
                    `O endereço de e-mail não está correto.`
                  }
                </p>
              )
              : null
          }
          <button
            className='btn'
            type="submit"
            onClick={ (event) => login(event) }
          >
            Entrar
          </button>
        </form>
      </div>
  );
};

export default Login;