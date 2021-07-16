import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import Welcome from "./Welcome"
import JobList from './JobList'
import Menubar from './Menubar'
import JobDetail from "./JobDetail"
import NewJob from './NewJob'
import UpdateJob from './UpdateJob'
import { Container, Row, Col, Button } from 'react-bootstrap'

// bring in mock job data -- to be replaced with db later
// import jobData from '../jobData'

export default function Profile(props) {
    // state is information from the server
    const [message, setMessage] = useState('')
    const [filter,setFilter] = useState(null)
    const [jobList,setJobList] = useState([])
    const [filteredJobList,setFilteredJobList] = useState([])
    const [selected,setSelected] = useState(null)
    const [action,setAction] = useState('view')

    // values passed through to writable form
    const [company,setCompany] = useState('')
    const [jobURL,setJobURL] = useState('')
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [notes,setNotes] = useState('')
    const [dateApplied,setDateApplied] = useState('')
    const [priority,setPriority] = useState('High')
    const [status,setStatus] = useState('Applied')

    // hit the auth locked route on the backend
    useEffect(() => {
        const getPrivateMessage = async () => {
            try {
                // get the jwt from local storage
                const token = localStorage.getItem('jwtToken')

                // makeup the auth headers
                const authHeaders = {
                    Authorization: token
                }

                // hit the auth locked endpoint
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/jobs`, { headers: authHeaders })
                // set state with the data from the server
                setJobList(response.data.jobs)
                setFilteredJobList(response.data.jobs)
                // console.log(jobList)
            } catch (err) {
                console.log(err)
                //log the user out if an error occurs
                props.handleLogout()
            }
        }
        getPrivateMessage()

    }, [props])
    // redirect if there is no user in state
    if(!props.currentUser) return <Redirect to='/' component={ Welcome } currentUser={ props.currentUser } />

    // handlers and utils

    const handleMenuClick = (filter) => {
        // filter list of jobs by status

        setSelected(null)

        setFilter(filter)
        setAction('view')
        let filteredJobs = jobList.filter(job => job.status === filter)
        setFilteredJobList(filteredJobs)
    }

    const handleJobCardClick = (job) => {
        setAction('view')
        setSelected(job)
    }

    const handleJobCreate = async () => {

        // make job object
        const newJob = {
            title: title,
            company: company,
            description: description,
            jobURL: jobURL,
            notes: notes,
            priority: priority,
            status: status,
            dateApplied: dateApplied
        }

        // make post request
        const token = localStorage.getItem('jwtToken')

        // makeup the auth headers
        const authHeaders = {
            Authorization: token
        }
        // hit the auth locked endpoint
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/jobs`, {job: newJob}, { headers: authHeaders})

        // add to state jobList
        setJobList([...jobList, response.data.job])
        // update filters and action
        setAction('view')
        let filteredJobs = []
        if(filter) {
            filteredJobs = jobList.filter(job => job.status === filter)
            if(status === filter) filteredJobs.push(response.data.job)
        } else {
            filteredJobs = [...jobList, response.data.job]
            console.log("not filtering")
        }
        console.log(filteredJobs)
        setFilteredJobList(filteredJobs)
    }

    const handleJobUpdate = async () => {

        selected.title = title
        selected.company = company
        selected.description = description
        selected.jobURL = jobURL
        selected.notes = notes
        selected.priority = priority
        selected.status = status
        selected.dateApplied = dateApplied

        const token = localStorage.getItem('jwtToken')

        // makeup the auth headers
        const authHeaders = {
            Authorization: token
        }
        // hit the auth locked endpoint
        const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/jobs`, {job: selected }, { headers: authHeaders})

        setAction('view')
        let filteredJobs = []
        if(filter) {
            filteredJobs = jobList.filter(job => job.status === filter)
        } else {
            filteredJobs = jobList  
        }
        setFilteredJobList(filteredJobs)
    }

    const handleJobDelete = async () => {
        const token = localStorage.getItem('jwtToken')

        // makeup the auth headers
        const authHeaders = {
            Authorization: token
        }
        // hit the auth locked endpoint
        const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/jobs`, { headers: authHeaders , data: {jobId: selected._id }})

        // remove job in state
        let i = jobList.findIndex(job => job._id === selected._id)
        jobList.splice(i, 1)
        
        setSelected(null)

        setAction('create')
        let filteredJobs = []
        if(filter) {
            filteredJobs = jobList.filter(job => job.status === filter)
        } else {
            filteredJobs = jobList
        }
        setFilteredJobList(filteredJobs)  
    }

    const showNewJobForm = () => {
        setAction('create')
        setSelected(null)
        setCompany('')
        setJobURL('')
        setTitle('')
        setDescription('')
        setNotes('')
        setDateApplied('')
        setPriority('High')
        setStatus('Applied')
    }

    const showUpdateJobForm = (job) => {
        setAction('update')
        setSelected(job)
        setCompany(job.company)
        setJobURL(job.jobURL)
        setTitle(job.title)
        setDescription(job.description)
        setNotes(job.notes)
        setDateApplied(job.dateApplied)
        setPriority(job.priority)
        setStatus(job.status)
    }



    // display pane logic 

    let selectedJobPane

    if(selected) {
        if(action === 'view'){
            selectedJobPane = <JobDetail showUpdateJobForm={showUpdateJobForm} job={ selected }/>
        } else if(action === 'update') {
            selectedJobPane = <UpdateJob 
            handleJobUpdate={handleJobUpdate}
            handleJobDelete={handleJobDelete}

            job={ selected } 

            company={company} setCompany={setCompany}
            jobURL={jobURL} setJobURL={setJobURL}
            title={title} setTitle={setTitle}
            description={description} setDescription={setDescription}
            notes={notes} setNotes={setNotes}
            dateApplied={dateApplied} setDateApplied={setDateApplied}  
            priority={priority} setPriority={setPriority}
            status={status} setStatus={setStatus}
            />
        }

    } else {
        selectedJobPane = <NewJob
         handleJobCreate={handleJobCreate} 
         
         job={ selected } 

         company={company} setCompany={setCompany}
         jobURL={jobURL} setJobURL={setJobURL}
         title={title} setTitle={setTitle}
         description={description} setDescription={setDescription}
         notes={notes} setNotes={setNotes}
         dateApplied={dateApplied} setDateApplied={setDateApplied}  
         priority={priority} setPriority={setPriority}
         status={status} setStatus={setStatus}
         />
    }
    
    return(
        <div id="profile">
        <div id="menubarLand">
            <Row>
                <Col lg={3}>
                    <div className="create-btn">
                        <Button id="createbtn" onClick={ showNewJobForm }>Create New Card</Button>
                    </div>
                    <div id="menubar">
                        <Menubar handleMenuClick={ handleMenuClick } />
                    </div>
                </Col>

               <Col lg={3} id="jobCards">
                    <JobList jobData={filteredJobList} handleJobCardClick= { handleJobCardClick }/>

                </Col>
                <Col lg={5} id="jobDetail">
                    {selectedJobPane}
                </Col>
            </Row>
        </div>
        </div>
    )
}