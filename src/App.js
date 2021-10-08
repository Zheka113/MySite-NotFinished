import React from 'react';
import './App.css';
import HeaderContent from './Components/Header/Header';
import NavBarContent from './Components/NavBar/NavBar';
import ProfileContent from './Components/Profile/Profile';

function App({header,navbar,profile}) {
  return (
    <div className="mainBox">
      <HeaderContent />
      <NavBarContent />
      <ProfileContent />
    </div>
  );
}

export default App;