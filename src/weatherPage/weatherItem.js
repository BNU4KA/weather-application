import React from "react";

const WeatherItem = ({weatherInfo}) => (
    <div className="block h-full w-1/10 bg-[#4793FF] text-white rounded-lg text-left px-5 font-bold py-3 text-center">
        <p>place: {weatherInfo?.name}</p>
        <p>temperature: {weatherInfo?.main.temp}</p>
    </div>
);

export default WeatherItem;