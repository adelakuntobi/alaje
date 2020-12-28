import React from 'react';
import { Redirect } from 'react-router-dom';
import './App.scss';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Redirect to="/" />
    </div>
  );
}

export default App;
