
import React, { useState, useEffect } from 'react';
import Navbar from '../../../layout/UNavbar'
import Footer from '../../../Footer'
import UDashMenuBar from '../../UserDashMenubar';
import { useParams, useSearchParams } from "react-router-dom";
import { Card, CardGroup, CardBody, Row, Col, Form } from 'reactstrap';
import CustomerFunctions from '../../../../Axios/CustomerAxios';
import { faBackward, faPlaneDeparture, faClockRotateLeft, faPlaneLock, faRoad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate} from 'react-router-dom';
import 'bootstrap';
import '../../../css/form.css'


// const { Id } = useParams();

export default function ViewBookingHistory() {

    const [params, setParams] = useSearchParams();
    // let Id = params.get("Id")
    let Id2 = params.get("Id2")

    console.log('id2= '+Id2)
    const navigate = useNavigate()
    // axios.get(`http://localhost:5000/api/FlightDetail/${Id}`).then(res => 
    // {
    //     console.log('Hii'+res.data);
    // })

   const [viewFlightDetails, setViewFlightDetails] = useState([])
   const [viewBookingDetails, setviewBookingDetails] = useState([])
//    const [viewFlightSheduleDetails, setviewFlightSheduleDetails] = useState([])
    // CustomerFunctions.viewflightdetails(Id).then(res => {
    //     console.log(res.data);
    //    // console.log(res.data.company_name)
    //      setViewFlightDetails(res.data)
    // })

    CustomerFunctions.viewbookingdetail(Id2).then(res => {
        console.log(res.data);
       // console.log(res.data.company_name)
       setviewBookingDetails(res.data)
       setViewFlightDetails(res.data.flightDetail)
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/bookinghistry')

    }

     return (
        <>
            <Navbar />

            <div className='py-5'>

                <Row>
                    <Col md={2}>
                        <div>
                            <UDashMenuBar />
                        </div>
                    </Col><Col>
                        <Col>
                            <CardGroup>
                                <Card body inverse color="primary" className={'text-top'}>
                                    <CardBody>
                                        <p> <FontAwesomeIcon icon={faPlaneLock} fontSize={25} /></p>
                                        <fieldset><legend>Company Name : {viewFlightDetails.companyName}</legend></fieldset>
                                        <fieldset><legend>Flight Number : {viewFlightDetails.flightNumber}</legend></fieldset>
                                    </CardBody>
                                </Card>&nbsp;
                                <Card body inverse color="primary" className="text-center">
                                    <CardBody>
                                    <p> <FontAwesomeIcon icon={faPlaneDeparture} fontSize={20}/></p>
                                   
                                        <fieldset><legend>Destination : {viewFlightDetails.to}</legend></fieldset>
                                        <fieldset><legend>Source : {viewFlightDetails.from}</legend></fieldset>
                                        
                                    </CardBody>
                                </Card>&nbsp;&nbsp;
                            </CardGroup>
                        </Col>
                        <br></br>
                        <Row><Col>
                        <CardGroup>
                                <Card body inverse color="primary" className={'text-top'}>
                                    <CardBody>
                                        <p> <FontAwesomeIcon icon={faClockRotateLeft} fontSize={20}/></p>
                                   
                                        <fieldset><legend>Departure Time : {viewFlightDetails.departureTime}</legend></fieldset>
                                         </CardBody>
                                </Card>&nbsp;
                                <Card body inverse color="primary" className={'text-top'}>
                                    <CardBody>
                                    <p> <FontAwesomeIcon icon={faClockRotateLeft} fontSize={20}/></p>
                                     <fieldset><legend>Arrival Time : {viewFlightDetails.arrivalTime}</legend></fieldset>
                                    </CardBody>
                                </Card>&nbsp;
                                <Card body inverse color="primary" className={'text-top'}>
                                    <CardBody>
                                    <p> <FontAwesomeIcon icon={faRoad} fontSize={20}/></p>
                                   <fieldset><legend>Distance : {viewFlightDetails.distance}</legend></fieldset>
                                        </CardBody>
                                </Card>&nbsp;&nbsp;
                            </CardGroup>
                        </Col></Row>

                        <br/>

                        <Row>

                            <Col>
                                <CardGroup>
                                <Card body inverse color="primary" className={'text-top'}>
                                    <CardBody>
                                        <p> <FontAwesomeIcon icon={faClockRotateLeft} fontSize={20}/></p>
                                   
                                        <fieldset><legend>Date : {viewBookingDetails.date}</legend></fieldset>
                                         </CardBody>
                                </Card>&nbsp;
                                <Card body inverse color="primary" className={'text-top'}>
                                    <CardBody>
                                    <p> <FontAwesomeIcon icon={faClockRotateLeft} fontSize={20}/></p>
                                     <fieldset><legend>Class : {viewBookingDetails.selectedClass}</legend></fieldset>
                                    </CardBody>
                                </Card>&nbsp;
                                <Card body inverse color="primary" className={'text-top'}>
                                    <CardBody>
                                    <p> <FontAwesomeIcon icon={faRoad} fontSize={20}/></p>
                                   <fieldset><legend>Fare Detail : {viewBookingDetails.fareDetails}</legend></fieldset>
                                        </CardBody>
                                </Card>&nbsp;&nbsp;
                                    
                                </CardGroup>
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col md={8}><div className='row'>
                                <div className={'col-2'}>
                                <button className='btn w-10 btn-danger btn-outline' onClick={handleSubmit}>
                                            <p><FontAwesomeIcon icon={faBackward} fontSize={25} /></p></button>
                                       
                                </div>
                               </div>
                                </Col>
                                     
                        </Row>
                    </Col></Row>
        </div> 
            <Footer />
        </>
     )
}
