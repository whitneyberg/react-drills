import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      filterString: '',
      names:  ['Whitney', 'Jax', 'Josh', 'Thomas', 'Debbie']
    }
  }

    handleChange = (filter) => {
      this.setState({filterString: filter })
    }
  

    
    render() {
      let dislpaysName = this.state.names
        .filter((el, i) => {
          return el.includes(this.state.filterString);
        })
        .map((el, i) => {
          return <h2 key={i}>{el}</h2>;
        });
  
      return (
        <div className="App">
          <input onChange={e => this.handleChange(e.target.value)} type="text" />
          {dislpaysName}
        </div>
      
      );
    }
}
  
   

export default App;
