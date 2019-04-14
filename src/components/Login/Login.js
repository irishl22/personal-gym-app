import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '', 
      email: '',
      password: '',
      isAdmin: false, 
      company: '', 
      logo: ''
    }
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value 
    })
  }

  async register(e) {
    e.preventDefault()
    const { first, last, email, password, isAdmin, company, logo } = this.state
    const res = await axios.post('/auth/register', { first, last, email, password, isAdmin, company, logo })
    if (res.data.loggedIn) this.props.history.push('/dashboard')
    else alert('Registration Failed')
}

async login() {
    const { email, password } = this.state
    const res = await axios.post('/auth/login', { email, password })
    if (res.data.loggedIn) this.props.history.push('/dashboard')
    else alert('Login failed')
}
  render() {
    console.log(this.state.isAdmin)
    return (
      <div>
        <form onSubmit={() => this.register()}>
          <input type="text" name="first" placeholder="First Name" value={this.state.first} onChange={this.handleChange}/>

          <input type="text" name="last" placeholder="Last Name" value={this.state.last} onChange={this.handleChange}/>

          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>

          <input type="text" name="password" placeholder="Create Password" value={this.state.password} onChange={this.handleChange}/>

          <input type="text" name="company" placeholder="Company Name" value={this.state.company} onChange={this.handleChange}/>

          <input type="text" name="logo" placeholder="Company Logo" value={this.state.logo} onChange={this.handleChange}/>
          <input type="submit" value="Register" />
        </form>  
        
        <div className="login">
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>

          <input type="text" name="password" placeholder="Create Password" value={this.state.password} onChange={this.handleChange}/>

          <input type="checkbox" name="isAdmin" value={this.state.isAdmin} onChange={() => this.setState({isAdmin: !this.state.isAdmin}) } />

          <button onClick={() => this.login()}>Login</button>
        </div>
      </div>
    )
  }
}


