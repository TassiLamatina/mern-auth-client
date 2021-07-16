import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { Row, Col, Button } from 'react-bootstrap'
import axios from "axios"

// Components
import Welcome from "./Welcome"
import JobList from './JobList'
import Menubar from './Menubar'
import JobDetail from "./JobDetail"
import NewJob from './NewJob'
import UpdateJob from './UpdateJob'

export default function Profile(props) {
    // state is information from the server
    const [filter,setFilter] = useState(null)
    const [jobList,setJobList] = useState([])
    const [filteredJobList,setFilteredJobList] = useState([])
    const [selected,setSelected] = useState(null)
    const [action,setAction] = useState('view')

    // state passed through to writable form
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
        const getUserJobs = async () => {
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
            } catch (err) {
                console.log(err)
                //log the user out if an error occurs
                props.handleLogout()
            }
        }
        getUserJobs()
    }, [props])
    // redirect if there is no user in state
    if(!props.currentUser) return <Redirect to='/' component={ Welcome } currentUser={ props.currentUser } />

// handlers and utils

    // filter list of jobs by status
    const handleMenuClick = (newFilter) => {
        setSelected(null)
        setFilter(newFilter)
        setAction('view')
        if (!newFilter) {
            setFilteredJobList(jobList)
        } else {
            let filteredJobs = jobList.filter(job => job.status === newFilter)
            setFilteredJobList(filteredJobs)
        }
    }

    // show job detail
    const handleJobCardClick = (job) => {
        setAction('view')
        setSelected(job)
    }

    // create new job
    const handleJobCreate = async () => {
        try {
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
            setFilter(response.data.job.status)
            let filteredJobs = jobList.filter(job => job.status === response.data.job.status)
            filteredJobs.push(response.data.job)
            setFilteredJobList(filteredJobs)
            setSelected(jobList[jobList.length-1])
            setCompany('')
            setJobURL('')
            setTitle('')
            setDescription('')
            setNotes('')
            setDateApplied('')
            setPriority('High')
            setStatus('Applied')
        } catch (err) {
            console.log(err)
        }
    }

    // update existing job
    const handleJobUpdate = async () => {
        try {
            // set selected job to form state
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

            // set filter to current status
            setAction('view')
            setFilter(selected.status)
            let filteredJobs = jobList.filter(job => job.status === selected.status)
            setFilteredJobList(filteredJobs)
            // reset form
            setCompany('')
            setJobURL('')
            setTitle('')
            setDescription('')
            setNotes('')
            setDateApplied('')
            setPriority('High')
            setStatus('Applied')
        } catch (err) {
            console.log(err)
        }
    }
    
    // delete exising job
    const handleJobDelete = async () => {
        try {
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
            // reset filter to show all
            setAction('create')
            setFilter(null)
            setFilteredJobList(jobList)
            // reset form
            setCompany('')
            setJobURL('')
            setTitle('')
            setDescription('')
            setNotes('')
            setDateApplied('')
            setPriority('High')
            setStatus('Applied')  
        } catch (err) {
            console.log(err)
        }
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
                    <Col md={3}>
                        <div className="create-btn">
                            <Button id="createbtn" onClick={ showNewJobForm }>Create New Card</Button>
                        </div>
                        <div id="menubar">
                            <Menubar handleMenuClick={ handleMenuClick } filter={filter}/>
                        </div>
                    </Col>

                <Col md={3} id="jobCards">
                        <JobList jobData={filteredJobList} handleJobCardClick= { handleJobCardClick }/>
                    </Col>
                    
                    <Col md={5} id="jobDetail">
                        {selectedJobPane}
                    </Col>
                </Row>
            </div>
        </div>
    )
}