import React from 'react';
import './App.css'; // Certifique-se de que o arquivo App.css existe
import Nav from './menu.js';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      
      <Nav />
      <Footer /> 

    </div>
  );
}

export default App;