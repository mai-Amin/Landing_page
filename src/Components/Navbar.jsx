import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { siteData } from "../Data/siteData";

const CustomNavbar = () => (
  <Navbar
    bg="dark"
    variant="dark"
    expand="lg"
    className="py-2 shadow-sm px-3"
    style={{
      backgroundColor: "#0a1118 !important",
      position: "sticky",
      top: 0,
      zIndex: 10,
    }}
  >
    <Navbar.Brand
      href="#home"
      className="fw-bold fs-3"
      style={{ color: "var(--gold)" }}
    >
      {siteData.nav.logo}

      {siteData.nav.logoImg && (
        <Navbar.Brand href="#home">
          <img
            src={siteData.nav.logoImg}
            alt={siteData.nav.logo}
            className="img-fluid "
            style={{ maxHeight: "55px" }}
          />
        </Navbar.Brand>
      )}
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
