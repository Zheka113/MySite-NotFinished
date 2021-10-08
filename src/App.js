import React from 'react';
import './App.css';
import HeaderContent from './Components/Header/Header';
import NavBarContent from './Components/NavBar/NavBar';
import ProfileContent from './Components/Profile/Profile';

function App(props) {
  return (
    <div className="MainBox">
      <HeaderContent />
      <NavBarContent />
      <ProfileContent />
    </div>
  );
}

export default App;