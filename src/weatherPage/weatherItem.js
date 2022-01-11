import React from "react";

const WeatherItem = ({weatherInfo}) => (
   <div>
      <div className="block h-full w-1/10 bg-[#4793FF] text-white rounded-lg text-left px-5 font-bold py-3 text-center">
         <p>Date: <br/>{weatherInfo.dt_txt}</p>
         <p>temperature: {weatherInfo.main.temp}</p>
      </div>
   </div>
);

export default WeatherItem;