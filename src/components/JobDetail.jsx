import { Button } from "react-bootstrap"

const JobDetail = (props) => {
    console.log(props)
    return(
        <div className="detailBox">
            <div className="header">
                <h2>Title: {props.job.title}</h2>
            </div>
            <div className="desc pb-3">
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
            </div>
            <Button className="updateCardBtn" onClick={() => props.showUpdateJobForm(props.job) }>Update Card</Button>
        </div>
    )
}
export default JobDetail