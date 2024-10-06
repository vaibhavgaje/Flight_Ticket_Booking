
import React from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/component/Home'
import Login from '../src/component/Login';
import UserDash from './component/pages/UserDash';
import AdminDash from './component/pages/AdminDash';
import Signup from './component/Signup';

import AddFlight from './component/pages/AdminFunc/AddFlight';
import ViewFlights from './component/pages/AdminFunc/ViewFlights';
import Viewflightdetail from './component/pages/AdminFunc/Viewflightdetail';
import ViewUsers from './component/pages/AdminFunc/ViewUsers';
import DeleteUser from './component/pages/AdminFunc/DeleteUser';
import DeleteFlight from './component/pages/AdminFunc/DeleteFlight';
import Datatable from './component/pages/AdminFunc/Datatable';

import TicketBooking from './component/pages/UserFunc/TicketBooking';

import ViewProfile from './component/pages/UserFunc/ViewProfile';
import FlightTable from './component/pages/UserFunc/ViewFlights/FlightTable';
import ViewFlight from './component/pages/UserFunc/ViewFlights/ViewFlight';
import AddBank from './component/pages/UserFunc/AddBank';

import SeatBook from './component/pages/UserFunc/SeatBook';

import Economy from './component/pages/UserFunc/Economy';
import BSeatDisplay from './component/pages/UserFunc/BSeatDisplay';
import PESeatDisplay from './component/pages/UserFunc/PESeatDisplay';
import TurnOver from './component/pages/AdminFunc/TurnOver';
import AnotherBooking from './component/pages/UserFunc/AnotherBooking';
import BookDemo from './component/pages/UserFunc/Payment/BookDemo';
import Payment from './component/pages/UserFunc/Payment/Payment';
import TicketGenerate from './component/pages/UserFunc/TicketGenerate';
import BookingHistry from './component/pages/UserFunc/ViewBookingHistory/BookingHistry';
import ViewBookingHistory from './component/pages/UserFunc/ViewBookingHistory/ViewBookingHistory';
import LoginWithEmail from './component/LoginWithEmail';
import VisitorDetail from './component/VisitorDetail';
import EditProfile from './component/pages/UserFunc/EditProfile';
import AboutUs from './component/AboutUs';



function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
        <Route exact path="/" element={<Home />} />
         <Route exact path="/login" element={<Login />} />
        <Route exact path="/userdash" element={<UserDash />} />
         <Route exact path="/admindash" element={<AdminDash />} />
         <Route exact path="/register" element={<Signup />} />
         <Route exact path="/addflight" element={<AddFlight/>} />
         <Route exact path="/viewflights" element={<ViewFlights />} />
         <Route exact path="/aboutus" element={<AboutUs />} />
         {/* <Route exact path="/peseatdisplay" element={<PESeatDisplay />} /> */}
      
         <Route exact path="/viewflightdetail" element={< Viewflightdetail />} />
      
         <Route exact path="/ticketbooking" element={< TicketBooking />} />
         <Route exact path="/viewusers" element={< ViewUsers />} />
         <Route exact path="/deleteuser" element={< DeleteUser />} />
         <Route exact path="/deleteflights" element={< DeleteFlight />} />
         <Route exact path="/viewprofile" element={< ViewProfile />} />
         <Route exact path="/datatable" element={< Datatable />} />
     
         <Route exact path="/udatatable" element={< FlightTable />} />
         <Route exact path="/uviewflight" element={< ViewFlight />} />
         <Route exact path="/addbank" element={< AddBank />} />
         <Route exact path="/seatbook" element={< SeatBook />} />
         <Route exact path="/peseatdisplay" element={< PESeatDisplay />} />
         <Route exact path="/bseatdisplay" element={< BSeatDisplay />} />
         <Route exact path="/eseatdisplay" element={<Economy />} />
         <Route exact path="/turnover" element={<TurnOver />} />
         <Route exact path="/bookanother" element={<AnotherBooking />} />
         <Route exact path="/bookdemo" element={<BookDemo />} />
         <Route exact path="/paymentpage" element={<Payment />} />
         <Route exact path="/ticketgenerate" element={<TicketGenerate />} />
         <Route exact path="/bookinghistry" element={<BookingHistry />} />
         <Route exact path="/loginwithemail" element={<LoginWithEmail />} />
         <Route exact path="/visitordetail" element={<VisitorDetail />} />
         <Route exact path="/viewbookhistory" element={<ViewBookingHistory />} />
         <Route exact path="/ueditprofile" element={<EditProfile />} />
                
       </Routes>
      </div>
    </Router>
  );
}

export default App;
