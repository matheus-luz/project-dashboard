import React, { useState } from 'react';
import { requestUpdate } from '../../services/api';
// import { requestData } from '../services/api';
import '../../styles/components/edit.css';
import Header from '../Header';

const ClientEdit = () => {
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [cityId, setCityId] = useState('');
  const [titleId, setTitleId] = useState('');

  
  const update = async (event) => {
    event.preventDefault()

    try {
      const data = await requestUpdate('/client/update', {  
        email, 
        gender,
        companyId,
        cityId,
        titleId  
      });

      console.log(data);

      if(data === 'Updated') {
        setEmail('')
        setGender('')
        setCompanyId('')
        setCityId('')
        setTitleId('')
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header title="Atualizar o cliente" />
      <div className='container__update'>
      <form>
          <label htmlFor="email-input">
            <input
              className='input__clients__update'
              type="text"
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
              placeholder="Digite o email do cliente"
            />
          </label>
          <label htmlFor="gender-input">
            <input
              className='input__update'
              type="text"
              value={ gender }
              onChange={ ({ target: { value } }) => setGender(value) }
              placeholder="Gender"
            />
          </label>
          <label htmlFor="companyId-input">
            <input
              className='input__update'
              type="text"
              value={ companyId }
              onChange={ ({ target: { value } }) => setCompanyId(value) }
              placeholder="Company"
            />
          </label>
          <label htmlFor="cityId-input">
            <input
              className='input__update'
              type="text"
              value={ cityId }
              onChange={ ({ target: { value } }) => setCityId(value) }
              placeholder="City"
            />
          </label>
          <label htmlFor="titleId-input">
            <input
              className='input__update'
              type="text"
              value={ titleId }
              onChange={ ({ target: { value } }) => setTitleId(value) }
              placeholder="Title"
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
    </div>
  );
};

export default ClientEdit;