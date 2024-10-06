import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { faPlaneCircleExclamation, faUser, faGauge, faFile, faBank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Footer from '../Footer';
// import ANavbar from '../layout/ANavbar';
 const UDashMenuBar = () => {
    return(
        <div>
            <ListGroup id={'lsbody'}>
                <ListGroupItem>
                    <NavLink className={'nav-link'} exact to='/userdash'>
                    <h5>
                    <p> <FontAwesomeIcon icon={faGauge} fontSize={40}/></p>
                        
                        <p>User Dashboard</p>
                        </h5>
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem 
                style={{
                    display: 'flex',
                    justifyContent: 'left'
                }}>
                    <NavLink className={'nav-link'} exact to='/viewprofile'>
                        <Button color='info'>
                        <p> <FontAwesomeIcon icon={faUser} fontSize={25}/></p>
                        View Profile
                            <i></i>
                            {/* Flight */}
                        </Button>
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem 
                style={{
                    display: 'flex',
                    justifyContent: 'left'
                }}>
                    <NavLink className={'nav-link'} exact to='/udatatable'>
                        <Button color='primary'>
                        <p> <FontAwesomeIcon icon={faPlaneCircleExclamation} fontSize={25}/></p>
                        View Flights
                            <i></i>
                            {/* Flight */}
                        </Button>
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem 
                style={{
                    display: 'flex',
                    justifyContent: 'left'
                }}>
                    <NavLink className={'nav-link'} exact to='/bookinghistry'>
                        <Button color='secondary'>
                        <p> <FontAwesomeIcon icon={faFile} fontSize={40}/></p>
                     
                        Booking Hitory
                            <i></i>
                            {/* Flight */}
                        </Button>
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem 
                style={{
                    display: 'flex',
                    justifyContent: 'left'
                }}>
                    <NavLink className={'nav-link'} exact to='/addbank'>
                        <Button color='info'>
                        <p> <FontAwesomeIcon icon={faBank} fontSize={40}/></p>
                     Add Bank Detail
                            <i></i>
                            {/* Flight */}
                        </Button>
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    
                </ListGroupItem>
            </ListGroup>
        </div>
    )
 }
 export default UDashMenuBar