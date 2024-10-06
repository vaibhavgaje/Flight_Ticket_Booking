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
import axios from 'axios'

export default function EditProfile() {
    const user = sessionStorage.getItem('user')
    const temp = JSON.parse(user)
    const initialValues = { firstname: temp.firstName, lastname: temp.lastName, email: temp.email, password: "", role: "", gender: "", passport_number: temp.passportDetails, aadhar_number: temp.aadharDetails, mobilenumber: temp.mobile };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [gender, setGender] = useState();

    // const user = sessionStorage.getItem('user')
    // const temp = JSON.parse(user)

const Id = temp.systemUserDetailId;
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
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        const EditProfile = {
            // Id: temp.systemUserDetailId,
            firstName: formValues.firstname,
            lastName: formValues.lastname,
            email: formValues.email,
            password: formValues.password,
            mobile: formValues.mobilenumber,
            role: temp.role,  //user role should be given
            passportDetails: formValues.passport_number,
            Gender: gender,
            aadharDetails: formValues.aadhar_number,
            registeredOrNot: true,
            bookingDetail: null,
            bankDetail: null

        };
        console.log(EditProfile);
        // CustomerFunctions.editprofile(EditProfile).then((res) => {
            http://localhost:5000/api/SystemUser/2
    axios.put(`http://localhost:5000/api/SystemUser/${Id}`, EditProfile).then((response) => {
            // alert('updated seat no= ' + seatno1)
            if (response.status === 200) {
                alert('Profile Updated Succefully')
                navigate('/userdash');
            } else {
                alert('Error occured during update')
                navigate('/userdash');
            }
        });
    };

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{3}$/i;
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
                                                        <fieldset><legend>Password
                                                            <input type="password" name="password"
                                                                className={'form-control'}
                                                                placeholder="Password" value={formValues.password}
                                                                onChange={handleChange}
                                                            />
                                                            <p style={{ color: 'red' }}>{formErrors.password}</p>
                                                        </legend>

                                                        </fieldset>
                                                    </div>
                                                    <div className={'col-6'}>
                                                        <div>&nbsp;</div>
                                                        <fieldset><legend>Gender&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <div class="form-check form-check-inline">
                                                                <input type='radio' class="form-check-input" name='gender'
                                                                    placeholder='Gender' value='Male'
                                                                    onChange={e => setGender(e.target.value)}
                                                                />
                                                                <label class="form-check-label" for="inlineRadio1"> Male</label>
                                                            </div>&nbsp;
                                                            <div class="form-check form-check-inline">
                                                                <input type='radio' class="form-check-input" name='gender'
                                                                    placeholder='Gender' value='Female'
                                                                    onChange={e => setGender(e.target.value)}
                                                                />
                                                                <label class="form-check-label" for="inlineRadio2"> Female</label>
                                                            </div>&nbsp;
                                                            <div class="form-check form-check-inline">
                                                                <input type='radio' class="form-check-input" name='gender'
                                                                    placeholder='Gender' value='Others'
                                                                    onChange={e => setGender(e.target.value)}
                                                                />
                                                                <label class="form-check-label" for="inlineRadio2"> Others</label>
                                                            </div>

                                                            <p style={{ color: 'red' }}>{formErrors.gender}</p>
                                                        </legend>
                                                        </fieldset>
                                                    </div>
                                                </div>


                                                <div className={'row justify-content-around'}>
                                                    <div className={'col-6'}>
                                                    </div>
                                                    <div className={'col-6'}>
                                                        <button disabled={formValues.password === ""}><h2>Update Profile</h2></button>&nbsp;&nbsp;

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