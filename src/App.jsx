// import GaugeOne from "./Components/GaugeOne";
// import GaugeTwo from "./Components/GaugeTwo";
import CustomGauge from "./Components/CustomGauge";
// import PowerGauge from "./Components/PowerGauge";
import LineChart from "./Components/LineChart";
import { useState } from "react";

function App() {
  const data = [40, 60, 80, 70];

  const [view, setView] = useState({
    graph: false,
    gauge: true,
  });

  const handleClick = () => {
    console.log("clicked");
    setView({
      graph: !view.graph,
      gauge: !view.gauge,
    });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-row items-center justify-center w-full h-full">
          {view.gauge ? (
            <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">
              {data.map((item, index) => {
                return (
                  <div key={index} className="shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] m-5 flex items-center justify-center">
                    <CustomGauge key={index} value={item} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <LineChart />
            </div>
          )}
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleClick}
          >
            Graph View
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
