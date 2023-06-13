import React from "react";

const ListadoPacientes = ({ lista }) => {
  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Apellido y Nombre</th>
            <th>N° Historia Clinica</th>
            <th>Domicilio</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((paciente) => (
            <tr key={paciente.IdPaciente}>
              <td>{paciente.IdPaciente}</td>
              <td>{paciente.ApeNomPaciente}</td>
              <td>{paciente.NroHCPaciente}</td>
              <td>{paciente.DomicilioPaciente}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPacientes;
