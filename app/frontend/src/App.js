import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ClientDetails from './components/Client/Details';
import City from './pages/City';
import Client from './pages/Client';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/city" element={ <City /> } />
      <Route path="city/:id" element={ <Client /> } />
      <Route path="client/:id" element={ <ClientDetails /> } />
    </Routes>
  );
}

export default App;