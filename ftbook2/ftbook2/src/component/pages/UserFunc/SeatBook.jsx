
import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/ANavbar'
import { Button, Dropdown } from 'react-bootstrap';
import Footer from '../../Footer'
import UDashMenuBar from '../UserDashMenubar';
import { useNavigate } from 'react-router-dom';
import AdminFunctions from '../../../Axios/AdminAxios';
import { Row, Col } from 'reactstrap';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap';
import '../../css/form.css';

export default function SeatBook() {

    return (
        <div><Navbar />

            <div className='py-5'>

                <Row>
                    <Col md={2}>
                        <div>
                            <UDashMenuBar />
                        </div>
                    </Col><Col md={2}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select Class
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/bseatdisplay">Business Class</Dropdown.Item>
                                <Dropdown.Item href="/pseatdisplay">Premium Class</Dropdown.Item>
                                <Dropdown.Item href="/peseatdisplay">Premium Economy Class</Dropdown.Item>
                                <Dropdown.Item href="/eseatdisplay">Economy Class</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        </div>

    )

}


