

import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/UNavbar'
import Footer from '../../Footer'
import '../../css/form.css';
import ADashMenuBar from '../AdminDashMenubar';
import { useNavigate } from 'react-router-dom';
import UserFunctions from '../../../Axios/UserAxios';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UDashMenuBar from '../../pages/UserDashMenubar';
import { Card, CardTitle, CardGroup, CardBody, Row, Col, Form } from 'reactstrap';
import 'bootstrap';



// const { Id } = useParams();
export default function ViewProfile() {
    const [userDetail, setUserDetail] = useState([]);

    const user = sessionStorage.getItem('user')
    const temp = JSON.parse(user)
    const Id = temp.systemUserDetailId

    UserFunctions.userdetail(Id).then((res) => {
        setUserDetail(res.data)
        console.log(res.data)
    });

    const navigate = useNavigate()

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
                                                    <fieldset><legend>Name : {userDetail.firstName} {userDetail.lastName}</legend></fieldset>
                                                </div>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Mobile No : {userDetail.mobile}</legend></fieldset>
                                                </div>
                                            </div>
                                            <div className={'row justify-content-around'}>
                                            <div className={'col-6'}>
                                                    <fieldset><legend>Email : {userDetail.email}</legend></fieldset>
                                                </div>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Gender : {userDetail.gender}</legend></fieldset>
                                                </div>
                                            </div>
                                            <div className={'row justify-content-around'}>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Aadhar No : {userDetail.aadharDetails}</legend></fieldset>
                                                </div>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Passport No : {userDetail.passportDetails}</legend></fieldset>
                                                </div>
                                            </div>
                                           <div className='col-4'>
                                               <button onClick={()=>navigate(`/ueditprofile`)}>Edit Profile</button>
                                           </div> 
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div></Col>
                </Row>
            </div>
            <Footer />
        </>);
}
