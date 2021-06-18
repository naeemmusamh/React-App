import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App(props) {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;