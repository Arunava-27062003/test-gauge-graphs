// import React from 'react'
import GaugeChart from "react-gauge-chart";
import PropTypes from "prop-types";
import "./gauge.css";

function Gauge({ value, arcLen, needleColor }) {
  value = value / 100;
  return (
    <div className=" w-max">
      <GaugeChart
        id="gauge-chart3"
        colors={["green", "orange", "red"]}
        arcsLength={arcLen}
        arcWidth={0.1}
        percent={value}
        // textColor={"black"}
        hideText={true} // If you want to hide the text
        needleColor={needleColor}
        style={{ width: "200px", height: "95px" }}
      />
    </div>
  );
}

export default Gauge;

Gauge.propTypes = {
  value: PropTypes.number.isRequired,
  arcLen: PropTypes.number.isRequired,
  needleColor: PropTypes.string.isRequired,
};
