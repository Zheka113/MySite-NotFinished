import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HeaderContent from './Components/Header/Header';
import MessagesContent from './Components/Messages/Messages';
import NavBarContent from './Components/NavBar/NavBar';
import ProfileContent from './Components/Profile/Profile';
import FirstPage from './Components/FirstPage/FirstPage';

function App({ header, navbar, profile, state, newPost, updatePostText }) {
  return (
    <BrowserRouter>
      <div className="mainBox">
        <HeaderContent />
        <NavBarContent />
        <div className='routedContent'>
          <Route exact path='/' render={()=><FirstPage/>} />
          <Route path='/Profile' render={()=><ProfileContent 
          postData={state.profilePage.postData} 
          newPostText={state.profilePage.newPostText} 
          newPost={newPost}
          updatePostText={updatePostText}/>} />
          <Route path='/Messages' render={()=><MessagesContent messagesData={state.messagesData}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;