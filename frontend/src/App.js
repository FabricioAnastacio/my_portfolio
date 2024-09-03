import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './styles/App.css';
import InitialApp from './components/initialApp';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ InitialApp } />
    </Routes>
  );
}

export default App;
