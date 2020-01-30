import React, { Component } from 'react';
import './App.css';
import Image from './Image/Image.js';

class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <Image url = {'https://i.pinimg.com/originals/e2/1e/77/e21e77fdf526b8e8936944bc5bd4f21d.jpg'} />
      </div>

      )
    }
  }



export default App;
