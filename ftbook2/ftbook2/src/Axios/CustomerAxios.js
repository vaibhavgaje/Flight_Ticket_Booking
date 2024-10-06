import axios from 'axios'

const URL="http://localhost:5000/api"
class CustomerFunctions
{
    addbank(AddBankDetail)
    {
        return axios.post(URL+'/BankDetail',AddBankDetail)
    }   
    viewbank(ViewBankDetail)
    {
        return axios.get(URL+'/BankDetail',ViewBankDetail)
    }  
    bookticket(BookTicket)
    {
        return axios.post(URL+'/BookingDetail',BookTicket)
    }  
    viewseatsavailibility(Id)
    {
       // console.log(Id);
        return axios.get(URL+`/FlightDetail/${Id}`)
    }
    anotherbooking(AnotherBooking)
    {
        return axios.post(URL+'/PassengerDetail',AnotherBooking)
    } 
    flightpayment(Flightpayment)
    {
        return axios.post(URL+'/TicketGenerationSMTP',Flightpayment)
    }
    viewhistory(Id)
    {
        return axios.get(URL+`/BookingDetail/bookinghistory/${Id}`)
    }
    viewflightdetails(Id)
    {
       // console.log(Id);
        return axios.get(URL+`/FlightDetail/${Id}`)
    }
    viewbookingdetail(Id)
    {
        return axios.get(URL+`/BookingDetail/getbookingbyid/${Id}`)
    }
}

export default new CustomerFunctions();