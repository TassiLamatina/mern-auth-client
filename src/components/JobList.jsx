import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'


// test onClick function
    // const clicked = () => {
    //     console.log('you clicked a job')
    // }

const JobList = (props) => {
    // render each job from JobList.js
    const renderedJobs = props.jobData.map(job => {
        return(
            <li key={`${job.id}`}>
                <button onClick={props.handleJobCardClick}>{job.title}</button>
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
            <JobDetail />
        </div>
    )
}
export default JobList