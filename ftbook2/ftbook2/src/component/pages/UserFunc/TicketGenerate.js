

import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/UNavbar'
import Footer from '../../Footer'
import '../../css/form.css';
import ADashMenuBar from '../AdminDashMenubar';
import { useNavigate } from 'react-router-dom';
import CustomerFunctions from '../../../Axios/CustomerAxios';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UDashMenuBar from '../../pages/UserDashMenubar';
import { Card, CardTitle, CardGroup, CardBody, Row, Col, Form } from 'reactstrap';
import 'bootstrap';


// const { Id } = useParams();
export default function TicketGenerate() {

    const user = sessionStorage.getItem('user')
    const temp = JSON.parse(user)

    return (
        <>
            <Navbar />
            <div className='py-5'>
                <Row>
                    <Col md={2}>
                        <div>
                            <UDashMenuBar />
                        </div>
                    </Col>
                    <Col>
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'card col-6'} id={'formbody1'}>
                                    <div class="card-body">
                                        <form id='info'>
                                            <div className={'row justify-content-around'}>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Name : {temp.firstName} {temp.lastName}</legend></fieldset>
                                                </div>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Mobile No : {temp.mobile}</legend></fieldset>
                                                </div>
                                            </div>
                                            <div className={'row justify-content-around'}>
                                            <div className={'col-6'}>
                                                    <fieldset><legend>Email : {temp.email}</legend></fieldset>
                                                </div>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Gender : {temp.gender}</legend></fieldset>
                                                </div>
                                            </div>
                                            <div className={'row justify-content-around'}>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Aadhar No : {temp.aadharDetails}</legend></fieldset>
                                                </div>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Passport No : {temp.passportDetails}</legend></fieldset>
                                                </div>
                                            </div>
                                          
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div></Col>
                </Row>
            </div>
        </>);
}
