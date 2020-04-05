import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
//
import Routes from './routes';

function App() {
  return (
    <BrowserRouter basename="/mup-demo">
      <Routes />
    </BrowserRouter>
  );
}

export default App;
