import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeData } from "../store/AddSlice";
import AllEmp from "./AllEmp";
import { useNavigate } from "react-router-dom";


const AddEmployee = () => {
  const [empdata, setEmpData] = useState({
    email: " ",
    empname: " ",
    age: " ",
    gender: " ",
  });
  const {error="null"} =useSelector(state=>state.addData)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getEmpData = (e) => {
    const { name, value, type, checked } = e.target;
    setEmpData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(empdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployeeData(empdata));
    navigate("/emp-record");
  };

  const handleCancel = () => {
    navigate("/emp-record");
  };
  return (
    <>
    {error && <p variant='danger'>ERROR: {error}</p>}
      <h2
        style={{
          color: "black",
          fontWeight: "500",
          textAlign: "center",
          margin: "20px auto",
        }}
      >
        {" "}
        Add Employee Details
      </h2>
      
      <div
        className=" container w-25  border border-1 border-dark rounded conatiner h-75  mt-5 h-74 p-3"
        id="add"
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label >Email </Form.Label>
            <Form.Control
              className="form-control w-70"
              type="email"
              name="email"
              value={empdata.email}
              onChange={getEmpData}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="form-control w-70"
              type="text"
              name="empname"
              value={empdata.empname}
              onChange={getEmpData}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              className="form-control w-70"
              type="text"
              name="age"
              value={empdata.age}
              onChange={getEmpData}
            />
          </Form.Group>

          <div className="d-flex justify-content-center align-items-center  gap-5">
            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                name="gender"
                value={"male"}
                checked={empdata.gender==="male"}
                label="male"
                onChange={getEmpData}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                name="gender"
                value={"female"}
                label="female"
                checked={empdata.gender==="female"}
                onChange={getEmpData}
              />
            </Form.Group>
          </div>

          <div className=" d-flex   gap-sm-4 ">
            <Button
              variant="primary"
              type="submit"
              className=" mb-4"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              variant="danger"
              type="submit"
              className="mb-4"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddEmployee;
