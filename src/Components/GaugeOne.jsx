// import React from 'react'
import GaugeComponent from "react-gauge-component";


function GaugeOne() {
  return (
    <div className="  w-80 ">
      <GaugeComponent
        value={55}
        type="radial"
        labels={{
          markLabel: {
            type: "inner",
            marks: [
              { value: 20 },
              { value: 40 },
              { value: 60 },
              { value: 80 },
              { value: 100 },
            ],
          },
        }}
        arc={{
          colorArray: ["#5BE12C", "#EA4228"],
          subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
          padding: 0.02,
          width: 0.3,
        }}
        pointer={{
          elastic: true,
          animationDelay: 1,
        }}
      />
    </div>
  )
}

export default GaugeOne
