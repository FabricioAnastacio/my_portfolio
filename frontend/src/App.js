import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './styles/App.css';
import initialApp from './components/initialApp';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ initialApp } />
    </Routes>
  );
}

export default App;
