import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/UNavbar'
import Footer from '../../Footer'
import UDashMenuBar from '../UserDashMenubar';
import 'bootstrap';
import '../../css/form.css';
import { useNavigate } from 'react-router-dom';
import { faCodeBranch, faPlusCircle, faBank, faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomerFunctions from '../../../Axios/CustomerAxios';
import { Card, CardTitle, CardGroup, CardBody, Row, Col, Form } from 'reactstrap';

export default function AddBank() {
    const initialValues = { bankname: "", branchname: "", accountno: "", ifsc: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const User = sessionStorage.getItem('user');
    const temp = JSON.parse(User);
    // onload =() =>{
    //     const User = sessionStorage.getItem('user');
    //     const temp = JSON.parse(User);
    //     if(temp.email == null){
    //         alert('Need to login First')
    //         navigate('/login');
    //     };
    // }
   //alert(temp.systemUserDetailId)
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
     
        }
    }, [formErrors]);


    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormErrors(validate(formValues));
        setIsSubmit(true);
        const AddBankDetails = {
            // Bank_Name: formValues.bankname,
            BranchName: formValues.branchname,
            AccountNo : formValues.accountno,
            Ifsc: formValues.ifsc,
            SystemUserDetailId: temp.systemUserDetailId,

        };
        console.log(AddBankDetails);

        CustomerFunctions.addbank(AddBankDetails).then((res) => {
            //console.log("error"+res.data.data);
           console.log(res)
            alert("Bank Detail Added Successfully..!!")
            navigate('/userdash');
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
       
        if (!values.branchname) {
            errors.branchname = "Branch Name is required!";
        } else if (!validNameRegEx.test(values.bankname)) {
            errors.bankname = "This is not a valid bank name";
        } 
        if (!values.ifsc) {
            errors.ifsc = "IFSC is required!";
        }
        if (!values.accountno) {
            errors.accountno = "Account Number is required!";
        }
       
        return errors;
    }


    return (
        <div><Navbar />

            <div className='py-5'>

                <Row>
                    <Col md={2}>
                        <div>
                                <UDashMenuBar/>
                            </div>
                    </Col>
                    <Col>
                    <Col>
                        <CardGroup>
                            <Card body inverse color="primary" className="text-center">
                                <CardBody>
                                    <fieldset> <p><FontAwesomeIcon icon={faBank} fontSize={25} /></p>

                                        <legend>Branch Name
                                        <input type='text' className={'form-control'} name='branchname'
                                            placeholder='Branch Name' value={formValues.branchname}
                                            onChange={handleChange}
                                        />
                                        <p style={{ color: 'orange' }}>{formErrors.branchname}</p>
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
                            <Card body inverse color="primary" className="text-center">
                                <CardBody>
                                    {/* <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p> */}
                                    <fieldset><legend>IFSC Code
                                    <p> <FontAwesomeIcon icon={faCodeBranch} fontSize={20}/></p>
                                            
                                        <input type='text' className={'form-control'} name='ifsc'
                                            placeholder='e.g.HDFC0000' value={formValues.ifsc}
                                            onChange={handleChange}
                                        />
                                        <p style={{ color: 'orange' }}>{formErrors.ifsc}</p>
                                    </legend>
                                    </fieldset>
                                </CardBody>
                            </Card>&nbsp;
                            <Card body inverse color="primary" className="text-center">
                                <CardBody>
                                    <fieldset> <p><FontAwesomeIcon icon={faPiggyBank} fontSize={25} /></p>

                                        <legend>Account Number
                                        <input type='number' className={'form-control'} name='accountno'
                                            placeholder='e.g. 1234567890' value={formValues.accountno}
                                            onChange={handleChange}
                                        />
                                        <p style={{ color: 'orange' }}>{formErrors.accountno}</p>
                                    </legend>
                                    </fieldset>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row><br></br>
                <Row>
                    <Col md={11}>
                    <div className={'row justify-content-around'}>
                                        <div className={'col-3'}>
                                            <button disabled={formValues.accountno === ""} onClick={handleSubmit}><h2>
                                            <p> <FontAwesomeIcon icon={faPlusCircle} fontSize={25} /></p>
                                                Add Bank Detail</h2></button>
                                        </div>
                                    </div></Col>
                </Row>
                </Col></Row>
                <br></br>
            </div><Footer />
        </div>
    );
}
