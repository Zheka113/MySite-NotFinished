import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HeaderContent from './Components/Header/Header';
import MessagesContent from './Components/Messages/Messages';
import NavBarContent from './Components/NavBar/NavBar';
import ProfileContent from './Components/Profile/Profile';
import FirstPage from './Components/FirstPage/FirstPage';

function App({ header, navbar, profile, state, newPost }) {
  return (
    <BrowserRouter>
      <div className="mainBox">
        <HeaderContent />
        <NavBarContent />
        <div className='routedContent'>
          <Route exact path='/' render={()=><FirstPage/>} />
          <Route path='/Profile' render={()=><ProfileContent postData={state.postData} newPost={newPost}/>} />
          <Route path='/Messages' render={()=><MessagesContent messagesData={state.messagesData}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;