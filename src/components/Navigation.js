import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navigation = () => {
  return(
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Art Prizes</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features"><NavLink to="/">Home</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink to="/login">Login</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink to="/users">Users</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink to="/courses">Courses</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink to="/artprizes">Art Prizes</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink to="/exhibitions">Exhibitions</NavLink></Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <Nav.Link href="#features"><NavLink to="/logout">Logout</NavLink></Nav.Link>
      {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigation;
