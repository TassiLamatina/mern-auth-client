import { Link } from 'react-router-dom'
import{ Navbar }from 'react-bootstrap'

// require("react-bootstrap/lib/NavbarHeader")

export default function NewNavbar(props) {

    
    // console.log(props.currentUser.name)
    // console.log('the props of Navbar:', props)
    // if the user is logged in
    const loggedIn = (
        <>
        <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Clambr</Navbar.Brand>
            <Link to="/">
                Home  
            </Link>   
            <Link to="/">
                <span onClick={props.handleLogout}>  Logout! </span>
            </Link>
            <Link to="/profile">           
                  Profile  
            </Link>
            <Link to="/login">
                  Login  
            </Link>

            <Link to="/register">
                 New Account!
            </Link>               
            <Navbar.Collapse className="justify-content-end">                  
            <Navbar.Text pullRight>
            <img src="https://img.icons8.com/material-outlined/48/000000/user-male-circle.png"/>
            Hi  {props.currentUser ? props.currentUser.name : ""} !
            {console.log(props.currentUser)}
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>  
    </>
    )
    // if the user is logged out
    const loggedOut = (
        <>
            
        </>
    )
    return(
        <nav>
            {props.currentUser ? loggedIn : loggedOut}
        </nav>
    )
}