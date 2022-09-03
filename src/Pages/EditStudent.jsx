import React from 'react'
import { useEffect ,useState,useRef} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import axios  from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const EditStudent = () => {
  const Navigate = useNavigate()
  const Refs = useRef(Array(3).fill(null))
const {id} = useParams()
const [OneStudent,setOneStudent] = useState({})
useEffect(()=> {
  const FetchId = async(id) => {
    const Id = await axios.get(`/people/${id}`)
    setOneStudent(await Id.data)
  }
  FetchId(id)
},[])
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
    const FirstName = Refs.current[0].value
    const Lastname = Refs.current[1].value
    const Age = Refs.current[2].value
    if(FirstName.length == 0 || Lastname.length ==0 || Age.length ==0) {
      alert("all fields are required")
      
    }else {
      const Form ={
        id:OneStudent.id,
        firstName:FirstName,
      lastName:Lastname,
      age:Age}
      try{ 
      await axios.put(`https://peopleleb.herokuapp.com/people`,Form,{
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
    <h1>Edit Student</h1>
  <Form.Group
  style={{
    width:'100%'
  }}
  className="mb-3" controlId="formBasicEmail">
    <Form.Label>Id</Form.Label>
    <Form.Control value={OneStudent.id} type="text" disabled={true} />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>FirstName</Form.Label>
    
   
    <Form.Control
    ref={elem => Refs.current[0] = elem}
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
    ref={elem => Refs.current[1] = elem}
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
    ref={elem => Refs.current[2] = elem}
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

export default EditStudent