// import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
// import axios from "axios"
import Login from "./Login"

export default function UpdateJob(props) {
    console.log(props.job)
    // TRACKING USER 
    // redirect if there is no user in state
    return(
        <div>
            update card
            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Company</Form.Label> */}
                <Form.Control type="company" placeholder={props.job.company} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Job Url</Form.Label> */}
                <Form.Control type="jobUrl" placeholder="Job URL" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Job Title</Form.Label> */}
                <Form.Control type="jobTiltle" placeholder="Job Title" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                {/* <Form.Label>Job Description</Form.Label> */}
                <Form.Control as="textarea" rows={3} placeholder="Job Description"/>
            </Form.Group>

             <Form.Group controlId="exampleForm.ControlTextarea1">
                {/* <Form.Label>Notes</Form.Label> */}
                <Form.Control as="textarea" rows={3} placeholder="Notes"/>
            </Form.Group>

            <label id="calendar" for="start">Start date:</label>
            <input type="date" id="start" name="trip-start"
                value="2021-07-15"
                min="2018-01-01" max="2035-12-31"/>          
            
            <Form.Group controlId="exampleForm.ControlSelect1">
                {/* <Form.Label>Priority:</Form.Label> */}
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
                    <option>To Apply</option>
                    <option>Interviewed</option>
                    <option>rejected</option>
                </Form.Control>
                <Button id="updateCard" variant="secondary">Update Card</Button>
            </Form.Group>
            
        
        </div>
    )
}