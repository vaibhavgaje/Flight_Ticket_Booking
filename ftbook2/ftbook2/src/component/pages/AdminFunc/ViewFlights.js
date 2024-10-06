
import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/ANavbar'
import Footer from '../../Footer'
import ADashMenuBar from '../AdminDashMenubar';
import { useNavigate} from 'react-router-dom';
import AdminFunctions from '../../../Axios/AdminAxios';
import { Row, Col } from 'reactstrap';
import { faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap';


// const { Id } = useParams();

export default function ViewFlights() {

    const [flightDetails,setFlightDetails ] = useState([])
    const navigate = useNavigate()
    useEffect(()=>
    {
        AdminFunctions.viewflight().then(res => 
        {
           console.log(res.data)
            setFlightDetails(res.data)
        })
    },[])

    // const abc = flightDetails.filter

    return (
        <>
        <Navbar />
        <div className='py-5'>
            <Row>
                <Col md={2}>
                    <div><ADashMenuBar /></div>
                </Col>
                <Col md={10} className='bg-white'>
                    <h4 className='text-center text-black '>View Flights</h4>
                    <table className='table table-striped table-center w-10000'>
                        <thead>
                            <tr>
                                <th scope='col' colSpan='5'>Company Name</th>
                                <th scope='col' colSpan='5'>Flight Number</th>
                             
                            </tr>
                        </thead>
                        <tbody>
                            {
                                flightDetails.map(flights => {
                                return (
                                    <tr>
                                        <td colspan='5'>{flights.companyName}</td>
                                        <td colspan='5'>{flights.flightNumber}</td>
                                        {/* <td colspan='5'>{flights.flightDetailId}</td> */}
                                        <td>
                                            <button className='btn btn-success btn-w-8' onClick={()=>navigate(`/viewflightdetail?Id=${flights.flightDetailId}`)}>
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
