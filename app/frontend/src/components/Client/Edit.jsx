import React, { useState } from 'react';
import { requestUpdate } from '../../services/api';
// import { requestData } from '../services/api';
import '../../styles/components/edit.css';

const ClientEdit = () => {
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [cityId, setCityId] = useState('');
  const [titleId, setTitleId] = useState('');

  
  const update = async (event) => {
    event.preventDefault()

    try {
      await requestUpdate('/client/update', {  
        email, 
        gender,
        companyId,
        cityId,
        titleId  
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container__update'>
      <h1>Atualizar</h1>
      <form>
          <label htmlFor="email-input">
            <input
              className='input__clients__update'
              type="text"
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
              placeholder="Email"
            />
          </label>
          <label htmlFor="gender-input">
            <input
              className='input__update'
              type="text"
              value={ gender }
              onChange={ ({ target: { value } }) => setGender(value) }
              placeholder="gender"
            />
          </label>
          <label htmlFor="companyId-input">
            <input
              className='input__update'
              type="number"
              value={ companyId }
              onChange={ ({ target: { value } }) => setCompanyId(value) }
              placeholder="companyId"
            />
          </label>
          <label htmlFor="cityId-input">
            <input
              className='input__update'
              type="number"
              value={ cityId }
              onChange={ ({ target: { value } }) => setCityId(value) }
              placeholder="cityId"
            />
          </label>
          <label htmlFor="titleId-input">
            <input
              className='input__update'
              type="number"
              value={ titleId }
              onChange={ ({ target: { value } }) => setTitleId(value) }
              placeholder="titleId"
            />
          </label>
          <button 
            className='btn__update'
            type="submit"
            onClick={ (event) => update(event) }
          >
            Atualizar
          </button>
      </form>
    </div>
  );
};

export default ClientEdit;