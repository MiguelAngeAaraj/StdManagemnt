import React from 'react'
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import {Navbar as Navi,Nav}from 'react-bootstrap';
const Navbar = () => {
 
  return (
    <>
    <Navi
    style={{width:'100%',position:'fixed',top:'0',left:'0'}}
    bg="dark" variant="dark">
      <Container
      style={{
width:'100%',
display:'flex',
justifyContent:'flex-start',
margin:'0 10px',
padding:'7px 0'
      }}
      >
        <Navi.Brand >Student Management</Navi.Brand>
        <Nav className="me-auto">
          <Nav.Link ><Link to='/' style={{textDecoration:'none',color:'#fff'}}>Home</Link></Nav.Link>
          <Nav.Link href="#features"><Link to='/addStudent'  style={{textDecoration:'none',color:'#fff'}}>Add Student</Link></Nav.Link>
       
        </Nav>
      </Container>
    </Navi>
   
  </>
  )
}

export default Navbar