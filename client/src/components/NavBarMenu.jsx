import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const NavBarMenu = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        

          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" className="show-product-nav" >Product</Nav.Link>
              <Nav.Link href="/addProduct" className="add-product-nav">Add Products </Nav.Link>
              
            </Nav>  
          </Navbar.Collapse>
        
      </Navbar>
    </>
  );
};

export default NavBarMenu;
