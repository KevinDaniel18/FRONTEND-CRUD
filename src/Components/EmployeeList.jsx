import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { getAllEmployees } from "../Api/employee.api";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function loadEmployee() {
      const response = await getAllEmployees();
      setEmployees(response.data);
    }
    loadEmployee();
  }, []);

  return (
    <div className="mx-auto max-w-md p-6 bg-white rounded-md shadow-md">
      {employees.length > 0 ? (
        <List>
          {employees.map(({ id, nombres, apellidos, cargo }) => (
            <ListItem
              key={id}
              onClick={() => navigate(`/employee/${id}`)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <ListItemText
                primary={`Nombre: ${nombres} ${apellidos}`}
                secondary={`Cargo: ${cargo}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <p className="text-center text-gray-600">
          No hay empleados para mostrar
        </p>
      )}
    </div>
  );
};

export default EmployeeList;
