import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate} from 'react-router-dom';

const ViewFlight = () =>{
    const [search, setSearch] = useState([]);
    const [search1, setSearch1] = useState([]);
    const [flights, setFlights] = useState([]);
    const [filteredFlights, setFilteredFlights] = useState([]);
    const navigate = useNavigate()

    console.log();
   
    const getFlights = async () => {
         try{
            const response = await axios.get('http://localhost:5000/api/FlightDetail');
            setFlights(response.data)
            setFilteredFlights(response.data)
            console.log(response.data)
         } catch (error){
            console.log(error);
         }
    };


    const columns = [
        {
            name: "Company name",
            selector: (row) => row.companyName,
            sortable: true,
        },
       
        {
            name: "Flight Number",
            selector: (row) => row.flightNumber,
        }, 
        {
            name: "Source",
            selector: (row) => row.from,
            sortable: true,
        },
       
        {
            name: "Destination",
            selector: (row) => row.to,
        }, {
            name: "Departure Time",
            selector: (row) => row.departureTime,
            sortable: true,
        },
       
        {
            name: "Arrival Time",
            selector: (row) => row.arrivalTime,
        }, {
            name: "Distance",
            selector: (row) => row.distance,
            sortable: true,
        },
        {
            name: "Action",
            cell: (row) =>(
             <button className='btn btn-primary' onClick={()=>navigate(`/ticketbooking?Id=${(row.flightDetailId)}`)}
            >
            Book Ticket</button>
            ),
        },
    ];

    useEffect(() => {
        getFlights();
    }, []);

    useEffect(() => {
        const result = flights.filter((flight) => {
            return flight.from.toLowerCase().match(search.toLowerCase());
        });

        setFilteredFlights(result);
    },[search]);

    useEffect(() => {
        const result = flights.filter((flight) => {
            return flight.to.toLowerCase().match(search1.toLowerCase());
        });

        setFilteredFlights(result);
    },[search1]);


    return (
        <div className='d-flex flex-column align-items-center'>
          
        
        <DataTable title="Flights List"
         columns={columns} 
         data={filteredFlights} 
         pagination 
         fixedHeader
        // fixedHeaderScrollHeight='450px'
        //fixedHeaderScrollHeight={'500px'}
        // selectableRows
        // selectableRowsNoSelectAll
        // selectableRowsHighlight
        highlightOnHover
        // actions={<button className={'btn btn-sm btn-info'}>Export</button>}
        subHeader
        subHeaderComponent={
          <> <input type="text" placeholder='Source' className='w-25 form-control' subHeaderAlign='left'
     
        value={search}
        
        onChange={(e) => setSearch(e.target.value)}
         />
         
         <input type="text" placeholder='Destination' className='w-25 form-control' subHeaderAlign='left'
     
         value={search1}
         
         onChange={(en) => setSearch1(en.target.value)}
          /></>
        }
    />
    </div>
        );
};

export default ViewFlight