import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getEmployeeDetails, deleteEmpDetails } from "../store/EmpSlice";
import { updateEmpData } from "../store/UpdateSlice";
import UpdateEmpData from "./UpdateEmpData";
//import NavBar from "./Navbar";



const AllEmp = () => {
  
  const {
    users: details = [],
    loading = false,
    error = null,
    searchData=""
  } = useSelector(state => state.empDetails);
//console.log("searchData",searchData)
  const {
    updateddetails:updatedDetails=[],
  }= useSelector(state=>state.updatedData)

 const navigate = useNavigate()



  const [editableRow, setEditableRow] = useState(null); // To track the row being edited

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeDetails());
  }, [dispatch]);

  const deleteData = (id) => {
    dispatch(deleteEmpDetails(id));
  };

  const updateData = (id, updatedData) => {
    if (editableRow === id) {
      // Save the updated data when exiting edit mode
      dispatch(updateEmpData(updatedData));
      setEditableRow(null);
    } else {
      // Enter edit mode
      setEditableRow(id);
    }
  };

  
   const filteredDetails= details.filter((element)=>{
     if (searchData.trim().length===0){
       return true
       
     }
     const empname = element.empname ? element.empname.toLowerCase() : "";
     const empId = element.id ? element.id.toString() : "";
 
     return (
       empname.includes(searchData.toLowerCase()) ||
       empId.includes(searchData)
     );
     
    })
   // console.log("Filtered Details:", filteredDetails);

   const handleButton=()=>{
    
    navigate("/addemp")
   }

   
    
    
    
  return (
    <>
      
      {loading && <p style={{ fontSize: "50px", textAlign: "center" }}>Loading....</p>}

      {error && <p variant='danger'>ERROR: {error}</p>}
      <h3 className="text-center text-dark mt-3" > Employee Details</h3>
      <Button variant="primary" className="ms-3" onClick={handleButton}>+ Add Employee </Button>

      {!loading && !error && (
        <div style={{ margin: "40px auto" }}>
          <div>
            {filteredDetails.length ===0? (<><p style={{textAlign:"center",fontSize:"20px",color:"red"}}> No result found  </p>
            
            </>
              
            )
            :(
              <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
  
                {filteredDetails.map((user) => (
                  <tr key={user.id}>
                    {editableRow === user.id ? (
                      <UpdateEmpData
                        user={user}
                        updateData={updateData}
                        setEditableRow={setEditableRow}
                      />
                    ) : (
                      <>
                        <td>{user.id}</td>
                        <td>{user.empname}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.age}</td>
                        <td>
                          <Button
                            size="sm"
                            className="ms-3"
                            variant="primary"
                            onClick={() => updateData(user.id)}
                          >
                            Update
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => deleteData(user.id)}
                            className="ms-3"
                            variant="danger"
                          >
                            Delete
                          </Button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
            )
            }
          </div>

        </div>
      )}
    </>
  );
};

export default AllEmp;
