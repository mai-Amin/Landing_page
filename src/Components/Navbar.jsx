import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { siteData } from "../Data/siteData";

const CustomNavbar = () => (
  <Navbar
    bg="dark"
    variant="dark"
    expand="lg"
    fixed="top"
    className="py-2 shadow-sm px-3"
    style={{ backgroundColor: "#0a1118 !important" }}
  >
    
      <Navbar.Brand href="#home" className="fw-bold text-gold fs-3">
        {siteData.nav.logo}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          {siteData.nav.links.map((link, i) => (
            <Nav.Link key={i} href={link.href} className="mx-2 text-white">
              {link.name}
            </Nav.Link>
          ))}
        </Nav>
        
          <a href="#contact" className="btn-gold mt-3 mt-lg-0">
            {siteData.nav.cta}
          </a>
        
      </Navbar.Collapse>
    
  </Navbar>
);
export default CustomNavbar;
