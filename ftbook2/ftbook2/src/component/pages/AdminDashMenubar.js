import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { faHome, faUsers, faPlaneUp, faPlaneCircleExclamation, faGauge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Footer from '../Footer';
// import ANavbar from '../layout/ANavbar';
 const ADashMenuBar = () => {
    return(
        <div >
            <ListGroup id={'lsbody'}>
                <ListGroupItem  >
                    <NavLink className={'nav-link'} exact to='/admindash'>
                    <h5>
                    <p> <FontAwesomeIcon icon={faGauge} fontSize={40}/></p>
                        <p>Admin Dashboard</p>
                        </h5>
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem 
               
                style={{
                    display: 'flex',
                    justifyContent: 'left'
                }}>
                    <NavLink className={'nav-link'} exact to='/addflight'>
                        <Button  color='info'>
                        <p> <FontAwesomeIcon icon={faPlaneUp} fontSize={25}/></p>
                            Add Flight
                            <i></i>
                        
                        </Button>
                    </NavLink>
                </ListGroupItem>
                
                <ListGroupItem 
                style={{
                    display: 'flex',
                    justifyContent: 'left'
                }}>
                    <NavLink className={'nav-link'} exact to='/viewusers'>
                        <Button  color='primary'>
                        <p> <FontAwesomeIcon icon={faUsers} fontSize={25}/></p>
                            View Users
                            <i></i>
                         
                        </Button>
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem 
                style={{
                    display: 'flex',
                    justifyContent: 'left'
                }}>
                    <NavLink className={'nav-link'} exact to='/viewflights'>
                        <Button  color='secondary'>
                        <p> <FontAwesomeIcon icon={faPlaneCircleExclamation} fontSize={25}/></p>
                            View Flights
                            <i></i>
                           
                        </Button>
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem 
                style={{
                    display: 'flex',
                    justifyContent: 'left'
                }}>
                    <NavLink className={'nav-link'} exact to='/turnover'>
                        <Button  color='success'>
                        <p> <FontAwesomeIcon icon={faPlaneCircleExclamation} fontSize={25}/></p>
                           Annual Report
                            <i></i>
                    
                        </Button>
                    </NavLink>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
 }
 export default ADashMenuBar