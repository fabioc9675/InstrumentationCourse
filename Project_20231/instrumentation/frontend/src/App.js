import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { axiosInstance } from "./config/config";

function App() {
  const [objWaterQ, setObjWaterQ] = useState([]);

  // Cargar datos desde la DB
  function loadDataFromDB() {
    axiosInstance
      .get("api/waterq/")
      .then((res) => {
        setObjWaterQ(res.data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="container">
      <h1>Hola Fabian Castaño.</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Estación</th>
            <th>Turbidez</th>
            <th>Color</th>
            <th>Conduc.</th>
            <th>pH</th>
            <th>Temp.</th>
          </tr>
        </thead>
        <tbody>
          {objWaterQ.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.createdAt}</td>
                <td>{item.place}</td>
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

      <Button variant="secondary" onClick={loadDataFromDB}>
        Cargar Datos
      </Button>
    </div>
  );
}

export default App;
