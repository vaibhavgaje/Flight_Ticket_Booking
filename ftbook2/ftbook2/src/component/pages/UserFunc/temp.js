/////CountriesTable

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';


const CountriesTables = () =>{
    const [search, setSearch] = useState([]);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    
    const getCountries = async () => {
         try{
            const response = await axios.get('');
            setCountries(response.data)
            setFilteredCountries(response.data)
         } catch (error){
            console.log(error);
         }
    };


    const columns = [
        {
            name: "Country_name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Country Native Name",
            selector: (row) => row.name,
        },
        {
            name: "Country Capital",
            selector: (row) => row.nativename,
        },
        {
            name: "Country Flag",
            selector: (row) => <img width={50} height={50} src={row.flag} />,
        },
        {
            name: "Action",
            cell: (row) =>(
             <button className='btn btn-primary' onClick={() => alert(row.uid)}
            >
            Edit</button>
            ),
        },
    ];

    useEffect(() => {
        getCountries();
    }, []);

    useEffect(() => {
        const result = countries.filter(country => {
            return country.name.tolLowerCase(),match(search.tolLowerCase());
        });

        setFilteredCountries(result);
    },[search]);


    return (
        <DataTable title="COuntry List"
         columns={columns} 
         data={filteredCountries} 
         pagination 
         fixedHeader
        //  fixedHeaderScrollHeight='450px'
        fixedHeaderScrollHeight="100"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        actions={<button className='btn btn-sm btn-info'>Export</button>}
        subHeader
        subHeaderComponent={
            <input type="text" placeholder='Search Here' className='w-25 form-control'/>
        }
        // subHeaderAlign="left"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
         />
    )
}

export default CountriesTables


// ////DataTable
// import React from 'react'
// import CountriesTables from './CountriesTables'

// function Datatable() {
//     return (
//         <>
//         <div className='d-flex flex-column align-items-center'>
//             <h1>React Datatable</h1>
//         </div>
//      <CountriesTables />
//         </>
        
//     );
// }

// export default Datatable;
