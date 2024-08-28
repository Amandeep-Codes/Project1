import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { getEmployeeDetails } from "../store/EmpSlice";
import Button from "react-bootstrap/esm/Button";
import { deleteEmpDetails } from "../store/EmpSlice";

import { useDispatch, useSelector } from "react-redux";

const AllEmp = () => {
  const {
    users: details = [],
    loading=false,
    error=null,
  } = useSelector(state => state.empDetails);

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getEmployeeDetails());
  }, [dispatch]);

  const deleteData=(id)=>{
    dispatch(deleteEmpDetails(id))

  }

  return (
    <>
      {loading && <p style={{fontSize:"50px",textAlign:"center"}} >Loading....</p>}

      {error  &&  <p variant='danger'> ERROR:{error}</p>}

      {!loading && !error &&(
        <div style={{margin:"40px auto"}}>
              <Table striped bordered hover >
              <thead>
                <tr>
                  <th>Email</th>
                  <th> Name</th>
                  <th> Employee id</th>
                  <th> Gender</th>
                  <th> Age</th>
                  <th>Updation</th>
                </tr>
              </thead>
              <tbody>
                {details.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email} </td>
                    <td>{user.empname}</td>
                    <td>{user.id}</td>
                    <td>{user.gender}</td>
                    <td>{user.age}</td>
                    <td><Button  size="sm" className="ms-3 " variant="primary"> Update</Button> 
                     <Button  size="sm" onClick={()=>deleteData(user.id)}  className="ms-3" variant="danger">Delete</Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
            </div>
      )}

    </>
  );
};

export default AllEmp;
