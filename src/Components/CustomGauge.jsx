// import React from 'react'
import "./custom.css";

function CustomGauge() {
  return (
    <div>
      <div className="wrapper">
        <div className="gauge">
          <div className="slice-colors">
            <div className="st slice-item"></div>
            <div className="st slice-item"></div>
            <div className="st slice-item"></div>
            <div className="st slice-item"></div>
            <div className="st slice-item"></div>
          </div>
          <div className="needle"></div>
          <div className="gauge-center"></div>
        </div>
      </div>
      <h1 className="wrapper-header">0 ºC</h1>
    </div>
  );
}

export default CustomGauge;
