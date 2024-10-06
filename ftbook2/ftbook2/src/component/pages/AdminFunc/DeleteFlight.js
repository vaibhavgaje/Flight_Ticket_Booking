import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import AdminFunctions from '../../../Axios/AdminAxios';
import { useParams, useSearchParams } from "react-router-dom";

const DeleteFlight=()=>{
    const [params, setParams] = useSearchParams();
    let Id = params.get("Id")
console.log(Id)
   
    const navigate = useNavigate()

    useEffect(()=>{
        console.log()
        loadFlight();
    },[]);
    const loadFlight = () =>{
      
        // axios.delete(``+localStorage.getItem("userid")).then((response)=>{
            AdminFunctions.deleteflight(Id).then(res => {
            const result = res.data
            console.log(result)

            if(result === 'success'){
               alert('Flight successfully Delete')
                navigate('/viewflights')
            } else {
                alert('error while deleting flight')
           
            }
        })
    }
    // return(
    //     <h2 href='/viewflights'>Flight Deleted</h2>
    // )
}
export default DeleteFlight