import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Client from './pages/Client';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/client" element={ <Client /> } />
      <Route path="/client/:id" element={ <ClientId /> } />
    </Routes>
  );
}

export default App;