import React, { useState, useEffect } from 'react';
import 'bootstrap';
import '../../css/form.css';
import UNavbar from '../../layout/UNavbar';
import UDashMenuBar from '../../pages/UserDashMenubar';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Footer from "../../Footer";
import CustomerFunctions from '../../../Axios/CustomerAxios';
import { Button } from "react-bootstrap";
import { Card, Form } from "react-bootstrap";
import PaymentModal from "./Payment/modal";
import Payment from "./Payment/Payment";

export default function AnotherBooking() {
    const initialValues = { firstname: "", lastname: "", email: "", passport_number: "", aadhar_number: "", mobilenumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const User = sessionStorage.getItem('user');
    const temp = JSON.parse(User);

    const seatno = JSON.parse(sessionStorage.getItem('seatno'));  //2
    const SeatNo = seatno - 1;
    // console.log('Current seat no= ' + seatno)


    //    const [params, setParams] = useSearchParams();
    //    let Id = params.get("Id")

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validate(formValues));
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {


        }
    }, [formErrors]);



    const [show, setShow] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const hideModal = () => {
        setShow(false);
        setIsPaymentModalOpen(false);
    };
    const toPaymentModal = () => {
        setShow(true);
        setIsPaymentModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        const AnotherBooking = {
            SystemUserDetailId: temp.systemUserDetailId,
            FirstName: formValues.firstname,
            LastName: formValues.lastname,
            Mobile: formValues.mobilenumber,
            Email: formValues.email,
            PassportNo: formValues.passport_number,
            AadharNo: formValues.aadhar_number,
        };
        console.log(AnotherBooking);
        CustomerFunctions.anotherbooking(AnotherBooking).then((res) => {

            sessionStorage.removeItem('seatno');
            sessionStorage.setItem('seatno', JSON.stringify(SeatNo));
            const seatno1 = JSON.parse(sessionStorage.getItem('seatno'));
            // alert('updated seat no= ' + seatno1)
            if (seatno1 > 1) {
                // alert('Seat No. =' + seatno1)
                navigate('/bookanother');
            } else if (seatno1 === 1) {
                // alert('Seat No. =' + seatno1)
                // navigate('/paymentpage');
                <PaymentModal show={show} handleClose={hideModal}>
                <Payment />
            </PaymentModal>
                
            } else if (seatno1 < 1) {
                // alert('Error occured during book again')
                navigate('/userdash');
            } else {
                // alert('Error occured during book again')
                navigate('/userdash');
            }
        });
    };

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/i;
        const validNameRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
        const validNameRegEx1 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
        const validMobileNumberRegEx = /^\s*([0-9][\s-]*){10}\s*$/g;

        if (!values.firstname) {
            errors.firstname = "First Name is required!";
        } else if (!validNameRegEx.test(values.firstname)) {
            errors.firstname = "This is not a valid first name";
        }
        if (!values.lastname) {
            errors.lastname = "Last name is required!";
        }
        else if (!validNameRegEx1.test(values.lastname)) {
            errors.lastname = "This is not a valid last name";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format";
        }
        if (!values.mobilenumber) {
            errors.mobilenumber = "Mobile Number is required!";
        } else if (!validMobileNumberRegEx.test(values.mobilenumber)) {
            errors.mobilenumber = "This is not a valid Mobile number";
        }
        return errors;
    }
    return (
        <>
            <UNavbar />
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
                                <div className={'card col-6'} id={'formbody2'}>
                                    <div class="card-body" id={'lsbody'}>
                                        <form id='info' onSubmit={handleSubmit}>

                                            <div className={'row justify-content-around'}>

                                                <div className={'col-6'}>
                                                    <fieldset><legend>First Name
                                                        <input type='text' className={'form-control'} name='firstname'
                                                            placeholder='Firstname' value={formValues.firstname}
                                                            onChange={handleChange}
                                                        />

                                                        <p style={{ color: 'red' }}>{formErrors.firstname}</p>
                                                    </legend>

                                                    </fieldset>
                                                </div>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Last Name
                                                        <input type='text' className={'form-control'} name='lastname'
                                                            placeholder='Lastname' value={formValues.lastname}
                                                            onChange={handleChange}
                                                        />
                                                        <p style={{ color: 'red' }}>{formErrors.lastname}</p>
                                                    </legend>
                                                    </fieldset>
                                                </div>
                                            </div>


                                            <div className={'row justify-content-around'}>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Email
                                                        <input type='email' name='email'
                                                            className={'form-control'}
                                                            placeholder="Email" value={formValues.email}
                                                            onChange={handleChange}
                                                        />


                                                        <p style={{ color: 'red' }}>{formErrors.email}</p>
                                                    </legend>

                                                    </fieldset>
                                                </div>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Mobile Number
                                                        <input type='number' className={'form-control'} name='mobilenumber'
                                                            placeholder='Mobile Number' value={formValues.mobilenumber}
                                                            onChange={handleChange}
                                                        />
                                                        <p style={{ color: 'red' }}>{formErrors.mobilenumber}</p>
                                                    </legend>

                                                    </fieldset>
                                                </div>
                                            </div>

                                            <div className={'row justify-content-around'}>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Aadhar Number
                                                        <input type='number' className={'form-control'} name='aadhar_number'
                                                            placeholder='Aadhar Number' value={formValues.aadhar_number}
                                                            onChange={handleChange}
                                                        />
                                                        <p style={{ color: 'red' }}>{formErrors.aadhar_number}</p>
                                                    </legend>

                                                    </fieldset>
                                                </div>
                                                <div className={'col-6'}>
                                                    <fieldset><legend>Passport Number
                                                        <input type='text' className={'form-control'} name='passport_number'
                                                            placeholder='Passport Number' value={formValues.passport_number}
                                                            onChange={handleChange}
                                                        />
                                                        <p style={{ color: 'red' }}>{formErrors.passport_number}</p>
                                                    </legend>

                                                    </fieldset>
                                                </div>


                                                <div className={'row justify-content-around'}>
                                                    <div className={'col-6'}>
                                                    </div>
                                                    <div className={'col-6'}>
                                                        <button disabled={SeatNo === 1}><h2>Book Ticket</h2></button>&nbsp;&nbsp;
                                                        <div>
                                                            <button hidden={SeatNo > 1} onClick={toPaymentModal}><h2>Make Payment</h2></button>
                                                            {isPaymentModalOpen && (
                                                            <PaymentModal show={show} handleClose={hideModal}>
                                                                <Payment />
                                                            </PaymentModal>
                                                        )}
                                                        </div>
                                                    </div> 
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div></Col>
                </Row>
            </div>
            <Footer />
        </>

    );


}