import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchEmpDetails } from "../store/EmpSlice";


const NavBar = () => {
  const [searchvalue,getSearchValue] = useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{
    if(searchvalue.trim()!== ""){
      dispatch(searchEmpDetails(searchvalue.trim()))
    }
    else{
      dispatch(searchEmpDetails(" "))
    }
    
  },[searchvalue,dispatch])

   const handleSearch=()=>{
     if (searchvalue.trim() !== "") {
      dispatch(searchEmpDetails(searchvalue.trim()));
   }
  }

  // // const handleLogout=()=>{
  //   //window.localStorage.setItem("isLogIn",'false')
  //   window.localStorage.removeItem("isLogIn")
    
  //   navigate("/", { replace: true }); // Redirect to the login page and clear the history stack

  // }
  return (
    <>
      
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid  className="bg-light bg-gradient">
            <Navbar.Brand  className="text-primary" >Employee Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {/* <Nav.Link  to="/addemp" as={Link}>Add Employee</Nav.Link> */}
                <Nav.Link  to ="/" as={Link}>All Employees</Nav.Link>


              </Nav>
              <Form className="d-flex mx-5 form-control w-50">
                <Form.Control
                  type="search"
                  placeholder=" Type Employee name or Id"
                 className="mx-2"
                 aria-label="Search"
                  value={searchvalue}
                  onChange={(e)=>getSearchValue(e.target.value)}
                  
                />
                {/* <Button variant="primary" onClick={handleSearch}>Search</Button> */}
              </Form>
              {/* <Button variant="dark"onClick={handleLogout} >Logout </Button> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
    </>
  );
};

export default NavBar;
