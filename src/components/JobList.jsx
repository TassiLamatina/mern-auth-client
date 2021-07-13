import { Link } from 'react-router-dom'

jobs[
    [
        id: 1,
        title: 'ceo',
        salary: '1000000',
        priority: 'high',
    ]
    [
        id: 2,
        title: 'cfo',
        salary: '1',
        priority: 'low',
    ]
    [
        id: 3,
        title: 'software dev',
        salary: '100',
        priority: 'high',
    ]
]




const JobList = () => {
    const renderedLinks = jobs.map(job => {
        return(
            <li key={`${job.id}`}>
                <Link to={`/job/${job.id}`}>{job.title}</Link>
            </li>
        )
    })

    return(
        <div>
            <div className='header'>
                <h2>jobs cards</h2>
            </div>
            <ul className='list'>
                {renderedLinks}
            </ul>
        </div>
    )
}
export default JobList