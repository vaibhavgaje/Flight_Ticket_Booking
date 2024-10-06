import React, { useState, useEffect } from 'react';
import 'bootstrap';
import '../../css/form.css';
import UNavbar from '../../layout/UNavbar';
import UDashMenuBar from '../../pages/UserDashMenubar';
import { useNavigate } from 'react-router-dom';
import { useParams, useSearchParams } from "react-router-dom";
import { Row, Col } from 'reactstrap';
import Footer from "../../Footer";
import PaymentModal from "./Payment/modal";
import Payment from "./Payment/Payment";
import CustomerFunctions from '../../../Axios/CustomerAxios';
import { Alert } from 'bootstrap';
export default function TicketBooking() {
   const initialValues = { seatnumber: "", date: "", classes: "" };
   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
   const [classes, setClasses] = useState();
   const [fare, setFare] = useState();

   const User = sessionStorage.getItem('user');
   const temp = JSON.parse(User);
   const [params, setParams] = useSearchParams();
   let Id = params.get("Id")
   // console.log(Id)
   // const today = new Date();

   const [flightDetails, setFlightDetails] = useState([])
   const navigate = useNavigate()
   useEffect(() => {
      CustomerFunctions.viewseatsavailibility(Id).then(res => {
         console.log(res.data)
         setFlightDetails(res.data.classDetail)
         //   setFlightDetails(res.data)
      })
   }, [])

   // const yesterday = moment().subtract(1, 'day');
   // const disablePastDt = current => {
   //    return current.isAfter(yesterday);
   // };

   const handleChange = (e) => {
      // console.log(e.target);
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      setFormErrors(validate(formValues));

      //   alert(formValues.seatnumber)

   };

   useEffect(() => {
      //console.log(formErrors);
      if (classes === 'BusinessClass') {
         setFare((flightDetails.businessClassPrice * formValues.seatnumber))
      }
      if (classes === 'PremiumClass') {
         setFare((flightDetails.premiumClassPrice * formValues.seatnumber))
      }
      if (classes === 'PremiumEconomyClass') {
         setFare((flightDetails.premiumEconomyClassPrice * formValues.seatnumber))
      }
      if (classes === 'EconomyClass') {
         setFare((flightDetails.economyClassPrice * formValues.seatnumber))
      }
      if (Object.keys(formErrors).length === 0 && isSubmit) {

         // console.log(formValues.username);
         // console.log(formValues.email);
         // console.log(formValues.password);

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
      if (classes === 'BusinessClass') {
         setFare((flightDetails.businessClassPrice * formValues.seatnumber))
      }
      if (classes === 'PremiumClass') {
         setFare((flightDetails.premiumClassPrice * formValues.seatnumber))
      }
      if (classes === 'PremiumEconomyClass') {
         setFare((flightDetails.premiumEconomyClassPrice * formValues.seatnumber))
      }
      if (classes === 'EconomyClass') {
         setFare((flightDetails.economyClassPrice * formValues.seatnumber))
      }

      if (formValues.seatnumber == 1) {
         setShow(true);
         setIsPaymentModalOpen(true);
      }
      // alert(formValues.seatnumber)
      // alert(classes)
      // alert(fare)

      setFormErrors(validate(formValues));
      setIsSubmit(true);
      const FlightBook = {
         systemUserDetailId: temp.systemUserDetailId,
         flightDetailId: Id,
         SeatNumber: formValues.seatnumber,
         fareDetails: fare,
         date: formValues.date,
         selectedClass: classes,
      };
      sessionStorage.setItem('fbook', JSON.stringify(FlightBook));
      sessionStorage.setItem('seatno', JSON.stringify(FlightBook.SeatNumber));
      console.log(FlightBook);


      CustomerFunctions.bookticket(FlightBook).then((res) => {
         // alert("Ticket Book successfully..!!")
         const Fbook = sessionStorage.getItem('fbook');
         const seatno = JSON.parse(Fbook);
         // console.log(seatno)
         // alert(FlightBook.SeatNumber)
         if (FlightBook.SeatNumber > 1) {
            // alert('One ticket submitted')
            navigate('/bookanother');
         } else if (FlightBook.SeatNumber == 1) {
           
            <PaymentModal show={show} handleClose={hideModal}>
               <Payment />
            </PaymentModal>
            //  navigate('/paymentpage');

         } else if (FlightBook.SeatNumber < 1) {
            alert('Error occured during book again1')
            navigate('/userdash');
         } else {
            alert('Error occured during book again2')
            navigate('/userdash');
         }
      });
   };

   const validate = (values) => {
      const errors = {}
      // console.log(classes)
      // console.log(flightDetails.businessClassCapacity)
      // console.log(formValues.seatnumber > flightDetails.businessClassCapacity)
      // console.log(formValues.seatnumber)
      if (!values.date) {
         errors.date = "Date is required!";
      }
      if (!values.seatnumber) {
         errors.seatnumber = "Number of seats required!";
      }
      if (classes === 'BusinessClass' && formValues.seatnumber > flightDetails.businessClassCapacity) {
         errors.seatnumber = "Entered no and available seat no should be less/equal"
      }
      if (classes === 'PremiumClass' && formValues.seatnumber > flightDetails.premiumClassCapacity) {
         errors.seatnumber = "Entered no and available seat no should be less/equal"
      }
      if (classes === 'PremiumEconomyClass' && formValues.seatnumber > flightDetails.premiumEconomyClassCapacity) {
         errors.seatnumber = "Entered no and available seat no should be less/equal"
      }
      if (classes === 'EconomyClass' && formValues.seatnumber > flightDetails.economyClassCapacity) {
         errors.seatnumber = "Entered no and available seat no should be less/equal"
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

                                    <div className={'row justify-content-around'}>
                                       <fieldset><legend>Seats Avalability

                                       </legend>

                                       </fieldset>
                                       <div className={'col-4'}>
                                          <fieldset><legend>Business Seats : {flightDetails.businessClassCapacity} </legend></fieldset>
                                       </div>
                                       <div className={'col-2'}>
                                          <fieldset><legend>Price : {flightDetails.businessClassPrice} </legend></fieldset>
                                       </div>
                                       <div className={'col-4'}>
                                          <fieldset><legend>Premium Seats : {flightDetails.premiumClassCapacity}  </legend></fieldset>
                                       </div>
                                       <div className={'col-2'}>
                                          <fieldset><legend>Price : {flightDetails.premiumClassPrice} </legend></fieldset>
                                       </div>
                                       <div className={'col-4'}>
                                          <fieldset><legend>Pre Economy Seats : {flightDetails.premiumEconomyClassCapacity}  </legend></fieldset>
                                       </div>
                                       <div className={'col-2'}>
                                          <fieldset><legend>Price : {flightDetails.premiumEconomyClassPrice}  </legend></fieldset>
                                       </div>
                                       <div className={'col-4'}>
                                          <fieldset><legend>Economy Seats : {flightDetails.economyClassCapacity}  </legend></fieldset>
                                       </div>
                                       <div className={'col-2'}>
                                          <fieldset><legend>Price : {flightDetails.economyClassPrice} </legend></fieldset>
                                       </div>
                                    </div>
                                    <div className={'col-12'}>
                                       <fieldset><legend><div>Select Class</div>
                                          <div class="form-check form-check-inline">
                                             <input type='radio' class="form-check-input" name='class'
                                                placeholder='Business class' value='BusinessClass'
                                                onChange={e => setClasses(e.target.value)}
                                             />
                                             <label class="form-check-label" for="inlineRadio1"> Business Class</label>
                                          </div>
                                          <div class="form-check form-check-inline">
                                             <input type='radio' class="form-check-input" name='class'
                                                placeholder='Premium class' value='PremiumClass'
                                                onChange={e => setClasses(e.target.value)}
                                             />
                                             <label class="form-check-label" for="inlineRadio2"> Premium Class</label>
                                          </div>
                                          <div class="form-check form-check-inline">
                                             <input type='radio' class="form-check-input" name='class'
                                                placeholder='Premium Economy class' value='PremiumEconomyClass'
                                                onChange={e => setClasses(e.target.value)}
                                             />
                                             <label class="form-check-label" for="inlineRadio3"> Premium Economy Class</label>
                                          </div>
                                          <div class="form-check form-check-inline">
                                             <input type='radio' class="form-check-input" name='class'
                                                placeholder='Economy class' value='EconomyClass'
                                                onChange={e => setClasses(e.target.value)}
                                             />
                                             <label class="form-check-label" for="inlineRadio4"> Economy Class</label>
                                          </div>

                                       </legend>
                                       </fieldset>
                                    </div>
                                    <div className={'col-6'}>
                                       <fieldset><legend>No of Seats
                                          <input type="number" className={'form-control'} name={'seatnumber'}
                                             value={formValues.seatnumber}
                                             placeholder='No of seats'
                                             onChange={handleChange} />
                                          <p style={{ color: 'orange' }}>{formErrors.seatnumber}</p>
                                       </legend>

                                       </fieldset>
                                    </div>
                                    <div className={'col-6'}>
                                       <fieldset><legend>Date
                                          <input type="date" className={'form-control'} name={'date'}
                                             value={formValues.date}
                                             onChange={handleChange} />
                                          <p style={{ color: 'orange' }}>{formErrors.date}</p>
                                       </legend>

                                       </fieldset>
                                    </div>

                                    <div className={'row justify-content-around'}>
                                       <div className={'col-6'}>

                                       </div>
                                       <div className={'col-6'}>
                                          <button disabled={formValues.seatnumber === ""} onClick={toPaymentModal}><h2>Book Ticket</h2></button>
                                          {isPaymentModalOpen && (
                                                            <PaymentModal show={show} handleClose={hideModal}>
                                                                <Payment />
                                                            </PaymentModal>
                                          )}
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