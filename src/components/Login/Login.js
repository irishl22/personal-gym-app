import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'
import { Button, UploadButton } from './../StyledComponents/Buttons'
import { Input } from './../StyledComponents/Inputs'
import { v4 as randomString } from 'uuid';
import Dropzone from 'react-dropzone';

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
      loginEmail: '',
      loginPassword: '',
      url: 'http://via.placeholder.com/450x450'
    }
  } 

  getSignedRequest = ([file]) => {
    this.setState({ isUploading: true });
   
    const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;

    
    axios
      .get('/api/signs3', {
        params: {
          'file-name': fileName,
          'file-type': file.type,
        },
      })
      .then(response => {
        const { signedRequest, url } = response.data;
        this.uploadFile(file, signedRequest, url);
      })
      .catch(err => {
        console.log(err);
      });
  };

  uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };

    axios
      .put(signedRequest, file, options)
      .then(response => {
        this.setState({ isUploading: false, url });
      })
      .catch(err => {
        this.setState({
          isUploading: false,
        });
        if (err.response.status === 403) {
          alert(
            `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
              err.stack
            }`
          );
        } else {
          alert(`ERROR: ${err.status}\n ${err.stack}`);
        }
      });
  };


  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value 
    })
  }

  async register() {
    const { first, last, email, password, company, url } = this.state
    const res = await axios.post('/auth/register', { first, last, email, password, company, url })
    if (res.data.loggedIn) this.props.history.push('/dashboard')
    else alert('Registration Failed')
    
}

  async login() {
      const { loginEmail, loginPassword } = this.state
      const res = await axios.post('/auth/login', { loginEmail, loginPassword })
      if (res.data.loggedIn) this.props.history.push('/dashboard')
      else alert('Login failed')
  }



  render() {
    console.log(this.state.url)
    const { url } = this.state
    return (
      <div className="body">
      <div className="logo-box">
        <h5>TRAINER PORT</h5>
      </div>
        <div className="content">
          <form className="register-form" >
            <h2>SIGN UP</h2>
            <Input type="text" name="first" placeholder="First Name" value={this.state.first} onChange={this.handleChange}/>

            <Input type="text" name="last" placeholder="Last Name" value={this.state.last} onChange={this.handleChange}/>

            <Input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>

            <Input type="text" name="password" placeholder="Create Password" value={this.state.password} onChange={this.handleChange}/>

            <Input type="text" name="company" placeholder="Company Name" value={this.state.company} onChange={this.handleChange}/>

            {/* <Input type="text" name="logo" placeholder="Company Logo" value={this.state.logo} onChange={this.handleChange}/> */}

            <div className="image-upload">
        <img src={url} alt="" width="50px" />

        <Dropzone
          onDropAccepted={this.getSignedRequest}
          style={{
            position: 'relative',
            width: 200,
            height: 200,
            borderWidth: 7,
            marginTop: 100,
            borderColor: 'rgb(102, 102, 102)',
            borderStyle: 'dashed',
            borderRadius: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 28,
          }}
          accept="image/*"
          multiple={false}
        >
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()}/>
              <UploadButton>Upload Logo</UploadButton>
            </div>
          </section>
    )}
        </Dropzone>
      </div>

            <Button onClick={() => this.register()}>Register</Button>
          </form>  
          <div className="login">
          <h2>Login</h2>
            <Input secondary type="text" name="loginEmail" placeholder="Email" value={this.state.loginEmail} onChange={this.handleChange}/>
            <Input secondary type="text" name="loginPassword" placeholder="Password" value={this.state.loginPassword} onChange={this.handleChange}/>
            <Button primary onClick={() => this.login()}>Login</Button>
          </div>
        </div>
      </div>
    )
  }
}