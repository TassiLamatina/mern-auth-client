const Job = (props) => {
    // console.log(props)
    // const renderedJobs = props.jobs.map(job => {
    //     return(
    //         <li key={`${job.id}`}>
    //             <Link to={`${props.match.url}/member/${person.id}`}>{person.name}</Link>
    //         </li>
    //     )
    // })

    return(
        <div>
            <div className='header'>
                <h2>{props.title}</h2>
            </div>
            <div className='desc'>
                {props.salary}
                {props.priority}
            </div>
        </div>
    )
}
export default Job