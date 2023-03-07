import React from 'react'
import logo from "../Assets/logos/logo-11.svg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const Header = () => {
  return (
    <Navbar expand="lg"  className='p-0'>
      <Container fluid className='p-0' >
        <img className='logo_img' src={logo} alt="logo" />
        <Navbar.Toggle aria-controls="navbarScroll " className='me-4 me-sm-end' />
        <Navbar.Collapse id="navbarScroll " className='navDiv '>
          
            <Nav.Link href="#action1" className='navlist'>About Us</Nav.Link>
            <Nav.Link href="#action2" className='navlist'>Services</Nav.Link>
            <Nav.Link href="#action2" className='navlist'>Team </Nav.Link>
            <Nav.Link href="#action2" className='navlist'>Clients</Nav.Link>
            <Nav.Link href="#action2" className='navlist'>Contact Us</Nav.Link>
       

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
