import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import AdminFunctions from '../../../Axios/AdminAxios';
import { useParams, useSearchParams } from "react-router-dom";

const DeleteUser=()=>{
    const [params, setParams] = useSearchParams();
    let Id = params.get("Id")
    console.log(Id)
    // const {id} = localStorage.getItem("flightid")
    //alert(localStorage.getItem("flightid"))
    const navigate = useNavigate()

    useEffect(()=>{
        //console.log()
        loadUser();
    },[]);
    const loadUser = () =>{
      
        // axios.delete(``+localStorage.getItem("userid")).then((response)=>{
            AdminFunctions.deleteuser(Id).then(res => {
            const result = res.data
            console.log(result)

            if(result === 'success'){
               alert('User successfully Delete')
                navigate('/viewusers')
            } else {
                alert('error while deleting user')
           
            }
        })
    }
    // return(
    //     <h2 href='/viewusers'>User Deleted</h2>
    // )
}
export default DeleteUser