
import { Form, Button, Card } from "react-bootstrap";
import '../../../css/cardpay.css'
import React, { useState, useEffect } from 'react';
import 'bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams, useSearchParams } from "react-router-dom";
import UDashNavbar from '../../../layout/UNavbar';
import Footer from "../../../Footer";
import PaymentModal from "../Payment/modal";
import CustomerFunctions from '../../../../Axios/CustomerAxios';
import { Alert } from 'bootstrap';

export default function Payment() {
  const initialValues = { nameoncard: "", cardnumber: "", expdate: "", cvv: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const User = sessionStorage.getItem('user');
  const temp = JSON.parse(User);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));

    //   alert(formValues.seatnumber)

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


  setFormErrors(validate(formValues));
  setIsSubmit(true);
  const Payment = {   //mail and userid only
    //  systemUserDetailId: temp.systemUserDetailId,
    //  flightDetailId: Id,
     NameonCard: formValues.nameoncard,
     CardNumber: formValues.cardnumber,
     CVV: formValues.cvv,
     ExpDate: formValues.expdate,
  };
  navigate('/userdash');
  const payment = {
    emailDTO: 'vaibhavgaj@cybage.com',
    UserId: temp.systemUserDetailId,
  }
  // alert(payment.emailDTO)
  CustomerFunctions.flightpayment(payment).then((res) => {
  
     alert('Payment Done Successfully and ticket has been send to your mail')
     navigate('/viewprofile');
     });
  };


const validate = (values) => {
  const errors = {}
  // console.log(classes)
  // console.log(flightDetails.businessClassCapacity)
  // console.log(formValues.seatnumber > flightDetails.businessClassCapacity)
  // console.log(formValues.seatnumber)
  if (!values.nameoncard) {
     errors.nameoncard = "Name is required";
  }
  if (!values.cardnumber) {
     errors.cardnumber = "Number of seats required!";
  }
  if (!values.cvv) {
    errors.cvv = "Number of seats required!";
 }
 if (!values.expdate) {
  errors.expdate = "Number of seats required!";
}
  return errors;
}

  return (
    <div className="container ">
      <div className="row my-3">
        <Card style={{ width: '30rem' }} id='cardpay' >
          <Card.Body>
            <h1 className="text-center" style={{ color: 'green' }}>Payment Method</h1>
            <img className="w-25 border border-dark m-4 mx-2" src="data:image/png;base64,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" alt="" />

            <img className="w-25 border border-dark m-4 mx-2" src=" data:image/jpeg;base64,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" alt="" />

            <img className="w-25 border border-dark m-4 mx-2" src="data:image/png;base64,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" alt="" />
            <Form.Group className="">
              <Form.Label>
                <b>Name on Card</b>
              </Form.Label>
              <Form.Control type="text" value={formValues.nameoncard} name={'nameoncard'} onChange={handleChange} placeholder="Account Holder Name" />
              <p style={{ color: 'red' }}>{formErrors.nameoncard}</p>
            </Form.Group>
            <div className="row">
              <Form.Group className="col">
                <Form.Label>
                  <b>Card Number</b>
                </Form.Label>
                <Form.Control type="number" value={formValues.cardnumber} name={'cardnumber'} onChange={handleChange} placeholder="0000 0000 0000 0000" />
                <p style={{ color: 'red' }}>{formErrors.cardnumber}</p>
              </Form.Group>

              <Form.Group className="col">
                <Form.Label>
                  <b>CVV</b>
                </Form.Label>
                <Form.Control type="password" value={formValues.cvv} name={'cvv'} onChange={handleChange} placeholder="***" />
                <p style={{ color: 'red' }}>{formErrors.cvv}</p>
              </Form.Group>
            </div>
            <Form.Group className="col">
              <Form.Label>
                <b>Expiration Date</b>
              </Form.Label>
              <Form.Control type="number" value={formValues.expdate} name={'expdate'} onChange={handleChange} placeholder="MM/YY" />
              <p style={{ color: 'red' }}>{formErrors.expdate}</p>
            </Form.Group>
            <Form.Group className="col mt-3">
              <Button disabled={formValues.expdate === ""} variant="btn btn-info" type="submit" onClick={handleSubmit}>
                MAKE A PAYMENT
              </Button>
            </Form.Group>

          </Card.Body>
        </Card>



      </div>

    </div>
  );
}
