
import React, { useState, useEffect } from 'react';
import Navbar from '../../../layout/UNavbar'
import Footer from '../../../Footer'
import UDashMenuBar from '../../UserDashMenubar';
import { useNavigate} from 'react-router-dom';
import CustomerFunctions from '../../../../Axios/CustomerAxios';
import { Row, Col } from 'reactstrap';
import { faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap';
import '../../../css/form.css';

// const { Id } = useParams();

export default function BookingHistry() {

    const [bookingHistory,setBookingHistory ] = useState([])
    const navigate = useNavigate()
    const User = sessionStorage.getItem('user');
    const temp = JSON.parse(User);

    const Id = temp.systemUserDetailId;
  
    useEffect(()=>
    {
        CustomerFunctions.viewhistory(Id).then(res => 
        {
           console.log(res.data)
           setBookingHistory(res.data)
        })
    },[])
console.log()
    // const abc = flightDetails.filter

    return (
        <>
        <Navbar />
        <div className='py-5'>
            <Row>
                <Col md={2}>
                    <div><UDashMenuBar /></div>
                </Col>
                <Col md={10} className='bg-white'>
                    <h4 className='text-center text-black '>View Flights</h4>
                    <table className='table table-striped table-center w-10000'>
                        <thead>
                            <tr>
                                <th scope='col' colSpan='5'>Class</th>
                                <th scope='col' colSpan='5'>Total Fair</th>
                                <th scope='col' colspan='5'>Date</th>
                             
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookingHistory.map(history => {
                                return (
                                    <tr>
                                        <td colspan='5'>{history.selectedClass}</td>
                                        <td colspan='5'>{history.fareDetails}</td>
                                        <td colspan='5'>{history.date}</td>
                                        <td>
                                            <button className='btn btn-success btn-w-8' onClick={()=>navigate(`/viewbookhistory?Id2=${history.bookingDetailId}`)}>
                                            <p> <FontAwesomeIcon icon={faEye} fontSize={25}/></p>
                                                View More</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody> 
                    </table>
                </Col>
            </Row>
        </div>
        <Footer />
        </>
    );
}
