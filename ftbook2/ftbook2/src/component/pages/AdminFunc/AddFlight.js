import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/ANavbar'
import Footer from '../../Footer'
import ADashMenuBar from '../AdminDashMenubar';
import 'bootstrap';
import '../../css/form.css';
import { useNavigate } from 'react-router-dom';
import { faPlaneArrival, faPlaneDeparture, faPlusCircle, faPlaneCircleExclamation, faClockRotateLeft, faPlaneLock, faRoad, faPersonWalkingWithCane, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminFunctions from '../../../Axios/AdminAxios';
import { Card, CardTitle, CardGroup, CardBody, Row, Col, Form } from 'reactstrap';

export default function AddFlight() {
    const initialValues = { firstname: "", lastname: "", email: "", password: "", confirmpassowrd: "", mobilenumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const User = sessionStorage.getItem('user');
    const temp = JSON.parse(User);
    if (temp.email == null) {
        alert('Need to login First')
        navigate('/login');
    };
    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validate(formValues));

    };

    useEffect(() => {
        //console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues.username);
            // console.log(formValues.email);
            // console.log(formValues.password);
        }
    }, [formErrors]);


    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormErrors(validate(formValues));
        setIsSubmit(true);

        const ClassDetail = {
            BusinessClassCapacity: formValues.bcapacity,
            BusinessClassPrice: formValues.bprice,
            PremiumClassCapacity: formValues.pcapacity,
            PremiumClassPrice: formValues.pprice,
            PremiumEconomyClassCapacity: formValues.pecapacity,
            PremiumEconomyClassPrice: formValues.peprice,
            EconomyClassCapacity: formValues.ecapacity,
            EconomyClassPrice: formValues.eprice,

        };
        // const FlightSchedual = {
        //     From: formValues.from,
        //     To: formValues.to,
        //     DepartureTime: formValues.departure_time,
        //     ArrivalTime:formValues.arrival_time,
        //     Distance: formValues.distance, 
        // }
        const AddFlightDetails = {
            CompanyName: formValues.companyname,
            FlightNumber: formValues.flightnumber,
            From: formValues.from,
            To: formValues.to,
            DepartureTime: formValues.departure_time,
            ArrivalTime: formValues.arrival_time,
            Distance: formValues.distance,
            ClassDetail: ClassDetail,
        };
        console.log(AddFlightDetails);

        AdminFunctions.addflight(AddFlightDetails).then((res) => {
            //console.log("error"+res.data.data);

            alert("Flight Added Successfully..!!")
            navigate('/admindash');
        });
    };


    const validate = (values) => {
        const errors = {}
        const validNameRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/i;
        // const regex1 = /^[a-zA-Z_\.]+[@#$%&*]+[0-9]/;
        // const validNameRegEx1 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
        // const validMobileNumberRegEx = /^\s*([0-9][\s-]*){10}\s*$/g;
        // const validNumberRegEx = /^\s*([0-9][\s-]*)\s*$/g;
        if (!values.companyname) {
            errors.companyname = "Company Name is required!";
        } else if (!validNameRegEx.test(values.companyname)) {
            errors.companyname = "This is not a valid company name";
        }
        if (!values.flightnumber) {
            errors.flightnumber = "Flight Number is required!";
        }
        if (!values.bcapacity) {
            errors.bcapacity = "Capacity is required!";
        } if (!values.bprice) {
            errors.bprice = "Price is required!";
        }
        if (!values.pcapacity) {
            errors.pcapacity = "Capacity is required!";
        } if (!values.pprice) {
            errors.pprice = "Price is required!";
        }
        if (!values.pecapacity) {
            errors.pecapacity = "Capacity is required!";
        } if (!values.peprice) {
            errors.peprice = "Price is required!";
        }
        if (!values.ecapacity) {
            errors.ecapacity = "Capacity is required!";
        } if (!values.eprice) {
            errors.eprice = "Price is required!";
        }
        if (!values.from) {
            errors.from = "Source is required!";
        }
        if (!values.to) {
            errors.to = "Destination is required!";
        }
        if (!values.departure_time) {
            errors.departure_time = "Time is required!";
        }
        if (!values.arrival_time) {
            errors.arrival_time = "Time is required!";
        }
        if (!values.distance) {
            errors.distance = "Distance is required!";
        }
        return errors;
    }


    return (
        <div><Navbar />

            <div className='py-5'>

                <Row>
                    <Col md={2}>
                        <div>
                            <ADashMenuBar />
                        </div>
                    </Col><Col>
                        <Col>
                            <CardGroup>
                                <Card body inverse color="secondary" className="text-center">
                                    <CardBody>



                                        <fieldset>  <p> <FontAwesomeIcon icon={faPlaneLock} fontSize={25} /></p>
                                            <legend>Company Name

                                                <input type='text' className={'form-control'} name='companyname'
                                                    placeholder='Company Name' value={formValues.companyname}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.companyname}</p>
                                            </legend>
                                        </fieldset>
                                    </CardBody>
                                </Card>&nbsp;

                                <Card body inverse color="secondary" className="text-center">
                                    <CardBody>
                                        <fieldset> <p><FontAwesomeIcon icon={faPlaneCircleExclamation} fontSize={25} /></p>

                                            <legend>Flight Number
                                                <input type='text' className={'form-control'} name='flightnumber'
                                                    placeholder='Flight Number' value={formValues.flightnumber}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.flightnumber}</p>
                                            </legend>
                                        </fieldset>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>

                        <br></br>
                        <Row>

                            <Col>
                                <CardGroup>
                                    <Card body inverse color="secondary" className="text-center">
                                        <CardTitle tag="h4">Business Class</CardTitle>
                                        <CardBody>
                                            {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                            <fieldset><legend>Capacity
                                                <p> <FontAwesomeIcon icon={faPersonWalkingWithCane} fontSize={20} /></p>
                                                <input type='number' className={'form-control'} name='bcapacity'
                                                    placeholder='Capacity' value={formValues.bcapacity}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.bcapacity}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                        <CardBody>
                                            {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                            <fieldset><legend>Price
                                                <p> <FontAwesomeIcon icon={faSackDollar} fontSize={20} /></p>

                                                <input type='number' className={'form-control'} name='bprice'
                                                    placeholder='Price' value={formValues.bprice}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.bprice}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                    </Card>&nbsp;
                                    <Card body inverse color="secondary" className="text-center">
                                        <CardTitle tag="h4">Premium Class</CardTitle>
                                        <CardBody>
                                            {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                            <fieldset><legend>Capacity
                                                <p> <FontAwesomeIcon icon={faPersonWalkingWithCane} fontSize={20} /></p>
                                                <input type='number' className={'form-control'} name='pcapacity'
                                                    placeholder='Capacity' value={formValues.pcapacity}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.pcapacity}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                        <CardBody>
                                            {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                            <fieldset><legend>Price
                                                <p> <FontAwesomeIcon icon={faSackDollar} fontSize={20} /></p>

                                                <input type='number' className={'form-control'} name='pprice'
                                                    placeholder='Price' value={formValues.pprice}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.pprice}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                    </Card>&nbsp;
                                    <Card body inverse color="secondary" className="text-center">
                                        <CardTitle tag="h4">Premium Economy Class</CardTitle>
                                        <CardBody>
                                            {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                            <fieldset><legend>Capacity
                                                <p> <FontAwesomeIcon icon={faPersonWalkingWithCane} fontSize={20} /></p>
                                                <input type='number' className={'form-control'} name='pecapacity'
                                                    placeholder='Capacity' value={formValues.pecapacity}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.pecapacity}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                        <CardBody>
                                            {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                            <fieldset><legend>Price
                                                <p> <FontAwesomeIcon icon={faSackDollar} fontSize={20} /></p>

                                                <input type='number' className={'form-control'} name='peprice'
                                                    placeholder='Price' value={formValues.peprice}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.peprice}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                    </Card> &nbsp;
                                    <Card body inverse color="secondary" className="text-center">
                                        <CardTitle tag="h4">Economy Class</CardTitle>
                                        <CardBody>
                                            {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                            <fieldset><legend>Capacity

                                                <p> <FontAwesomeIcon icon={faPersonWalkingWithCane} fontSize={20} /></p>


                                                <input type='number' className={'form-control'} name='ecapacity'
                                                    placeholder='Capacity' value={formValues.ecapacity}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.ecapacity}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                        <CardBody>
                                            {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                            <fieldset><legend>Price
                                                <p> <FontAwesomeIcon icon={faSackDollar} fontSize={20} /></p>

                                                <input type='number' className={'form-control'} name='eprice'
                                                    placeholder='Price' value={formValues.eprice}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.eprice}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row><br></br>

                        <Row>
                            <Col>
                                <CardGroup>
                                    <Card body inverse color="secondary" className="text-center">
                                        <CardBody>
                                            {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                            <fieldset><legend>From
                                                <p> <FontAwesomeIcon icon={faPlaneDeparture} fontSize={20} /></p>

                                                <input type='text' className={'form-control'} name='from'
                                                    placeholder='From' value={formValues.from}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.from}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                    </Card>&nbsp;
                                    <Card body inverse color="secondary" className="text-center">
                                        <CardBody>
                                            {/* <p><FontAwesomeIcon icon={faPlane} fontSize={25} /></p> */}

                                            {/* <CardTitle tag="h5">{this.state.totalflight}</CardTitle> */}
                                            <fieldset><legend>To
                                                <p> <FontAwesomeIcon icon={faPlaneArrival} fontSize={20} /></p>

                                                <input type='text' className={'form-control'} name='to'
                                                    placeholder='To' value={formValues.to}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.to}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col>
                                <CardGroup>
                                    <Card body inverse color="secondary" className="text-center">
                                        <CardBody>
                                            {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                            <fieldset><legend>Departure Time
                                                <p> <FontAwesomeIcon icon={faClockRotateLeft} fontSize={20} /></p>

                                                <input type='time' className={'form-control'} name='departure_time'
                                                    placeholder='Departure Time' value={formValues.departure_time}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.departure_time}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                    </Card>&nbsp;
                                    <Card body inverse color="secondary" className="text-center">
                                        <CardBody>
                                            {/* <p><FontAwesomeIcon icon={faPlane} fontSize={25} /></p> */}

                                            {/* <CardTitle tag="h5">{this.state.totalflight}</CardTitle> */}
                                            <fieldset><legend>Arrival Time
                                                <p> <FontAwesomeIcon icon={faClockRotateLeft} fontSize={20} /></p>

                                                <input type='time' className={'form-control'} name='arrival_time'
                                                    placeholder='Arrival Time' value={formValues.arrival_time}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.arrival_time}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                    </Card>&nbsp;
                                    <Card body inverse color="secondary" className="text-left">
                                        {/* <Card body inverse color="secondary" className="primary"> //for opacity to this card */}
                                        <CardBody>
                                            {/* <p> <FontAwesomeIcon icon={faUserCircle} fontSize={25}/></p> */}
                                            <fieldset><legend>Distance
                                                <p> <FontAwesomeIcon icon={faRoad} fontSize={20} /></p>

                                                <input type='number' className={'form-control'} name='distance'
                                                    placeholder='Distance in KM' value={formValues.distance}
                                                    onChange={handleChange}

                                                />
                                                <p style={{ color: 'orange' }}>{formErrors.distance}</p>
                                            </legend>
                                            </fieldset>
                                        </CardBody>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <div className={'row justify-content-around'}>
                                    <div className={'col-6'}>
                                        <button disabled={formValues.distance === ""} onClick={handleSubmit}><h2>
                                            <p> <FontAwesomeIcon icon={faPlusCircle} fontSize={25} /></p>
                                            Add Flight</h2></button>
                                    </div>
                                </div></Col>
                        </Row>
                    </Col></Row>
                <br></br>
            </div><Footer />
        </div>
    );
}
