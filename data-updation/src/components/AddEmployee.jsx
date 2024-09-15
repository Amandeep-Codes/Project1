import React, { useState ,useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeData } from "../store/AddSlice";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddEmployee = () => {
  const [empdata, setEmpData] = useState({
    email: "",
    empname: "",
    age: "",
    gender: "",
  });

  const { error } = useSelector((state) => state.addData);
  const [validationError, setValidationError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getEmpData = (e) => {
    const { name, value, type, checked } = e.target;
    setEmpData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleValidation = () => {
    if (!empdata.email || !empdata.empname || !empdata.age || !empdata.gender) {
      setValidationError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(empdata.email)) {
      setValidationError("Please enter a valid email.");
      return false;
    }
    if (isNaN(empdata.age) || empdata.age <= 0) {
      setValidationError("Please enter a valid age.");
      return false;
    }
    setValidationError(""); // Clear validation error if all checks pass
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch(addEmployeeData(empdata));
      navigate("/emp-record")
      
    }
  
  };

  const handleCancel = () => {
    navigate("/emp-record");
  };

  return (
    <>
      {error && <p className="text-danger text-center">ERROR: {error}</p>}

      <h2 className="text-center my-4" style={{ color: "black", fontWeight: "500" }}>
        Add Employee Details
      </h2>

      <Container
        fluid
        className="container-sm  p-4 shadow-lg p-3 mb-5 bg-white rounded"
        style={{ maxWidth: '500px' }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={empdata.email}
              onChange={getEmpData}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="empname"
              value={empdata.empname}
              onChange={getEmpData}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={empdata.age}
              onChange={getEmpData}
              required
            />
          </Form.Group>

          <Row className="justify-content-center mb-3">
            <Col xs={6}>
              <Form.Check
                type="radio"
                name="gender"
                value="male"
                label="Male"
                checked={empdata.gender === "male"}
                onChange={getEmpData}
                required
              />
            </Col>
            <Col xs={6}>
              <Form.Check
                type="radio"
                name="gender"
                value="female"
                label="Female"
                checked={empdata.gender === "female"}
                onChange={getEmpData}
                required
              />
            </Col>
          </Row>

          <Row className="justify-content-center gap-3">
            <Col xs={12} sm={5}>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
              >
                Submit
              </Button>
            </Col>
            <Col xs={12} sm={5}>
              <Button
                variant="danger"
                type="button"
                className="w-100"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default AddEmployee;
