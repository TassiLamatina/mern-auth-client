// import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
// import axios from "axios"
import Login from "./Login"

export default function UpdateJob(props) {
    
    // TRACKING USER 
    // redirect if there is no user in state
    if(!props.currentUser) return <Redirect to='/login' component={ Login } currentUser={ props.currentUser } />
    return(
        <div>
        
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Company</Form.Label>
                <Form.Control type="company" placeholder="Company Name" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>jobUrl</Form.Label>
                <Form.Control type="jobUrl" placeholder="Job URL" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="jobTiltle" placeholder="Job Title" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Job Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <label for="start">Start date:</label>
            <input type="date" id="start" name="trip-start"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31"/>         
            
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Priority:</Form.Label>
                <Form.Control as="select">
                    <option>Top Priority</option>
                    <option>Interested</option>
                    <option>It's Okay</option>
                    <option>Interested</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Status:</Form.Label>
                <Form.Control as="select">
                    <option>Applied</option>
                    <option>Interviewed</option>
                    <option>Yes</option>
                    <option>No</option>
                </Form.Control>
                <Button variant="secondary">Update Card</Button>
            </Form.Group>
            
        
        </div>
    )
}