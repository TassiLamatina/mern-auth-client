import { Nav } from 'react-bootstrap'

export default function Menubar(props) {
    return(
        <Nav defaultActiveKey='applied' className='flex-column'>
            <Nav.Link eventKey='applied' onClick={props.handleMenuClick('applied')}>Applied</Nav.Link>
            <Nav.Link eventKey='to-apply' onClick={props.handleMenuClick('to-apply')}>To Apply</Nav.Link>
            <Nav.Link eventKey='interviewed' onClick={props.handleMenuClick('interviewed')}>Interviewed</Nav.Link>
            <Nav.Link eventKey='rejected' onClick={props.handleMenuClick('rejected')}>Rejected</Nav.Link>
        </Nav>
    )
}