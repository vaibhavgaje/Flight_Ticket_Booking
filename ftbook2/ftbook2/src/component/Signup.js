import React, { useState, useEffect } from 'react';
import Navbar from './layout/Navbar'
import Footer from '../component/Footer'
import 'bootstrap';
import './css/form.css';
import { useNavigate } from 'react-router-dom';
import UserFunctions from '../Axios/UserAxios';


export default function Signup() {
    const initialValues = { firstname: "", lastname: "", email: "", passport_number: "", gender: "", role: "", aadhar_number: "", registered_or_not: "", password: "", confirmpassowrd: "", mobilenumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [gender, setGender] = useState();
    const navigate = useNavigate();
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

        const UserRegister = {
            FirstName: formValues.firstname,
            LastName: formValues.lastname,
            Mobile: formValues.mobilenumber,
            Password: formValues.password,
            Email: formValues.email,
            Role: "User",
            // Role: "Admin",
            PassportDetails: formValues.passport_number,
            Gender: gender,
            AadharDetails: formValues.aadhar_number,
            RegisteredOrNot: true,
        };
        console.log(UserRegister);

        UserFunctions.registerUser(UserRegister).then((res) => {
           console.log(res.data)
            if(res.data === 'Failed'){
                alert("Fill all details")
            } else if(res.data === 'Data Posted Successfully'){
                alert("Signup Successfull..!!")
                navigate('/login');
            }else {
                alert("Fill all details perfectly")
            }

        });
    };

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{3}$/i;
        const regex1 = /^[a-zA-Z_\.]+[@#$%&*]+[0-9]/;
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
        if (!values.password) {
            errors.password = "Password is required!";
        } else if ((values.password.length < 4) || (values.password.length > 10)) {
            errors.password = "Password should be 4 to 10 character";
        } else if (!regex1.test(values.password)) {
            errors.password = "Password should contain one small, capital, special chracter and number";
        }
        if (!values.confirmpassowrd) {
            errors.confirmpassowrd = "Confirm Password is required!";
        } else if (!(values.password === values.confirmpassowrd)) {
            errors.confirmpassowrd = "Password and Confirm Password is not match";
        }
        if (!values.mobilenumber) {
            errors.mobilenumber = "Mobile Number is required!";
        } else if (!validMobileNumberRegEx.test(values.mobilenumber)) {
            errors.mobilenumber = "This is not a valid Mobile number";
        }
        return errors;
    }


    return (
        <div><Navbar />
            <div className="container">
                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className='ui message success'>Signed in successfully</div>
            ) : (
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )} */}
                <div className={'row'}>
                    <div className={'card col-4'} id={'formbody'}>
                        <div class="card-body" id={'lsbody'}>
                            <form onSubmit={handleSubmit}>
                                <h1>Signup</h1>

                                <div className="ui form">
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
                                            <fieldset><legend>Passport Number
                                                <input type='text' className={'form-control'} name='passport_number'
                                                    placeholder='Passport Number' value={formValues.passport_number}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'red' }}>{formErrors.passport_number}</p>
                                            </legend>

                                            </fieldset>
                                        </div>
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
                                            <fieldset><legend>Confirm Password
                                                <input type='password' className={'form-control'} name='confirmpassowrd'
                                                    placeholder='Confirm Password' value={formValues.confirmpassowrd}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'red' }}>{formErrors.confirmpassowrd}</p>
                                            </legend>

                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className={'row justify-content-around'}>
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
                                     
                                    </div>

                                  


                                    <div className={'col-12'}>
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

                                    <div className={'row justify-content-around'}>
                                        <div className={'col-6'}>
                                            <button disabled={formValues.aadhar_number === ""}><h2>Register</h2> </button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
