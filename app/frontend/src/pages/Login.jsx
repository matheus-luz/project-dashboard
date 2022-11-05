import React, { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <section>
        <form>
          <h1>Área do usuário</h1>
          <label htmlFor="name-input">
            <input
              type="text"
              value={ name }
              onChange={ ({ target: { value } }) => setName(value) }
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
          <button
            type="submit"
          >
            Entrar
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;