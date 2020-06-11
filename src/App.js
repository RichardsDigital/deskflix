import React from 'react';
import './styles/app.css'
import Nav from './components/Navbar';
import Speakers from './pages/Speakers';

function App() {
  return (
    <div id="background">
      {/* <Nav /> */}
      <Speakers />
    </div>
  );
}

export default App;
