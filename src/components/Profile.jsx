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
import jobData from '../jobData'

export default function Profile(props) {
    // state is information from the server
    const [message, setMessage] = useState('')
    const [filter,setFilter] = useState('applied')
    const [jobList,setJobList] = useState(jobData)
    const [selected,setSelected] = useState(null)
    const [action,setAction] = useState('view')

    // values passed through to writable form
    const [company,setCompany] = useState('')
    const [jobURL,setJobURL] = useState('')
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [notes,setNotes] = useState('')
    const [dateApplied,setDateApplied] = useState('')
    const [priority,setPriority] = useState('')
    const [status,setStatus] = useState('')

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
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, { headers: authHeaders })
                // set state with the data from the server
                setMessage(response.data.msg)
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

        setAction('create')
        setSelected(null)

        setFilter(filter)
        setAction('view')
        let filteredJobs = jobData.filter(job => job.status === filter)
        setJobList(filteredJobs)
    }

    const handleJobCardClick = (id) => {
        setAction('view')
        setSelected(id)
    }

    const showNewJobForm = () => {
        setAction('create')
        setSelected(null)
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
            selectedJobPane = <JobDetail showUpdateJobForm={showUpdateJobForm} job={ jobList.find( job => job.id === selected) }/>
        } else if(action === 'update') {
            selectedJobPane = <UpdateJob 
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
        selectedJobPane = <NewJob />
    }
    
    return(
        <div id="profile">
        <Container id="menubarLand">
            <Button id="createbtn" onClick={ showNewJobForm }>Create New Card</Button>
            <Row id="menuItems">
                <Col id="menubar">
                
                    <Menubar  handleMenuClick={ handleMenuClick } />
                </Col>

                <Col id="profileBody">
                    <JobList jobData={jobList} handleJobCardClick= { handleJobCardClick }/>
                </Col>
                <Col id="profileBody">
                    {selectedJobPane}
                </Col>
            </Row>
        </Container>
        </div>
    )
}