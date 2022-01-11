import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import WeatherItem from "./weatherItem";
import {fetchWeatherAction} from "../redux/slices/weatherSlices";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
];

const Weather = ({}) => {
    const [isOpen, setOpen] = useState();
    const popUpOpen = () => setOpen(!isOpen);
    const dispatchWeather = useDispatch();
    useEffect(()=>{
        dispatchWeather(fetchWeatherAction("625144"))
    },[])
    console.log(process.env.REACT_APP_OPEN_WEAHTER_KEY);
    const state = useSelector((state)=> state);
    console.log(state);
    const {weather, loading, error} = state;

    return (
        <div className="h-full w-full">
            <div className="pb-1 mt-5 mb-5 ml-5 mr-5 mx-auto my-auto bg-gray-200 rounded-lg">
                <div className="mx-auto my-auto ml-20 mr-20 mt-20 mb-20">
                    <div className="flex">
                        <p className="ml-9 mt-10 font-bold text-3xl text-[#4793FF]">Weather</p>
                    </div>
                    <div className="flex space-x-10">
                        <div className="h-[300px] font-bold text-left  py-5 w-1/3 bg-white mt-5 rounded-lg flex-shrink-0">
                            <p className="text-6xl ml-5 mt-3">today's temperature: <span className="text-[#4793FF]">{weather?.list[0].main.temp}</span></p>
                            <p className="text-7xl ml-5 mt-10">{weather?.city.name}, {weather?.city.country}</p>
                        </div>
                        <div className="flex py-5 h-[300px] w-2/3 bg-white text-4xl font-bold text-left mt-5 rounded-lg">
                            <div>
                                <p className="ml-10 mt-5">temperature:</p>
                                <p className="ml-10 mt-5">weather:</p>
                                <p className="ml-10 mt-5">pressure:</p>
                                <p className="ml-10 mt-5">wind:</p>
                            </div>
                            <div className="text-4xl font-bold text-left ml-10 pl-5 text-[#4793FF]">
                                <p className="mt-5">{weather?.list[0].main.temp}</p>
                                <p className="mt-5">{weather?.list[0].weather[0].main} ({weather?.list[0].weather[0].description})</p>
                                <p className="mt-5">{weather?.list[0].main.pressure} mm of mercury column</p>
                                <p className="mt-5">{weather?.list[0].wind.speed} m/s</p>
                            </div>
                        </div>
                    </div>
                    {/*<div className="mt-10 pb-5 space-x-5 flex">
                        <div className="h-[35px] w-[145px] rounded-lg bg-white items-center">
                            <p>На Неделю</p>
                        </div>
                        <div className="h-[35px] w-[145px] rounded-lg bg-white">
                            <p>На Месяц</p>
                        </div>
                        <div className="h-[35px] w-[145px] rounded-lg bg-white">
                            <p>На 10 дней</p>
                        </div>
                    </div>*/}
                    <div className="mt-10 flex py-5 px-5 mb-5 h-[240px] w-full bg-white rounded-lg space-x-5 flex-shrink-0 whitespace-nowrap overflow-x-auto ">
                        {/*{MockWeatherPageData.map((weatherInfo) => (
                            <WeatherItem weatherInfo={weatherInfo}/>
                        ))}*/}
                        {weather?.list.map((currentWeather) => (
                            <WeatherItem weatherInfo={currentWeather} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;