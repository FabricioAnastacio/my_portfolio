import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './styles/App.css';
import InitialApp from './components/initialApp';
import { Portfolio } from './pages/portfolio';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ Portfolio } />
      <Route exact path="/home" Component={ InitialApp } />
    </Routes>
  );
}

export default App;
