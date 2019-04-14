import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'
import { Button } from './../StyledComponents/Buttons'
import { Input } from './../StyledComponents/Inputs'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '', 
      email: '',
      password: '',
      // isAdmin: false, 
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
    const { first, last, email, password, company, logo } = this.state
    const res = await axios.post('/auth/register', { first, last, email, password, company, logo })
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
    return (
      <div className="body">
        <div className="content">
          <form className="register-form" onSubmit={() => this.register()}>
            <h2>SIGN UP</h2>
            <Input type="text" name="first" placeholder="First Name" value={this.state.first} onChange={this.handleChange}/>

            <Input type="text" name="last" placeholder="Last Name" value={this.state.last} onChange={this.handleChange}/>

            <Input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>

            <Input type="text" name="password" placeholder="Create Password" value={this.state.password} onChange={this.handleChange}/>

            <Input type="text" name="company" placeholder="Company Name" value={this.state.company} onChange={this.handleChange}/>

            <Input type="text" name="logo" placeholder="Company Logo" value={this.state.logo} onChange={this.handleChange}/>
            <input type="submit" value="Register" />
          </form>  
          <div className="login">
          <h2>Login</h2>
            <Input secondary type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>

            <Input secondary type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>

            {/* <Input secondary type="checkbox" name="isAdmin" value={this.state.isAdmin} onChange={() => this.setState({isAdmin: !this.state.isAdmin}) } /> */}

            <Button primary onClick={() => this.login()}>Login</Button>
          </div>
        </div>
      </div>
    )
  }
}