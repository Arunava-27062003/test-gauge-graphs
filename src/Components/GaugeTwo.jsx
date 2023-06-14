// import React from 'react'
import GaugeComponent from "react-gauge-component";

function GaugeTwo() {
  return (
    <div className=" w-80">
      <GaugeComponent
        type="semicircle"
        arc={{
          width: 0.2,
          padding: 0.005,
          cornerRadius: 1,
          // gradient: true,
          subArcs: [
            {
              limit: 15,
              color: "#8aec51",
              showMark: true,
              tooltip: {
                text: "Too low temperature!",
              },
              onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
              onMouseMove: () =>
                console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
              onMouseLeave: () =>
                console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
            },
            {
              limit: 17,
              color: "#6be723",
              showMark: true,
              tooltip: {
                text: "Low temperature!",
              },
            },
            {
              limit: 28,
              color: "#55c215",
              showMark: true,
              tooltip: {
                text: "OK temperature!",
              },
            },
            {
              limit: 30,
              color: "#e8e123",
              showMark: true,
              tooltip: {
                text: "High temperature!",
              },
            },
            {
              color: "#EA4228",
              tooltip: {
                text: "Too high temperature!",
              },
            },
          ],
        }}
        pointer={{
          color: "#345243",
          length: 0.8,
          width: 15,
          // elastic: true,
        }}
        labels={{
          valueLabel: { formatTextValue: (value) => value + "ºC" },
          markLabel: {
            type: "outer",
            valueConfig: {
              formatTextValue: (value) => value + "ºC",
              fontSize: 10,
            },
            marks: [{ value: 13 }, { value: 22.5 }, { value: 32 }],
          },
        }}
        value={22.5}
        minValue={10}
        maxValue={35}
      />
    </div>
  );
}

export default GaugeTwo;
