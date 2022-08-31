import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddStudent = () => {
  const Navigate = useNavigate()
  const [OneStudent,setOneStudent] = useState({
    firstName:'',
    lastName:'',
    age:''
  })
  return (
    <Form
    style={{
      width:'600px',
      maxWidth:'100%',
   
      margin:'0 auto',
      
    flexDirection:'column'
    }}
    onSubmit={async (e) => {
      e.preventDefault()
      const FirstName = OneStudent.firstName
      const Lastname = OneStudent.lastName
      const Age = OneStudent.age
      if(FirstName.length == 0 || Lastname.length ==0 || Age.length ==0) {
        alert("all fields are required")
        
      }else {
        const Form ={
          id:OneStudent.id,
          firstName:FirstName,
        lastName:Lastname,
        age:Age}
        try{ 
        await axios.post(`https://peopleleb.herokuapp.com/people`,Form,{
          headers:{
            'Content-Type':'application/json'
          }
        })
        Navigate('/')  
      }catch(e) {
  
        }
      }
    }}
    >
    <h1>Add Student</h1>
  
    <Form.Group 
     style={{
      width:'100%'
    }}
    className="mb-3" controlId="formBasicPassword">
      <Form.Label>FirstName</Form.Label>
      
     
      <Form.Control
       value={OneStudent.firstName}
       onChange={e => {
   
        setOneStudent(std => ({
          ...std,
          firstName:e.target.value
         }))}}
       type="text" placeholder="firstname" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>LastName</Form.Label>
      <Form.Control
      value={OneStudent.lastName} 
      onChange={e => setOneStudent(std => ({
        ...std,
        lastName:e.target.value
       }))}
      type="text" placeholder="lastname" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Age</Form.Label>
      <Form.Control
      value={OneStudent.age}
      type={'number'}
      onChange={e => setOneStudent(std => ({
        ...std,
        age:e.target.value
       }))}
  
  placeholder="age" />
    </Form.Group>
    <Button variant="primary"
    type="submit"
  >
      Submit
    </Button>
  </Form>
  )
}

export default AddStudent