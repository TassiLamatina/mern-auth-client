import styled from "styled-components";

// styling for priority coloring
const PrioritySpan = styled.div`
background-color: ${props => {
  if(props.priority === "High"){
    return "#F97272"
  }
  else if(props.priority === "Medium"){
     return "#F9F372"
  }
     else if(props.priority === "Low"){
     return "#9DF972"
     }
     else{
       return "white"
     }
     }};
     box-shadow: 0px 12px 0px #FFFFFF;
     border-radius: 200.5381px;
`;

const JobList = (props) => {
    // render each job from JobList.js
    const renderedJobs = props.jobData.map(job => {
        return(
            <li key={`${job._id}`}>
                <button id="jobtiles" onClick={() => props.handleJobCardClick(job)}> 
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