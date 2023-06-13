import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { options, dataInit } from "./ChartInit";

// Register the Chart Object
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function DataChart(props) {
  const { data, array, title } = props;
  const [DataChart, setDataChart] = useState(dataInit);

  var red = Math.round(Math.random() * 255);
  var gre = Math.round(Math.random() * 255);
  var blu = Math.round(Math.random() * 255);

  useEffect(() => {
    const label = [];
    const name = [];
    const d1 = [];

    for (let i = 0; i < data.length; i++) {
      label.push(i);
      name.push(title);
      d1.push(array[i]);
    }

    const dataSet = {
      labels: label,
      datasets: [
        {
          fill: true,
          label: name[0],
          data: d1,
          borderColor: `rgb(${red}, ${gre}, ${blu})`,
          backgroundColor: `rgba(${red}, ${gre}, ${blu}, 0.5)`,
          yAxisID: "y",
          color: "white",
        },
      ],
    };

    setDataChart(dataSet);
  }, [data]);

  return (
    <div>
      <Line options={options} data={DataChart}></Line>
    </div>
  );
}
