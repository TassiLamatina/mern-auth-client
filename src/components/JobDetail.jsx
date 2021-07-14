
// test data -- to be replaced with passed props.job
const test =
    {
        id: 1,
        title: 'ceo',
        salary: '1000000',
        priority: 'high'
    }


const JobDetail = () => {
    console.log(test.title)

    return(
        <div className='border'>
            <div className='header'>
                <h2>Selected Job Position: {test.title}</h2>
            </div>
            <div className='desc'>
                ${test.salary}
                <br></br>
                Priority: {test.priority}
            </div>
        </div>
    )
}
export default JobDetail