import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import Gauge from "./Components/Gauge.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
      <Gauge value={36} arcLen={[0.4, 0.3, 0.3]} needleColor="#e8ea17"/>
  </React.StrictMode>
);
