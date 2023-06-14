//npm install react-apexcharts apexcharts

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
// import PropTypes from "prop-types";

function MagneticFlux() {
  const [options, setOptions] = useState({
    chart: {
      id: "xyz",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
    xaxis: {
      categories: [
        "10:00",
        "10:01",
        "10:02",
        "10:03",
        "10:04",
        "10:05",
        "10:06",
        "10:07",
        "10:08",
      ],
    },
  });

  const XAxis = [23, 45, 67, 89, 12, 34, 56, 78, 90];
//   const YAxis = [45, 67, 89, 12, 34, 56, 78, 90, 23];
//   const ZAxis = [67, 89, 12, 34, 56, 78, 90, 23, 45];

  //   for (let index = 0; index < sensorData.length ; index++) {
  //     XAxis.push(sensorData[index].A.EMF_X)
  //     YAxis.push(sensorData[index].A.EMF_Y)
  //     ZAxis.push(sensorData[index].A.EMF_Z)
  //   }

  const series = [
    {
      name: "X-axis",
      data: XAxis,
    }
  ];

  useEffect(() => {
    setOptions({
        chart: {
            id: "xyz",
            },
            fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
            },
            },
            xaxis: {
            categories: [
                "10:00",
                "10:01",
                "10:02",
                "10:03",
                "10:04",
                "10:05",
                "10:06",
                "10:07",
                "10:08",
            ],
            },
    })
    }, [])

  return (
    <div className=" max-w-full max-h-full">
      <Chart options={options} series={series} type="area" />
    </div>
  );
}

export default MagneticFlux;
