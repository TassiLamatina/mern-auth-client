import styled from "styled-components";


const PrioritySpan = styled.div`
/* Adapt the colors based on primary prop */
background-color: ${props => {
  if(props.priority === "High"){
    return "red"
  }
  else if(props.priority === "Medium"){
     return "yellow"
  }
     else if(props.priority === "Low"){
     return "green"
     }
     else{
       return "white"
     }
     }};
     

`;

const JobList = (props) => {


    // render each job from JobList.js
    const renderedJobs = props.jobData.map(job => {
        return(
            <li key={`${job._id}`}>
                <button id="jobtiles" onClick={() => props.handleJobCardClick(job._id)}> 
                <PrioritySpan priority={`${job.priority}`} id="priority">{job.priority}<br></br></PrioritySpan>
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