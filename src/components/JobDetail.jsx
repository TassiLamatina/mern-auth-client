
// test data -- to be replaced with passed props.job
const test =
    {
        id: 1,
        title: 'ceo',
        company: 'Amazon',
        jobURL: 'www.Amazon/jobs/324',
        description: 'Body copy 18, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        notes: 'interviewer was nice and we talked about visiting the Amazon',
        dateApplied: '3/2/2021',
        priority: 'high'
    }


const JobDetail = () => {
    return(
        <div className='border'>
            <div className='header'>
                <h2>Title: {test.title}</h2>
            </div>
            <div className='desc'>
                <strong>{test.company}</strong>
                <br></br>
                {test.jobURL}
                <br></br>
                <small>{test.description}</small>
                <br></br>
                <strong>Notes: </strong><small>{test.notes}</small>
                <br></br>
                <strong>Date Applied: {test.dateApplied}</strong>
                <br></br>
                Priority: {test.priority}
            </div>
        </div>
    )
}
export default JobDetail