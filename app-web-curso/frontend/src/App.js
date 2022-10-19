import "bootstrap/dist/css/bootstrap.min.css";

import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import CarrouselCmp from "./components/CarrouselCmp";

import { axiosInstance } from "../src/config/config";
import { useEffect, useState } from "react";
import TableCmp from "./components/TableCmp";
import ChartCmp from "./components/ChartCmp";

function App() {
  const title = "Modificacion de menu";

  const [lugar, setLugar] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [humedad, setHumedad] = useState("");

  const [tempControl, setTempControl] = useState(0);

  const [consulta, setConsulta] = useState("Casa");
  const [cursoObj, setCursoObj] = useState([
    {
      _id: 1,
      lugar: "ninguno",
      temperatura: 0,
      humedad: 0,
      ruido: [0, 0],
    },
  ]);

  // creacion del data
  const [data, setData] = useState({
    labels: ["1"],
    datasets: [
      {
        label: "D",
        data: [1],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  // funcion para solicitar los datos de la base de datos
  function cargarTodosLosDatos() {
    axiosInstance
      .get(`/api/curso`)
      .then((res) => {
        setCursoObj(res.data);
      })
      .catch((err) => console.error(err));
  }

  // funcion para consultar temperatura mayor que control
  function cargarTempControl() {
    axiosInstance
      .get(`/api/curso/lugar/${consulta}/temp/${tempControl}`)
      .then((res) => {
        setCursoObj(res.data);
      })
      .catch((err) => console.error(err));
  }

  // funcion que carga todas por lugar
  function cargarTodasPorLugar() {
    axiosInstance
      .get(`/api/curso/lugar/${consulta}`)
      .then((res) => {
        setCursoObj(res.data);

        const datServ = []; // datos de temp
        const datHum = []; // datos de humedad
        const labServ = [];

        for (let i = 0; i < res.data.length; i++) {
          labServ.push(i);
          datServ.push(res.data[i].temperatura);
          datHum.push(res.data[i].humedad);
        }

        const plantilla = {
          labels: labServ,
          datasets: [
            {
              fill: true,
              label: "Temp",
              data: datServ,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              yAxisID: "y",
            },
            {
              fill: true,
              label: "Hum",
              data: datHum,
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
              yAxisID: "y1",
            },
          ],
        };

        setData(plantilla);
      })
      .catch((err) => console.error(err));
  }

  // funcion para solicitar datos de la base de de datos
  function cargarUltimoDato() {
    axiosInstance
      .get(`/api/curso/ultimo/lugar/${consulta}`)
      .then((res) => {
        console.log(res.data[0].humedad);

        setLugar(res.data[0].lugar);
        setTemperatura(res.data[0].temperatura);
        setHumedad(res.data[0].humedad);
      })
      .catch((err) => console.error(err));
  }

  function clickTodasCasa() {
    setConsulta("Casa");
    cargarTodasPorLugar();
  }

  function clickTodasUniver() {
    setConsulta("Universidad");
    cargarTodasPorLugar();
  }

  function clickBotonCasa() {
    setConsulta("Casa");
    // cargarUltimoDato();
  }

  function clickBotonUdeA() {
    setConsulta("Universidad");
    // cargarUltimoDato();
  }

  // Codigo agregado para evitar el problema de doble clic en el boton
  useEffect(() => {
    cargarUltimoDato();
  }, [consulta]);

  return (
    <div className="container">
      <h1>Hola Fabian</h1>
      <h4>Este es un ejemplo</h4>

      <div className="container">
        <h2>Datos:</h2>
        <h4>Lugar: {lugar}</h4>
        <h4>Temperatura: {temperatura}</h4>
        <h4>Humedad: {humedad}</h4>
      </div>

      <div className="container">
        <Button
          variant="outline-primary"
          style={{ height: 50 }}
          onClick={clickBotonCasa}
        >
          Consultar Casa
        </Button>
        <Button variant="outline-primary" onClick={clickBotonUdeA}>
          Consultar UdeA
        </Button>
      </div>

      <div className="container">
        <Button variant="success" onClick={cargarTodosLosDatos}>
          Cargar Todo
        </Button>

        <Button variant="warning" onClick={clickTodasCasa}>
          Cargar Casa
        </Button>
        <Button variant="warning" onClick={clickTodasUniver}>
          Cargar Univer
        </Button>
        <Button variant="success" onClick={cargarTempControl}>
          temperatura
        </Button>
      </div>

      <div>
        <Form>
          <Form.Control
            placeholder="temperatura"
            onChange={(e) => setTempControl(e.target.value)}
          ></Form.Control>
        </Form>
      </div>

      <div className="container">
        <Accordion style={{ width: "70%" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>Mas informacion dentro del acordion</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Gráfica de datos</Accordion.Header>
            <Accordion.Body>
              <ChartCmp dataP={data} />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tabla de datos</Accordion.Header>
            <Accordion.Body>
              <TableCmp dataP={cursoObj} />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Este es un acordion</Accordion.Header>
            <Accordion.Body>
              <CarrouselCmp />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
