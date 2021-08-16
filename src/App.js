import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Weather from "./components/Weather";
import DropDown from "./components/DropDown";
require('dotenv').config()

export default function App() {
  const [weather, setWeather] = useState({});
  const [countries, setCountries] = useState([]);
  const [capCityArray, setCapCityArray] = useState([]);
  const [city, setCity] = useState("Toronto");
  const [cityError, setCityError] = useState(false);

  //.capital_city in country obj is originally only sorted by name
  //getValues() creates a new array alphabetically sorted by capital city
  //the return from getValues() is set to capCityArray and mapped over below in JSX
  useEffect(() => {
    const getValues = () => {
      const newArr = [];
      if (countries.length > 0) {
        countries.forEach((country) => newArr.push(country.capital));
      }
      return newArr.sort().filter((obj) => obj !== "");
    };
    setCapCityArray(getValues());
  }, [countries]);

  useEffect(() => {
    const fetchWeather = async () => {
      if (city !== "") {
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
          );
          setCityError(false);
          setWeather(res.data);
        } catch (err) {
          console.log("ERR", err.message);
          setCityError(true);
        }
      }
    };
    fetchWeather();
  }, [city]);

  useEffect(() => {
    const fetchCitites = async () => {
      try {
        const res = await axios.get("https://restcountries.eu/rest/v2/all");
        setCountries(res.data);
      } catch (err) {
        setCityError(true);
        console.log("ERR", err.message);
      }
    };
    fetchCitites();
  }, []);

  const handleOnChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <Weather weather={weather} />

      <DropDown
        handleOnChange={handleOnChange}
        capCityArray={capCityArray}
        city={city}
        cityError={cityError}
      />
    </div>
  );
}

