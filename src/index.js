import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postData = [
    {text:'My first post', like:"5"},
    {text:'Do you like music?', like:"7"},
    {text:'It is a logo by Sportify', like:"15"},
    {text:'I can better', like:"9"},
    {text:'Belive me', like:"0"}
]

ReactDOM.render(<App postData={postData} />, document.getElementById('root'));