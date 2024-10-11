import { Route, Routes } from 'react-router-dom';
import React from 'react';
import InitialPage from './pages/initialPage';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ InitialPage } />
      <Route exact path="/home" Component={ Portfolio } />
    </Routes>
  );
}

export default App;
