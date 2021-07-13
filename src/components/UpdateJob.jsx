import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { DatePicker } from "react-bootstrap-date-picker"
import axios from "axios"
import Login from "./Login"

export default function UpdateJob(props) {
    handleChange: function(value, formattedValue) {
        this.setState({
          value: value, 
          formattedValue: formattedValue 
        });
      },
      componentDidUpdate: function(){
        // Access ISO String and formatted values from the DOM.
        const hiddenInputElement = document.getElementById("example-datepicker");
        console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
        console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
      },


  
    // redirect if there is no user in state
    if(!props.currentUser) return <Redirect to='/login' component={ Login } currentUser={ props.currentUser } />
    return(
        <Form>
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
  <FormGroup>
      <ControlLabel>Label</ControlLabel>
      <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
      <HelpBlock>Help</HelpBlock>
    </FormGroup>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Priority:</Form.Label>
    <Form.Control as="select">
      <option>Top Priority</option>
      <option>Interested</option>
      <option>It's Okay</option>
      <option>Interested</option>
    </Form.Control>
  </Form.Group>
  
</Form>
    )
}