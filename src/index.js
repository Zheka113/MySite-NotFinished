import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { rerander, newPost, updatePostText } from './redux/State';
//import { rerenderSite } from './rerenderSite';

let rerenderSite = () =>{
    ReactDOM.render(
            <App state={state} newPost={newPost} updatePostText={updatePostText} />, document.getElementById('root')
    );
}

rerander(rerenderSite)

rerenderSite()

// ReactDOM.render(
//         <App state={state} newPost={newPost} updatePostText={updatePostText} />, document.getElementById('root')
// );