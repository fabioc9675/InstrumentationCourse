import { useState } from "react";
import { Button } from "react-bootstrap";
import { axiosInstance } from "./config/config";
import DataTable from "./components/DataTable";
import DataTablePlace from "./components/DataTablePlace";
import DataChart from "./components/DataChart";

function App() {
  const [objWaterQ, setObjWaterQ] = useState([]);
  const [objWaterQPlace, setObjWaterQPlace] = useState([]);
  const lugar = "Girardota";

  // Cargar datos desde la DB
  function loadDataFromDB() {
    axiosInstance
      .get("api/waterq/")
      .then((res) => {
        setObjWaterQ(res.data);
      })
      .catch((err) => console.error(err));
  }

  // Cargar datos desde la DB por lugar
  function loadDataByPlaceFromDB() {
    axiosInstance
      .get(`api/waterq/place/${lugar}`)
      .then((res) => {
        setObjWaterQPlace(res.data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="container">
      <h1>Hola Fabian Castaño.</h1>

      <DataChart
        data={objWaterQ}
        array={objWaterQ.map((item) => item.ph)}
        title="pH"
      ></DataChart>

      <DataChart
        data={objWaterQ}
        array={objWaterQ.map((item) => item.temperature)}
        title="Temperatura"
      ></DataChart>

      <DataTable data={objWaterQ} title="Registro de datos"></DataTable>

      <DataTablePlace
        data={objWaterQPlace}
        title={"Registro de " + lugar}
      ></DataTablePlace>

      <Button variant="secondary" onClick={loadDataFromDB}>
        Cargar Datos
      </Button>

      <Button variant="secondary" onClick={loadDataByPlaceFromDB}>
        Cargar Lugar
      </Button>
    </div>
  );
}

export default App;
