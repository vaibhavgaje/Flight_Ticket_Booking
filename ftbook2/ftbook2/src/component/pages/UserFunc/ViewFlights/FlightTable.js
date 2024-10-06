import React from 'react'
import ViewFlight from './ViewFlight'
import { Row, Col } from 'reactstrap';
import Navbar from '../../../layout/UNavbar'
import Footer from '../../../Footer'
import UDashMenuBar from '../../UserDashMenubar';

function FlightTable() {
    return (
      <div>
        <Navbar />
        <div className='py-5'>
            <Row>
                <Col md={2}>
                    <div><UDashMenuBar /></div>
                </Col>
                <Col md={10} className='bg-white'>
        <>
     <ViewFlight /></>
     </Col>
     </Row>
     </div>
     <Footer />
     </div>
        
    );
}

export default FlightTable;