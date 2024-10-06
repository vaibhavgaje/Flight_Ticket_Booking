import React, { Component } from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';
import '../css/appbar.css'
import 'bootstrap';
import { NavLink } from 'react-router-dom';
import { faHome, faUsers, faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FaXing,FaRegUserCircle,FaUserPlus,FaKeybase } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'reactstrap';
function UDashNavbar(){
    
   const onLogout=()=>{
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('fbook');
    sessionStorage.removeItem('seatno');
    alert('You have been logout');
  };
        return(
              <Navbar  expand="lg">
  <Container>
  <Navbar.Brand className='text-white fs-4 title ' href="/"> <FaXing/> FlyEarly</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto ">
      <NavLink className={'nav-link'} exact to='/userdash'>
                <Button color={'primary'} >
                <p><FontAwesomeIcon icon={faHome} fontSize={25} /></p>
                    Home
                </Button>
            </NavLink>
            <NavLink className={'nav-link'} exact to='/'>
                <Button color={'secondary'} onClick={onLogout}>
                <p><FontAwesomeIcon icon={faSignOutAlt} fontSize={25} /></p>
                    Logout
                </Button>
            </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
           
        );
    }
export default UDashNavbar;

