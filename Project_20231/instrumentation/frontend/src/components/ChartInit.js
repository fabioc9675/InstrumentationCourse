// parameters to initialize the chart

var red = Math.round(Math.random() * 255);
var gre = Math.round(Math.random() * 255);
var blu = Math.round(Math.random() * 255);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Gráfica de datos",
      color: "black",
    },
    legend: {
      labels: {
        color: "black",
      },
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
      color: "black",
      grid: { color: "black" },
      border: {
        color: "black",
      },
      ticks: { color: "black" },
    },

    x: {
      //type: "linear",
      display: true,
      //position: "left",
      color: "black",
      grid: { color: "black" },
      border: {
        color: "black",
      },
      ticks: { color: "black" },
    },
  },
};

export const dataInit = {
  labels: [1],
  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: [10, 20],
      borderColor: `rgb(${red}, ${gre}, ${blu})`,
      backgroundColor: `rgba(${red}, ${gre}, ${blu}, 0.3)`,
      yAxisID: "y",
      color: "white",
    },
  ],
};
