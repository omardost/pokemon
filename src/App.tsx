import React from 'react';
import './App.css';
import { Home } from './components/home';
import './components/styles.css';

function App() {

  return (
    <div className='bodyHome'>
      <div style={{ width: '100%', justifyContent: 'center' }}><strong><h3>Listado de Pokemon</h3></strong></div>
      <Home />
    </div>


  );
}

export default App;
