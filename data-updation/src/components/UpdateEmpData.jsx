import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import AllEmp from "./AllEmp";

const UpdateEmpData = ({ user, updateData, setEditableRow }) => {
  const [updatedData, setUpdatedData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  return (
    <>
      <td>
        <input
          type="text"
          name="email"
          value={updatedData.email}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="empname"
          value={updatedData.empname}
          onChange={handleInputChange}
        />
      </td>
      <td>{user.id}</td>
      <td>
        <input
          type="text"
          name="gender"
          value={updatedData.gender}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="age"
          value={updatedData.age}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <Button
          size="sm"
          className="ms-3"
          variant="primary"
          onClick={() => updateData(user.id, updatedData)}
        >
          Save
        </Button>
        <Button
          size="sm"
          className="ms-3"
          variant="secondary"
          onClick={() => setEditableRow(null)}
        >
          Cancel
        </Button>
      </td>
    </>
  );
};

export default UpdateEmpData;
