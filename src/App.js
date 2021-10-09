import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HeaderContent from './Components/Header/Header';
import MessagesContent from './Components/Messages/Messages';
import NavBarContent from './Components/NavBar/NavBar';
import ProfileContent from './Components/Profile/Profile';

function App({header,navbar,profile}) {
  return (
    <BrowserRouter>
    <div className="mainBox">
      <HeaderContent />
      <NavBarContent />
      <Route path='/Profile' component={ProfileContent} />
      <Route path='/Messages' component={MessagesContent} />
      {/* <MessagesContent />
      <ProfileContent /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;