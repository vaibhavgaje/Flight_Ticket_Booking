import React, { Component } from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';
import '../css/appbar.css'
import 'bootstrap';
import { FaXing,FaRegUserCircle,FaUserPlus,FaKeybase } from "react-icons/fa";
export default class Appbar extends Component{
    render(){
        return(
           
              <Navbar expand="lg">
  <Container>
  
    <Navbar.Brand className='text-white fs-4 title ' href="/"> <FaXing/> FlyEarly</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto ">
        <Nav.Link className='text-white fs-4 button1' id='link' href="/login"> <FaRegUserCircle/> LogIn</Nav.Link>
        <Nav.Link className='text-white fs-4 button2' id='link' href="/register"><FaUserPlus/>SignUp</Nav.Link>
        {/* <Nav.Link className='text-white fs-4 button3' id='link' href="/aboutus"><FaKeybase/>About Us</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
           
        );
    }
}