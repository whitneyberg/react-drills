import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      groceries: ['milk', 'butter', 'eggs', 'bread']
    }
  }



render () {
let myGroceries = this.state.groceries.map((element, index) => {
  return <h2 key={index}>{element}</h2>;
});

return <div className="App">{myGroceries}</div>;
}

}
export default App;
