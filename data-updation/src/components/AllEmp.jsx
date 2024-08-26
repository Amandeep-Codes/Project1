import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { getEmployeeDetails } from "../store/EmpSlice";

import { useDispatch, useSelector } from "react-redux";

const AllEmp = () => {
  const {
    users: details = [],
    loading,
    error,
  } = useSelector((state) => state.empDetails);
  {
    <p>user</p>;
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeDetails());
  }, [dispatch]);
  return (
    <>
      <Table striped bordered hover className="mb-3">
        <thead>
          <tr>
            <th>Email</th>
            <th> Name</th>
            <th> Employee id</th>
            <th> Gender</th>
            <th> Age</th>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AllEmp;
