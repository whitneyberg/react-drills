import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
    
            this.state = {
                username: '',
                password: ''
            }
    }

handleChange1 = (name) => {
    this.setState({username: name})
}

handleChange2 = (pass) => {
    this.setState({password: pass})
}

handleLogin = () => {
    alert (`Username: ${this.state.username} Password: ${this.state.password}`)
}

render(){
    return(
    <div>
        <input onChange = { e => this.handleChange1(e.target.value)} type = 'text' />
        <input onChange = {e => this.handleChange2(e.target.value)} type = 'text' />
        <button onClick = {this.handleLogin}>Login</button>

    </div>
     ) }
}

export default Login