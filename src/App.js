import React from 'react';
import './styles/app.css'
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Speakers from './pages/Speakers';

function App() {
  return (
    <div id="background">
      <Nav />
      <Speakers />
      <Footer />
    </div>
  );
}

export default App;
