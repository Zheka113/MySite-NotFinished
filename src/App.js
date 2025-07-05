import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HeaderContent from './Components/Header/Header';
import MessagesContent from './Components/Messages/Messages';
import NavBarContent from './Components/NavBar/NavBar';
import ProfileContent from './Components/Profile/Profile';
import FirstPage from './Components/FirstPage/FirstPage';

function App({state, newPost, updatePostText}) {
  return (
    <BrowserRouter>
      <div className="mainBox">
        <HeaderContent />
        <NavBarContent />
        <div className='routedContent'>
          <Route exact path='/' element={<FirstPage/>} />
          <Route path='/Profile' element={<ProfileContent 
          postData={state.profilePage.postData} 
          newPostText={state.profilePage.newPostText} 
          newPost={newPost}
          updatePostText={updatePostText}/>} />
          <Route path='/Messages' element={<MessagesContent 
          messagesData={state.messagesData}
          dialogsData={state.dialogsData}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;