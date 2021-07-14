import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'

const JobList = (props) => {

    // render each job from JobList.js
    const renderedJobs = props.jobData.map(job => {
        return(
            <li key={`${job.id}`}>
                <button onClick={() => props.handleJobCardClick(job.id)}>{job.title}</button>
            </li>
        )
    })

    return(
        <div>
            <div className='header'>
                <h2>jobs cards</h2>
            </div>
            <ul className='list'>
                {renderedJobs}
            </ul>
        </div>
    )
}
export default JobList