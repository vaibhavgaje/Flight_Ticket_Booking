import React, { useState, useEffect } from 'react';
import 'bootstrap';
import './css/form.css';
import Navbar from '../component/layout/Navbar';
import { Nav, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import UserFunctions from '../Axios/UserAxios';


function Login() {
    const initialValues = { email: "", password: "" };
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
        setIsSubmit(true);


        const emailAndPass = {
            email: formValues.email,
            password: formValues.password,
        };
        UserFunctions.login(emailAndPass).then((res) => {

            sessionStorage.setItem('user', JSON.stringify(res.data));
            const User = sessionStorage.getItem('user');
            const temp = JSON.parse(User);
            console.log(temp)

            if (res.data.role === 'Admin') {
                alert('Welcome ' + temp.firstName + ' ' + temp.lastName)

                navigate('/admindash');
            } else if (res.data.role === 'User') {
                alert('Welcome ' + temp.firstName + ' ' + temp.lastName)

                navigate('/userdash');
            } else if(res.data === 'Invalid Credentials'){
                alert('Please enter Email or Password Correctly')
            }else {
                alert('Please enter Email or Password Correctly')
            }
            if(res.data === 'Invalid Credentials'){
                alert('Please enter Email or Password Correctly')
            }
            // }
        });
    };

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            //console.log(formErrors.username);

        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{3}$/i;
        const regex1 = /^[a-zA-Z_\.]+[@#$%&*]+[0-9]/;
        //https://stackoverflow.com/questions/41348459/regex-in-react-email-validation
        //https://www.computerhope.com/unix/regex-quickref.htm#:~:text=Regular%20expressions%20(shortened%20as%20%22regex,and%20the%20text%20editor%20vim.

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
        return errors;
    };
    return (
        <><Navbar />
            <div className={'container'}>
                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className='ui message success'>Signed in successfully</div>
            ) : (
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )} */}
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

                                    </div>
                                    <div className={'row justify-content-around'}>
                                        <div className={'col-6'}>
                                            <button disabled={formValues.password === ""}><h2>Login</h2></button>
                                        </div>
                                    </div>
                                    <Button variant="link" href='/loginwithemail'>Login with email</Button>
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

export default Login;