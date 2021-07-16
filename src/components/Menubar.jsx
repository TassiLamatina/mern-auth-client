import { Nav } from 'react-bootstrap'

export default function Menubar(props) {
    // set which link is selected 
    let key
    if (props.filter === null) {
        key = 'show-all'
    } else if (props.filter === 'Applied') {
        key = 'applied'
    } else if (props.filter === 'To Apply') {
        key = 'to-apply'
    } else if (props.filter === 'Interviewed') {
        key = 'interviewed'
    } else if (props.filter === 'Rejected') {
        key = 'rejected'
    } else if (props.filter === 'Archive') {
        key = 'archive'
    }

    return(
        <div id= "menubar1">
            <div className='menuTitle'>
                <h2>Your Jobs</h2>
            </div>
            <div id="jobFilterBtn">
                <Nav activeKey={key} className='flex-column'>
                    <Nav.Link eventKey='show-all' onClick={e => props.handleMenuClick(null)}>Show All</Nav.Link>
                    <Nav.Link eventKey='applied' onClick={e => props.handleMenuClick('Applied')}>Applied</Nav.Link>
                    <Nav.Link eventKey='to-apply' onClick={e => props.handleMenuClick('To Apply')}>To Apply</Nav.Link>
                    <Nav.Link eventKey='interviewed' onClick={e => props.handleMenuClick('Interviewed')}>Interviewed</Nav.Link>
                    <Nav.Link eventKey='rejected' onClick={e => props.handleMenuClick('Rejected')}>Rejected</Nav.Link>
                    <Nav.Link eventKey='archive' onClick={e => props.handleMenuClick('Archive')}>Archive</Nav.Link>
                </Nav>
            </div>
        </div>
    )
}