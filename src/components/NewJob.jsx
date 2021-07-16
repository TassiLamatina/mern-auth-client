import { Form, Button } from "react-bootstrap"
// import axios from "axios"



export default function NewJob(props) {

    // TRACKING USER 
    // redirect if there is no user in state
    return(
        <>
            <Form.Group controlId="exampleForm.ControlInput1" className="mb-2">
                {/* <Form.Label>Company</Form.Label> */}
                <Form.Control type="company" placeholder="Company Name" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1" className="mb-2">
                {/* <Form.Label>Job Url</Form.Label> */}
                <Form.Control type="jobUrl" placeholder="Job URL" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1" className="mb-2">
                {/* <Form.Label>Job Title</Form.Label> */}
                <Form.Control type="jobTiltle" placeholder="Job Title" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-2">
                {/* <Form.Label>Job Description</Form.Label> */}
                <Form.Control as="textarea" rows={3} placeholder="Job Description"/>
            </Form.Group>

             <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-3">
                {/* <Form.Label>Notes</Form.Label> */}
                <Form.Control as="textarea" rows={3} placeholder="Notes"/>
            </Form.Group>
            <div className="start-date">
                <label className="mb-3 px-1" id="calendar" for="start">Start date:</label>
                <input className="mb-3" type="date" id="start" name="trip-start"
                    value="2021-07-15"
                    min="2018-01-01" max="2035-12-31"/>  
            </div>       
            
            <Form.Group controlId="exampleForm.ControlSelect1" className="mb-2">
                {/* <Form.Label>Priority:</Form.Label> */}
                <Form.Control as="select">
                    <option>Top Priority</option>
                    <option>Interested</option>
                    <option>It's Okay</option>
                    <option>Interested</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1" className="mb-3">
                <Form.Label>Status:</Form.Label>
                <Form.Control as="select">
                    <option>Applied</option>
                    <option>To Apply</option>
                    <option>Interviewed</option>
                    <option>Rejected</option>
                </Form.Control>
            </Form.Group>
            <div className="create-btn">
                <Button id="createCard">Submit</Button>
            </div>
            
        </>
    )
}