import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <>
      
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid  className="bg-light bg-gradient">
            <Navbar.Brand  className="text-primary" href="#">Employee Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Add Employee</Nav.Link>
                <Nav.Link href="#action2">All Employees</Nav.Link>


              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="primary">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
    </>
  );
};

export default NavBar;
