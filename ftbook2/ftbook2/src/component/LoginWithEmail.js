import React, { useState, useEffect } from 'react';
import 'bootstrap';
import './css/form.css';
import Navbar from '../component/layout/Navbar';
import { Nav, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import UserFunctions from '../Axios/UserAxios';


function LoginWithEmail() {
    const initialValues = { email: "", OTP: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validate(formValues));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("OTP has been sent to your mail")
        // setFormErrors(validate(formValues));
        setIsSubmit(true);


        const emailLogin = {
            emailDTO: formValues.email,
        };
        UserFunctions.loginwithemail(emailLogin).then((res) => {
            sessionStorage.setItem('user', JSON.stringify(res.data));
           
        });
    };

    const handlesubmit = (e) =>{
        e.preventDefault();
        setIsSubmit(true);
        const User = sessionStorage.getItem('user');
        const temp = JSON.parse(User);
        
        if(temp != formValues.OTP){
            alert('Enter OTP correctly')
           
        }else if(temp == formValues.OTP){
            alert('Welcome '+ formValues.email)
            navigate('/visitordetail')
        }else{
            alert('Something wrong..!!')
            navigate('/login')
        }
    }

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            //console.log(formErrors.username);
         
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // const regex1 = /^[A-Z]+[a-z]+[@#$%&*]+[0-9]+/;
        const regex1 = /^[a-zA-Z_\.]+[@#$%&*]+[0-9]/;
        // const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
        // const regex = /[a-z0-9_\.]+[@][a-z]+[\.][a-z]{2,3}/
        //https://stackoverflow.com/questions/41348459/regex-in-react-email-validation
        //https://www.computerhope.com/unix/regex-quickref.htm#:~:text=Regular%20expressions%20(shortened%20as%20%22regex,and%20the%20text%20editor%20vim.

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format";
        }
        if (!values.OTP) {
            errors.password = "OTP is required!";
        } 
        return errors;
    };
    return (
        <><Navbar />
            <div className={'container'}>
             
                <div className={'row'}>
                    <div className={'card col-4'} id={'formbody'}>
                        <div class="card-body" id={'lsbody'}>
                            <form onSubmit={handleSubmit}>
                                <h1>Login</h1>
                                <div className="ui form">
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
                                        <div className={'row justify-content-around'}>
                                        <div className={'col-6'}>
                                            <button disabled={formValues.email === ""} onClick={handleSubmit}><h2>Send OTP</h2></button>
                                        </div>
                                    </div>
                                    </div>

                                    <div className={'row justify-content-around'}>
                                        <div className={'col-6'}>
                                            <fieldset><legend>Enter OTP
                                                <input type="password" name="OTP"
                                                    className={'form-control'}
                                                    placeholder="Password" value={formValues.OTP}
                                                    onChange={handleChange}
                                                />
                                                <p style={{ color: 'red' }}>{formErrors.OTP}</p>
                                            </legend>

                                            </fieldset>
                                        </div>

                                    </div>
                                     <div className={'row justify-content-around'}>
                                        <div className={'col-6'}>
                                            <button disabled={formValues.OTP === ""} onClick={handlesubmit}><h2>Login with Email</h2></button>
                                        </div>
                                    </div>
                                    
                                    {/* <Nav><Nav.Item>
                                            <Nav.Link href="/" className=''>Login with email</Nav.Link>
                                        </Nav.Item></Nav> */}
                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>

    )
}

export default LoginWithEmail;