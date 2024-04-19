import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-blue-500 p-4 mb-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold mb-2 md:mb-0">
          Lista de usuarios
        </Link>
        <div>
          <Link
            to="/employeeForm"
            className="text-white text-sm font-semibold px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-600"
          >
            Crear usuarios
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
