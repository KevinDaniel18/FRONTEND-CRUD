import axios from "axios";

const employeeApi = axios.create({
  baseURL: "http://127.0.0.1:8000/employee/api/v1/employee/",
});


export const getAllEmployees = () => {
  return employeeApi.get("/");
};
console.log(getAllEmployees());

export const getEmployee = (id) => {
  return employeeApi.get(`/${id}/`);
};

export const createEmployees = (employee) => {
  return employeeApi.post("/", employee);
};

export const deleteEmployee = (id) => {
  return employeeApi.delete(`/${id}`);
};

export const updateEmployee = (id, employee) => {
  return employeeApi.put(`/${id}/`, employee);
};
