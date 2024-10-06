
import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/ANavbar'
import Footer from '../../Footer'
import ADashMenuBar from '../AdminDashMenubar';
// import { useNavigate, useParams} from 'react-router-dom';
import { useParams, useSearchParams } from "react-router-dom";
import { Card, CardTitle, CardGroup, CardBody, Row, Col, Form } from 'reactstrap';
import AdminFunctions from '../../../Axios/AdminAxios';
import { faTrashCan, faEdit, faUserEdit, faFileEdit, faPlaneArrival, faPlaneDeparture, faPlusCircle, faPlaneCircleExclamation,
     faClockRotateLeft, faPlaneLock, faRoad, faPersonWalkingWithCane, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Row, Col } from 'reactstrap';
import { useNavigate} from 'react-router-dom';
import 'bootstrap';
import axios from 'axios'
import '../../css/form.css';


// const { Id } = useParams();

export default function Viewflightdetail() {

    const [params, setParams] = useSearchParams();
    let Id = params.get("Id")

    const navigate = useNavigate()
    // axios.get(`http://localhost:5000/api/FlightDetail/${Id}`).then(res => 
    // {
    //     console.log('Hii'+res.data);
    // })

   const [viewFlightDetails, setViewFlightDetails] = useState([])
   const [viewClassDetails, setviewClassDetails] = useState([])
//    const [viewFlightSheduleDetails, setviewFlightSheduleDetails] = useState([])
    AdminFunctions.viewflightdetails(Id).then(res => {
        console.log(res.data);
       // console.log(res.data.company_name)
        // console.log(res.data.flightScheduleDetail.from)
        //  console.log(res.data.classDetail.business_class_capacity)
        

         setViewFlightDetails(res.data)
         setviewClassDetails(res.data.classDetail)
    //   setviewFlightSheduleDetails(res.data.flightScheduleDetail)
         
    })
//  console.log(viewFlightDetails.company_name)
//  console.log(viewFlightSheduleDetails.from)
//  console.log(viewClassDetails.business_class_capacity)
    // useEffect(() => {
      
    // }, [])

     return (
        <>
            <Navbar />

            <div className='py-5'>

                <Row>
                    <Col md={2}>
                        <div>
                            <ADashMenuBar />
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
                                    <Card body inverse color="primary" className="text-center">
                                        <CardTitle tag="h4">Business</CardTitle>
                                        <CardBody>
                                        <fieldset><legend><FontAwesomeIcon icon={faPersonWalkingWithCane} fontSize={20}/> Capacity : {viewClassDetails.businessClassCapacity}</legend></fieldset>
                                        <fieldset><legend><FontAwesomeIcon icon={faSackDollar} fontSize={20}/> Price : {viewClassDetails.businessClassPrice}</legend></fieldset>
                                    </CardBody>
                                    </Card>&nbsp;
                                    <Card body inverse color="primary" className="text-center">
                                        <CardTitle tag="h4">Premium</CardTitle>
                                        <CardBody>
                                        {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                        <fieldset><legend><FontAwesomeIcon icon={faPersonWalkingWithCane} fontSize={20}/> Capacity : {viewClassDetails.premiumClassCapacity}</legend></fieldset>
                                        <fieldset><legend><FontAwesomeIcon icon={faSackDollar} fontSize={20}/> Price : {viewClassDetails.premiumClassPrice}</legend></fieldset>
                                    </CardBody>
                                    </Card>&nbsp;
                                    <Card body inverse color="primary" className="text-center">
                                        <CardTitle tag="h4">Premium Economy</CardTitle>
                                        <CardBody>
                                        {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                        <fieldset><legend><FontAwesomeIcon icon={faPersonWalkingWithCane} fontSize={20}/> Capacity : {viewClassDetails.premiumEconomyClassCapacity}</legend></fieldset>
                                        <fieldset><legend><FontAwesomeIcon icon={faSackDollar} fontSize={20}/> Price : {viewClassDetails.premiumEconomyClassPrice}</legend></fieldset>
                                    </CardBody>
                                    </Card>&nbsp;
                                    <Card body inverse color="primary" className="text-center">
                                        <CardTitle tag="h4">Economy</CardTitle>
                                        <CardBody>
                                        {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                        <fieldset><legend><FontAwesomeIcon icon={faPersonWalkingWithCane} fontSize={20}/> Capacity : {viewClassDetails.economyClassCapacity}</legend></fieldset>
                                        <fieldset><legend><FontAwesomeIcon icon={faSackDollar} fontSize={20}/> Price : {viewClassDetails.economyClassPrice}</legend></fieldset>
                                    </CardBody>
                                    </Card>&nbsp;&nbsp;
                                    
                                </CardGroup>
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col md={8}><div className='row'>
                                <div className={'col-2'}>
                                <button className='btn w-10 btn-danger btn-outline' onClick={()=>navigate(`/deleteflights?Id=${viewFlightDetails.flightDetailId}`)}>
                                            <p><FontAwesomeIcon icon={faTrashCan} fontSize={25} /></p></button>
                                       
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
