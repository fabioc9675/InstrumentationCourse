import Table from "react-bootstrap/Table";

export default function TableCmp(props) {
  // carga de datos desde los componentes
  const { dataP } = props;

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Lugar</th>
            <th>Temperatura</th>
            <th>Humedad</th>
          </tr>
        </thead>
        <tbody>
          {dataP.map((data) => {
            return (
              <tr key={data._id}>
                <td>{data.lugar}</td>
                <td>{data.temperatura}</td>
                <td>{data.humedad}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
