import axios from 'axios'

const URL="http://localhost:5000/api"
class AdminFunctions
{
    addflight(AddFlightDetails)
    {
        return axios.post(URL+'/FlightDetail',AddFlightDetails)
    }
    viewflight(ViewFlight)
    {
        return axios.get(URL+'/FlightDetail',ViewFlight)
    }
    viewflightdetails(Id)
    {
       // console.log(Id);
        return axios.get(URL+`/FlightDetail/${Id}`)
    }
    viewusers(ViewUsers)
    {
        return axios.get(URL+`/SystemUser`,ViewUsers)
    }
    deleteuser(Id)
    {
       // console.log(Id);
        return axios.delete(URL+`/SystemUser/${Id}`)
    }
    deleteflight(Id)
    {
       // console.log(Id);
        return axios.delete(URL+`/FlightDetail/${Id}`)
    } 
    getCountUser(UserCount)
    {
        return axios.get(URL+'/SystemUser/countallusers',UserCount)
    }
    getCountFlight(FlightCount)
    {
        return axios.get(URL+'/FlightDetail/getflightcount',FlightCount)
    }
     
    
}

export default new AdminFunctions();