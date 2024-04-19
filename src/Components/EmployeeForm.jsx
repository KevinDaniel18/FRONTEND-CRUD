import React, { useEffect, useState } from "react";
import {
  createEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployee,
} from "../Api/employee.api";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const EmployeeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();
  const [submitButtonText, setSubmitButtonText] = useState("Enviar datos");

  useEffect(() => {
    reset({
      nombres: "",
      apellidos: "",
      tipo_identificacion: "",
      identificacion: "",
      fecha_ingreso: "",
      salario_mensual: "",
      cargo: "",
      departamento: "",
      type: "",
      number: "",
      email: "",
    });

    const loadEmployee = async () => {
      if (params.id) {
        const res = await getEmployee(params.id);
        setValue("nombres", res.data.nombres);
        setValue("apellidos", res.data.apellidos);
        setValue("tipo_identificacion", res.data.tipo_identificacion);
        setValue("identificacion", res.data.identificacion);
        setValue("fecha_ingreso", res.data.fecha_ingreso);
        setValue("salario_mensual", res.data.salario_mensual);
        setValue("cargo", res.data.cargo);
        setValue("type", res.data.type);
        setValue("number", res.data.number);
        setValue("email", res.data.email);

        setSubmitButtonText("Actualizar");
      }
    };
    loadEmployee();
  }, [params.id, reset, setValue]);

  const handleDelete = async () => {
    const accepted = window.confirm("¿Estás seguro de que quieres borrar?");
    if (accepted) {
      await deleteEmployee(params.id);
      toast.success("Empleado eliminado");
      setTimeout(() => {
        navigate("/employeeList");
        window.location.reload(); 
      }, 500);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (params.id) {
        await updateEmployee(params.id, data);
        toast.success("Empleado actualizado");
      } else {
        await createEmployees(data);
        toast.success("Empleado creado con éxito");
      }

      navigate("/");
    } catch (error) {
      console.error("Error enviar el correo", error);
      toast.error("Error al enviar los datos");
    }
  });

  return (
    <div className="mx-auto max-w-lg p-6 bg-white rounded-md shadow-md">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <TextField
              id="name"
              label="Nombres"
              variant="outlined"
              {...register("nombres", { required: true })}
              InputLabelProps={{ shrink: true }}
            />
            {errors.nombres && (
              <span className="text-red-500 block">
                Por favor llenar este campo
              </span>
            )}
          </div>
          <div>
            <TextField
              id="lastname"
              label="Apellidos"
              variant="outlined"
              {...register("apellidos", { required: true })}
              InputLabelProps={{ shrink: true }}
            />

            {errors.apellidos && (
              <span className="text-red-500 block">
                Por favor llenar este campo
              </span>
            )}
          </div>
          <div>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="tipo_identificacion_label">
                Tipo de identificación
              </InputLabel>
              <Select
                id="tipo_identificacion"
                labelId="tipo_identificacion_label"
                label="Tipo de identificación"
                {...register("tipo_identificacion", { required: true })}
              >
                <MenuItem value="nit">NIT</MenuItem>
                <MenuItem value="cc">Cédula de Ciudadanía</MenuItem>
              </Select>
            </FormControl>
            {errors.tipo_identificacion && (
              <span className="text-red-500 block">
                Por favor seleccionar un tipo de identificación
              </span>
            )}
          </div>

          <div>
            <TextField
              id="identification"
              label="Identificación"
              variant="outlined"
              {...register("identificacion", { required: true })}
              InputLabelProps={{ shrink: true }}
            />
            {errors.identificacion && (
              <span className="text-red-500 block">
                Por favor llenar este campo
              </span>
            )}
          </div>

          <div>
            <TextField
              id="fecha_ingreso"
              label="Fecha de ingreso"
              variant="outlined"
              type="date"
              {...register("fecha_ingreso", { required: true })}
              InputLabelProps={{ shrink: true }}
            />
            {errors.fecha_ingreso && (
              <span className="text-red-500 block">
                Por favor llenar este campo
              </span>
            )}
          </div>

          <div>
            <TextField
              id="salario_mensual"
              label="Salario Mensual"
              variant="outlined"
              type="number"
              {...register("salario_mensual", { required: true })}
              InputLabelProps={{ shrink: true }}
            />
            {errors.salario_mensual && (
              <span className="text-red-500 block">
                Por favor llenar este campo
              </span>
            )}
          </div>

          <div>
            <TextField
              id="cargo"
              label="Cargo"
              variant="outlined"
              {...register("cargo", { required: true })}
              InputLabelProps={{ shrink: true }}
            />
            {errors.cargo && (
              <span className="text-red-500 block">
                Por favor llenar este campo
              </span>
            )}
          </div>

          <div>
            <TextField
              id="departamento"
              label="Departamento"
              variant="outlined"
              {...register("departamento", { required: true })}
              InputLabelProps={{ shrink: true }}
            />
            {errors.departamento && (
              <span className="text-red-500 block">
                Por favor llenar este campo
              </span>
            )}
          </div>

          <div>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="type_label">Tipo de número</InputLabel>
              <Select
                id="type"
                labelId="type_label"
                label="Tipo de número"
                variant="outlined"
                {...register("type", { required: true })}
              >
                <MenuItem value="cell">Celular</MenuItem>
                <MenuItem value="tel">Teléfono</MenuItem>
              </Select>
            </FormControl>
            {errors.type && (
              <span className="text-red-500 block">
                Por favor seleccionar un tipo de número
              </span>
            )}
          </div>

          <div>
            <TextField
              id="number"
              label="Número de teléfono"
              variant="outlined"
              type="number"
              {...register("number", { required: true })}
              InputLabelProps={{ shrink: true }}
            />
            {errors.number && (
              <span className="text-red-500 block">
                Por favor llenar este campo
              </span>
            )}
          </div>

          <div>
            <TextField
              id="email"
              label="Correo electrónico"
              variant="outlined"
              type="email"
              {...register("email", { required: true })}
              InputLabelProps={{ shrink: true }}
            />
            {errors.email && (
              <span className="text-red-500 block">
                Por favor llenar este campo
              </span>
            )}
          </div>
        </div>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className="w-full"
        >
          {params.id ? submitButtonText : "Enviar datos"}
        </Button>

        {params.id && (
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 w-full"
          >
            Eliminar
          </button>
        )}
      </form>
    </div>
  );
};

export default EmployeeForm;
