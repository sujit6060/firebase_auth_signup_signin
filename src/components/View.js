import React,{useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import Button from '@mui/material/Button';



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
        field: "edit",
        headerName: "Edit",
        sortable: false,
        renderCell: (params) => {
       
    
          return <Button variant="contained">Edit</Button>
        },
        
    },
    {
        field: "delete",
        headerName: "Delete",
        sortable: false,
        renderCell: (params) => {
       
    
          return<Button variant="outlined">Delete</Button>
        },
        
    }
    ];


function View() {
    const [state,setState]=useState([]);


useEffect(() => {
    axios.get("http://5.189.130.81:1337/restaurants").then(response=>{
        /// response here
      //  console.log(response.data);
        setState([...response.data]);
    }).catch(err=>{
        console.log(err);
    })
   
}, [])

    return (
        <div style={{ height: 400, width: '100%' ,marginTop:"200px" }}>

<Button variant="contained" color="success" style={{marginBottom:"50px" }}>
  Create Restaurant
</Button>
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
