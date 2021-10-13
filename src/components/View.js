import React,{useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";


const columns = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'name', headerName: 'Restarurant name', width: 230 },
    { field: 'published_at', headerName: 'Published At', width: 230 },
    {
      field: 'created_at',
      headerName: 'Created At',
     width: 230,
    },
    {
        field: 'updated_at',
        headerName: 'Updated At',
    
        width: 230,
      },
    {
    
      headerName: 'Delete',
    
      sortable: false,
      width: 260,
      valueGetter: (params) =><button>Delete</button>
      ,
    },

    {
       
        headerName: 'Update',
      
        sortable: false,
        width: 160,
        valueGetter: (params) =><button>Update</button>
        ,
      }
  ];


function View() {
    const [state,setState]=useState([]);


useEffect(() => {
    axios.get("http://5.189.130.81:1337/restaurants").then(response=>{
        /// response here
        console.log(response.data);
        setState([...response.data]);
    }).catch(err=>{
        console.log(err);
    })
   
}, [])

    return (
        <div style={{ height: 400, width: '100%' ,marginTop:"200px" }}>
        <DataGrid
          rows={state}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    )
}

export default View
