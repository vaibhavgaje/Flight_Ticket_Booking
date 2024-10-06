
import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/ANavbar'
import Footer from '../../Footer'
import ADashMenuBar from '../AdminDashMenubar';
import { useNavigate} from 'react-router-dom';
import AdminFunctions from '../../../Axios/AdminAxios';
import { Row, Col } from 'reactstrap';
import { faHome, faUsers, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap';
import '../../css/form.css';

// const { Id } = useParams();

export default function ViewUsers() {

    const [userDetails,setUserDetails ] = useState([])
   // console.log(userDetails.first_name)
    const navigate = useNavigate()
    useEffect(()=>
    {
        AdminFunctions.viewusers().then(res => 
        {
          console.log(res.data)
           setUserDetails(res.data)
        })
    },[])

    return (
        <>
        <Navbar />
        <div className='py-5'>
            <Row>
                <Col md={2}>
                    <div><ADashMenuBar /></div>
                </Col>
                <Col md={10} className='bg-white'>
                    <h4 className={'text-left text-black'}>View Users</h4>
                    <table className='table table-striped table-center'>
                        <thead>
                            <tr>
                                <th scope='col' colSpan='10'>User Name</th>
                                <th scope='col' colSpan='5'>Email Id</th>
                                <th scope='col' colSpan='5'>Gender</th>
                                <th scope='col' colSpan='5'>Mobile No</th>
                                <th scope='col' colSpan='5'>Aadhar No</th>
                                <th scope='col' colSpan='5'>Passport No</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userDetails.map(users => {
                                return (
                                    <tr>
                                       <td colspan='10' >{users.firstName} {users.lastName}</td>
                                        <td colspan='5'>{users.email}</td>
                                        <td colspan='5'>{users.gender}</td>
                                        <td colspan='5'>{users.mobile}</td>
                                        <td colspan='5'>{users.aadharDetails}</td>
                                        <td colspan='5'>{users.passportDetails}</td>
                                        <td>
                                            <button className='btn w-10 btn-danger btn-outline' onClick={()=>navigate(`/deleteuser?Id=${users.systemUserDetailId}`)}>
                                            <p><FontAwesomeIcon icon={faTrashCan} fontSize={25} /></p></button>
                                        </td>
                                        <td>

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
