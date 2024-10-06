// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import DataTable from 'react-data-table-component';
// import { Row, Col } from 'reactstrap';



// const UsersTables = () =>{
//     const [search, setSearch] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [filteredUsers, setFilteredUsers] = useState([]);
    
//     console.log();
   
//     const getUsers = async () => {
//          try{
//             const response = await axios.get('http://localhost:5000/api/SystemUser');
//             setUsers(response.data)
//             setFilteredUsers(response.data)
//          } catch (error){
//             console.log(error);
//          }
//     };


//     const columns = [
//         {
//             name: "User name",
//             selector: (row) => row.first_name+" "+row.last_name,
//             sortable: true,
//         },
       
//         {
//             name: "Email Id",
//             selector: (row) => row.email,
//         },
//         {
//             name: "Mobile No",
//             selector: (row) => row.mobile,
//         },
//         // {
//         //     name: "Country Flag",
//         //     selector: (row) => <img width={50} height={50} src={row.flag} />,
//         // },
//         {
//             name: "Action",
//             cell: (row) =>(
//              <button className='btn btn-primary' onClick={() => alert(row.uid)}
//             >
//             Edit</button>
//             ),
//         },
//     ];

//     useEffect(() => {
//         getUsers();
//     }, []);

//     useEffect(() => {
//         const result = users.filter((user) => {
//             return user.mobile.toLowerCase().match(search.toLowerCase());
//         });

//         setFilteredUsers(result);
//     },[search]);


//     return (
//         <DataTable title="Users List"
//          columns={columns} 
//          data={filteredUsers} 
//          pagination 
//          fixedHeader
//         // fixedHeaderScrollHeight='450px'
//         //fixedHeaderScrollHeight={'500px'}
//         selectableRows
//         selectableRowsNoSelectAll
//         selectableRowsHighlight
//         highlightOnHover
//         actions={<button className={'btn btn-sm btn-info'}>Export</button>}
//         subHeader
//         subHeaderComponent={
//             <input type="text" placeholder='Search Here' className='w-25 form-control' subHeaderAlign='left'
     
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//          />
//         }
//     />
//         );
// };

// export default UsersTables