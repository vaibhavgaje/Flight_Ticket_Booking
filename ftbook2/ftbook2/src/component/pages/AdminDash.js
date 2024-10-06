import React from 'react';
import Footer from '../Footer';
import { Card, CardTitle, CardGroup, CardBody, Row, Col } from 'reactstrap';
import ADashNavbar from '../layout/ANavbar';
import ADashMenuBar from '../pages/AdminDashMenubar';  //DashNavbar
import AdminFunctions from '../../Axios/AdminAxios';
import { faHome, faUsers, faPlane, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class  AdminDash extends React.Component {

    constructor(props){
        super(props)

        this.state={
            totalflight:'',
            totaluser:'',
        }
    }
    componentDidMount(){
        AdminFunctions.getCountFlight().then((res)=>{
            this.setState({
                totalflight:res.data
            })
        })
        AdminFunctions.getCountUser().then((res)=>{
            this.setState({
                totaluser:res.data
            })
        })
    }
     render(){

        return(
            
            <div>
                 <ADashNavbar/>
               
                <br></br>
                
                <div className='py-5'>
                    <Row>
                        <Col md={2}>
                            <div>
                                <ADashMenuBar/>
                            </div>
                        </Col>
                        <Col>
                        <CardGroup>
                            <Card body inverse color="primary" className="text-center">
                                <CardBody>
                            <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p>
                                  
                                    <CardTitle tag="h5">{this.state.totaluser}</CardTitle>
                                    <CardTitle tag="h5">Total Users</CardTitle>
                                </CardBody>
                            </Card>&nbsp;&nbsp;&nbsp;

                            <Card body inverse color="primary" className="text-center">
                                <CardBody>
                                    <p><FontAwesomeIcon icon={faPlane} fontSize={25} /></p>
                                
                                    <CardTitle tag="h5">{this.state.totalflight}</CardTitle>
                                    <CardTitle tag="h5">Total Flights</CardTitle>
                                </CardBody>
                            </Card>&nbsp;&nbsp;&nbsp;
                            {/* <Card body inverse color="primary" className="text-center">
                                <CardBody>
                                    <p> <FontAwesomeIcon icon={faUserCircle} fontSize={25}/></p>
                               
                                   
                                    <CardTitle tag="h5">Total Flights</CardTitle>
                                </CardBody>
                            </Card> */}
                            </CardGroup>
                           
                            </Col>
                    </Row>
                </div><Footer/>
            </div>
        )
    }
 }

export default AdminDash