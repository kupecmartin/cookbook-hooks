import React from "react";
import { Navbar, Nav } from "react-bootstrap";



export const AppNavbar = () => {


  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Domov</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/recipes">Recepty</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
     </Navbar>

  );
}


