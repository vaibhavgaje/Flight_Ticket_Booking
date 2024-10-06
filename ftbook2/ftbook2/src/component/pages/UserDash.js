import React from 'react';
import Footer from '../Footer';
import { Card, CardTitle, CardGroup, CardBody, Row, Col } from 'reactstrap';
import UDashNavbar from '../layout/UNavbar';
import UDashMenuBar from '../pages/UserDashMenubar';  //DashNavbar
import CustomerFunctions from '../../Axios/CustomerAxios';
import { faHome, faUsers, faPlane, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
// class  UserDash extends React.Component {
export default function UserDash(){
    const navigate = useNavigate();
    const User = sessionStorage.getItem('user');
    const temp = JSON.parse(User);
    console.log('Hii'+User)
   // alert(temp.email)
    if(temp.email === ""){
        console.log(temp.email)
        alert('Need to login First')
        navigate('/login');
    };
    

        return(
            
            <div>
                 <UDashNavbar/>
               
                <br></br>
                
                <div className='py-5'>
                    <Row>
                        <Col md={2}>
                            <div>
                                <UDashMenuBar/>
                            </div>
                        </Col>
                        <Col>
                        {/* <CardGroup>
                            <Card body inverse color="primary" className="text-center">
                                <CardBody>
                            <p> <FontAwesomeIcon icon={faUsers} fontSize={25} /></p>
                                   */}
                                    {/* <CardTitle tag="h5">{this.state.totalUsers}</CardTitle> */}
                                    {/* <CardTitle tag="h5">Total Users</CardTitle>
                                </CardBody>
                            </Card>

                            <Card body inverse color="primary" className="text-center">
                                <CardBody>
                                    <p><FontAwesomeIcon icon={faPlane} fontSize={25} /></p>
                                 */}
                                    {/* <CardTitle tag="h5">{this.state.totalflight}</CardTitle> */}
                                    {/* <CardTitle tag="h5">Total Flights</CardTitle>
                                </CardBody>
                            </Card>
                            <Card body inverse color="primary" className="text-center">
                                <CardBody>
                                    <p> <FontAwesomeIcon icon={faUserCircle} fontSize={25}/></p>
                                */}
                                    {/* <CardTitle tag="h5">{this.state.totalflight}</CardTitle> */}
                                    {/* <CardTitle tag="h5">Total Flights</CardTitle>
                                </CardBody>
                            </Card>
                            </CardGroup> */}
                           
                            </Col>
                    </Row>
                </div><Footer/>
            </div>
        )
    }
//  }

// export default UserDash