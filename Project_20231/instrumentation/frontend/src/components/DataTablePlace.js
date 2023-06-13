import React from "react";
import { Table } from "react-bootstrap";

export default function DataTablePlace(props) {
  // Adquisicion de las propiedades
  const { data, title } = props;
  return (
    <div>
      <h3>{title}</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Estación</th>
            <th>Turbidez</th>
            <th>Color</th>
            <th>Conduc.</th>
            <th>pH</th>
            <th>Temp.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.createdAt}</td>
                <td>{item.station}</td>
                <td>{item.turbidity}</td>
                <td>{item.color}</td>
                <td>{item.conductivity}</td>
                <td>{item.ph}</td>
                <td>{item.temperature}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
