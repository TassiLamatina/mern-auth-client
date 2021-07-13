import Profile from './Profile.jsx'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect } from 'react-router-dom'


import {
    useState,
    useEffect
  } from 'react'

  
export default function Welcome(props) {

    // state for the controlled from  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for flash message from the server
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        try {
          e.preventDefault()
          console.log('do axios call!')
          // post to the backend with axios
          const requestBody = {
            email: email,
            password: password
          }
          console.log('my server url:', process.env.REACT_APP_SERVER_URL)
          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, requestBody)
          
          console.log(response)
          // destructure the response
          const { token } = response.data
          
          // save the response to localstorage
          localStorage.setItem('jwtToken', token)
    
          // decode the jwt token before we put it in state
          const decoded = jwt.decode(token)
    
          // set the user in App.js's state
          props.setCurrentUser(decoded)
        } catch (err) {
          if(err.response.status === 400) {
            setMessage(err.response.data.msg)
          } else  {
            console.dir(err)
          }
        }
      }
    
      if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={ props.currentUser } />
      console.log("hit me")

    return(
        <div className="container-fluid"> 
            <div className="row vh-100">
                <div className="col-xs-12 col-md-8 pb-5-xs splash text-center">
                    <img className="img-fluid" src="https://placedog.net/600/600" alt="" />
                </div>
                <div className="col-xs-12 col-md-4 form">
                    <form onSubmit={handleSubmit} id="sign-in">
                        <div className="pt-5 mb-3">
                            <label className="form-label">SIGN IN:</label>
                            <input onChange={e => setEmail(e.target.value) } className="form-control" value={email} type="text" name="username" placeholder="Username or email"/>
                        </div>
                        <div className="mb-4 text-center">
                            <input onChange={e => setPassword(e.target.value) } className="form-control mb-3" value={password} type="password" name="password" placeholder="Password"/>
                            <input className="sign-in-submit" type="submit"></input>
                        </div>
                    </form>
                    <p>{message} </p>
                    <div className="account text-center">
                        <p>Don't have an account?</p>
                        <button type="button" className="create-acc">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}