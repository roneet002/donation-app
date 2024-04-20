"use client"
import React from 'react'
import './Header.css';
import Image from 'next/image';
import { Button, Nav } from 'react-bootstrap';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
    
    <header className="site-header">
        <div className="container">
            <div className="row">

                <div className="col-lg-8 col-12 d-flex flex-wrap">
                    <p className="d-flex me-4 mb-0">
                        <i className="bi-geo-alt me-2"></i>
                        Akershusstranda 20, 0150 Oslo, Norway
                    </p>

                    <p className="d-flex mb-0">
                        <i className="bi-envelope me-2"></i>

                        <a href="mailto:info@company.com">
                            info@company.com
                        </a>
                    </p>
                </div>

                <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                    <ul className="social-icon">
                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-twitter"></a>
                        </li>

                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-facebook"></a>
                        </li>

                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-instagram"></a>
                        </li>

                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-youtube"></a>
                        </li>

                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-whatsapp"></a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </header>
  
    <NavbarNew />
</>
  )
}
const NavbarNew = () =>{
   return(
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
    <Container>
      <Navbar.Brand href="/"> <Image
                  src="/assets/images/logo.png"
                  alt="Vercel Logo"
                  className="vercelLogo"
                  width={80}
                  height={80}
                  priority
                />
    </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#section_2">About</Nav.Link>
          <Nav.Link href="#section_3">Causes</Nav.Link>
          <Nav.Link href="#section_3">Volunteer</Nav.Link>

          <NavDropdown title="News" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">
             News Listing
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">News Detail</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#section_3">Contact</Nav.Link>
          <Nav.Link className="nav-link custom-btn custom-border-btn btn" href="/Login">Login</Nav.Link>


        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   )
}

export default Header

