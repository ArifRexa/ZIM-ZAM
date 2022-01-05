import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import'./Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand  ><Link className="header-text text-white fw-bold" to="/home">EMA-COM</Link></Navbar.Brand>
      <Nav className="">
        <Nav.Link ><Link  to="/home" className="header-text">Home</Link></Nav.Link>
        <Nav.Link ><Link  to="/products" className="header-text">Products</Link></Nav.Link>

        <Nav.Link ><Link  to="/dashboard" className="header-text">Dashboard</Link></Nav.Link>
        <Nav.Link ><Link  to="/aboutUs" className="header-text">About Us</Link></Nav.Link>
        <Nav.Link ><Link  to="/login" className="header-text">About Us</Link></Nav.Link>
       
        
      </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;