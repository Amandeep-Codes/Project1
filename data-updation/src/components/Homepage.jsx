import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminDetails } from "../store/AddSlice";


const Homepage = () => {
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdminDetails());
  }, [dispatch]);

  const navigate = useNavigate();
  const {
    loading,
    error,
    admin: adminDetails = [],
  } = useSelector((state) => state.addData);
  console.log("admin", adminDetails);
  console.log("error ", error);

  const handleClick = (e) => {
    e.preventDefault();

    const adminUser = adminDetails.find(
      (admin) => admin.adminid === adminId && admin.adminPass === adminPassword
    );
    if (adminUser) {
      window.localStorage.setItem("isLogIn", "true");

      navigate("/emp-record");
    } else {
      setErrorMessage("Invalid AdminId and Password");
    }
  };
  return (
    < >
          <div
      style={{
  
        
       backgroundColor: "lightblue",
        backgroundSize: "cover",
        height: "100vh",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
        padding: "50% auto",

        //backgroundColor:"gainsboro"
      }}
    >
      <h2> Admin Sign In</h2>

      <Form className="w-50 ms-5 h-25 p-3">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            required
            placeholder="Enter Admin Id"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 w-70">
          <Form.Control
            type="password"
            required
            placeholder=" Enter Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          onClick={handleClick}
          className="mx-auto"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
        <p> </p>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </Form>
    </div>

    </>

  );
};

export default Homepage;
