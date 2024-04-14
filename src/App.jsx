import React from "react";
import EmployeeList from "./Components/EmployeeList";
import EmployeeForm from "./Components/EmployeeForm";
import Navigation from "./Navigation/Navigation";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Navigate to="/employeeList" />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/employeeForm" element={<EmployeeForm />} />
          <Route path="/employee/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
