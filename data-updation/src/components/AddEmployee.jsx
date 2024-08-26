import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddEmployee = () => {
  return (
    <>
     <h2 style={{color:"blue",fontWeight:"500",textAlign:"center",margin:"20px auto"}}> Add  Employee Details</h2>
    <div  className=" container w-25  border border-1 border-dark rounded conatiner h-75  mt-5 h-74" id="add" >
     
      <Form >
        <Form.Group className="mb-3" >
          <Form.Label  classname="fs-1">Email </Form.Label>
          <Form.Control  className="form-control w-70" type="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label  >Name</Form.Label>
          <Form.Control className="form-control w-70" type="text" value={empname}  />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label  >Age</Form.Label>
          <Form.Control className="form-control w-70" type="number"  value={age}/>
        </Form.Group>

        <div className="d-flex justify-content-center align-items-center  gap-5">
                    
        <Form.Group className="mb-3" >
          <Form.Check type="radio"  name="gender"  value={male}  label="male" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Check type="radio" name="gender"  value={female} label="female" />
        </Form.Group>

        </div>
        <Button variant="primary" type="submit" className="justify-center mb-4" >
          Submit
        </Button>


      </Form>
    </div>
    </>
  );
};

export default AddEmployee;
