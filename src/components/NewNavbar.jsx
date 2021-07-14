import { Link } from 'react-router-dom'
import{ Navbar, Container, Col }from 'react-bootstrap'


// require("react-bootstrap/lib/NavbarHeader")

export default function NewNavbar(props) {

    
    // console.log(props.currentUser.name)
    // console.log('the props of Navbar:', props)
    // if the user is logged in
    const loggedIn = (
        <>
        <Navbar expand="lg">
            <Col md={10}>
            <Navbar.Brand id="clambr">Clambr</Navbar.Brand>
            </Col>
            <Col md={2}>              
                <p>Hi {props.currentUser ? props.currentUser.name : ""}!</p>
                {console.log(props.currentUser)}  
                <img src="https://img.icons8.com/material-outlined/48/000000/user-male-circle.png" alt="person-icon"/>
                <Link to="/">
                    <span onClick={props.handleLogout}>Logout</span>
                </Link> 
            </Col>
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