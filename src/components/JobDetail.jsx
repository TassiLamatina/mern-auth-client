import { Button } from "react-bootstrap"

const JobDetail = (props) => {
    return(
        <div className='border'>
            <div className='header'>
                <h2>Title: {props.job.title}</h2>
            </div>
            <div className='desc'>
                <strong>{props.job.company}</strong>
                <br></br>
                {props.job.jobURL}
                <br></br>
                <small>{props.job.description}</small>
                <br></br>
                <strong>Notes: </strong><small>{props.job.notes}</small>
                <br></br>
                <strong>Date Applied: {props.job.dateApplied}</strong>
                <br></br>
                Priority: {props.job.priority}
                <br></br>
                
                <Button variant="secondary" onClick={() => props.showUpdateJobForm(props.job) }>Update Card</Button>
            </div>
        </div>
    )
}
export default JobDetail