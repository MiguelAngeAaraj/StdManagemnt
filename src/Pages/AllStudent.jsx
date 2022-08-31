import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Box } from '@mui/material'
import Table from 'react-bootstrap/Table';
import {Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const AllStudent = () => {
    const [Students,setStudents] = useState([])
    useEffect(() => {
        const FetchData = async() => {
            const Search = await axios.get("https://peopleleb.herokuapp.com/people")
            setStudents(await Search.data)
        }
        FetchData()
    })
  return (
   <Box
   sx={{
    width:'100%',
 
   }}>
   <Table striped bordered hover style={{width:'100%',maxWidth:'100%'}}>
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody
   
      >
      {
                Students.map(student => (
                    <tr
                    key={student.id}
                    >
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                       <td>{student.age}</td>
                        <td> <Button variant="primary"><Link 
                        style={{textDecoration:'none',color:'#fff'}}
                        to={`/Edit/${student.id}`}>Edit</Link></Button></td>
                        <td>  <Button variant="danger"
                        
                        onClick={() => {
                            
                            const DeleteBtn = async() => {
                                try{
                                await axios.delete(`https://peopleleb.herokuapp.com/people/${student.id}`)
                                setStudents(student => student.filter(std => std.id !== student.id))    
                            }catch(e) {

                                }
                            }
                            DeleteBtn()
                        }}
                        >Delete</Button></td>
                    </tr>
                ))
            }
      </tbody>
    </Table>
   </Box>
  )
}

export default AllStudent