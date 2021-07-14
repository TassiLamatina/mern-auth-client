import { useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect, Link } from 'react-router-dom'
import Profile from './Profile.jsx'

export default function Register(props) {
  // state for the controlled from
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // state for the flash message from the server
  const [message, setMessage] = useState('')

  // function to handle form submission
  const handleSubmit = async e => {
      try {
        e.preventDefault()
        // make a request body
        const requestBody = {
            name: name,
            email: email,
            password: password
        }

        // post registration data to the server
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, requestBody)

        // take the token out of the response 
        const { token } = response.data

        // set token in local storage
        localStorage.setItem('jwtToken', token)

        // decode the token
        const decoded = jwt.decode(token)

        // set the user in the App.js state
        props.setCurrentUser(decoded)

      } catch (err) {
    // set msg if err is a 400
        if(err.response.status === 400) {
            setMessage(err.response.data.msg)
        } else {
            console.log(err)
        }
      }
    console.log('submit the form! 🌽')
  }

  // redirect if the user is logged in
if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={ props.currentUser} />

  return (
    <div>
      <div className="container-fluid"> 
        <div className="row" style={{height: "900px"}}>
            <div className="col-xs-12 col-md-8 pb-5-xs splash text-center" style={ { backgroundImage: "url(/splash.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'    
            }}>
            </div>
            <div className="col-xs-12 col-md-4 register-col">
              <p className="pt-4 px-3">REGISTER</p>
              <form className="text-center register-form" onSubmit={handleSubmit}>
                <input 
                  className="mb-3 form-control"
                  id='name-input'
                  type='text'
                  placeholder='Username'
                  onChange={e => setName(e.target.value)}
                  value={name}
                />

                <input 
                  className="mb-3 form-control"
                  id='email-input'
                  type='email'
                  placeholder='Email'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />

                <input 
                  className="form-control"
                  id='password-input'
                  type='password'
                  placeholder='Password'
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                /><br />

                <input 
                  id='account-register'
                  type='submit'
                  value='REGISTER'
                />
              </form>
            </div>
        </div>
    </div>

  </div>
  )
}