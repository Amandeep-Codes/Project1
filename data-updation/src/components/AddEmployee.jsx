import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { addEmployeeData } from "../store/AddSlice";
import AllEmp from "./AllEmp";

const AddEmployee = () => {

  const [empdata,setEmpData] = useState()
  const dispatch = useDispatch()
  

  const getEmpData=(e)=>{
    setEmpData({...empdata,[e.target.name]:[e.target.value]})
    console.log(empdata)
    
    

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addEmployeeData(empdata))
    {<AllEmp/>}

  }
  return (
    <>
     <h2 style={{color:"blue",fontWeight:"500",textAlign:"center",margin:"20px auto"}}> Add  Employee Details</h2>
    <div  className=" container w-25  border border-1 border-dark rounded conatiner h-75  mt-5 h-74" id="add" >
     
      <Form >
        <Form.Group className="mb-3" >
          <Form.Label  className="fs-1">Email </Form.Label>
          <Form.Control  className="form-control w-70" type="email" name="email" onChange={getEmpData} 
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label  >Name</Form.Label>
          <Form.Control className="form-control w-70" type="text" name="empname" onChange={getEmpData}  />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label  >Age</Form.Label>
          <Form.Control className="form-control w-70" type="text" name="age"  onChange={getEmpData} />
        </Form.Group>

        <div className="d-flex justify-content-center align-items-center  gap-5">
                    
        <Form.Group className="mb-3" >
          <Form.Check type="radio"  name="gender"  value={'male'}  label="male" onChange={getEmpData}  />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Check type="radio" name="gender"  value={'female'} label="female" onChange={getEmpData} />
        </Form.Group>

        </div>
        <Button variant="primary" type="submit" className="justify-center mb-4" onClick={handleSubmit}>
          Submit
        </Button>


      </Form>
    </div>
    </>
  );
};

export default AddEmployee;
