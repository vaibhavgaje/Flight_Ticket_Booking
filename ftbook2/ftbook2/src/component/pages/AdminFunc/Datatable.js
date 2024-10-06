import React from 'react'
import UsersTables from './UsersTables'
import { Row, Col } from 'reactstrap';
import Navbar from '../../layout/ANavbar'
import Footer from '../../Footer'
import ADashMenuBar from '../AdminDashMenubar';

function Datatable() {
    return (
      <div>
        <Navbar />
        <div className='py-5'>
            <Row>
                <Col md={2}>
                    <div><ADashMenuBar /></div>
                </Col>
                <Col md={10} className='bg-white'>
        <>
     <UsersTables /></>
     </Col>
     </Row>
     </div>
     <Footer />
     </div>
        
    );
}

export default Datatable;