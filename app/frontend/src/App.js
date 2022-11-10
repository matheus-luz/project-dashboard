import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Client from './pages/Client';
import ClientDetails from './components/ClientDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/client" element={ <Client /> } />
      <Route path="client/:id" element={ <ClientDetails /> } />
    </Routes>
  );
}

export default App;