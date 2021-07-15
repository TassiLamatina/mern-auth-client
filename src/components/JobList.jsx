
const JobList = (props) => {
    // render each job from JobList.js
    const renderedJobs = props.jobData.map(job => {
        return(
            <li key={`${job.id}`}>
                <button id="jobtiles" onClick={() => props.handleJobCardClick(job.id)}> 
                <span data-satus="{{job.priority}}" id="priority">{job.priority}<br></br></span>
                <span id="tileCompany">{job.company} <br></br></span>
                <span id="tileTile">{job.title} <br></br></span>
                <span id="tileApplied">{job.dateApplied}</span>
                </button>
                <br></br>
                <br></br>
            </li>
        )
    })

    return(
        <div>
            
            <ul className='list'>
                {renderedJobs}
            </ul>
        </div>
    )
}
export default JobList