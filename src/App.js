import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HeaderContent from './Components/Header/Header';
import MessagesContent from './Components/Messages/Messages';
import NavBarContent from './Components/NavBar/NavBar';
import ProfileContent from './Components/Profile/Profile';

function App({ header, navbar, profile, state }) {
  return (
    <BrowserRouter>
      <div className="mainBox">
        <HeaderContent />
        <NavBarContent />
        <div className='routedContent'>
          <Route path='/Profile' render={()=><ProfileContent postData={state.postData}/>} />
          <Route path='/Messages' render={()=><MessagesContent messagesData={state.messagesData}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;