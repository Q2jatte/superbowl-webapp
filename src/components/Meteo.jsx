import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherEmoji from "./weatherEmoji";

function Meteo({ coordinates }) {
  // Fonction pour convertir les coordonnées en valeurs décimales
  function convertCoordinates(coordStr) {
    const parts = coordStr.match(/(\d+)° (\d+)′ (\d+)″ ([NO])/);
    if (!parts) {
      throw new Error("Format de coordonnées incorrect");
    }

    const degrees = parseFloat(parts[1]);
    const minutes = parseFloat(parts[2]);
    const seconds = parseFloat(parts[3]);
    const direction = parts[4];

    // Convertir en valeurs décimales
    const decimalValue = degrees + minutes / 60 + seconds / 3600;
    if (direction === "S" || direction === "O") {
      return (-decimalValue).toFixed(4); // Arrondir à 4 décimales et rendre négatif si nécessaire
    } else {
      return decimalValue.toFixed(4);
    }
  }

  //const coordinates = { coordinates };
  // Convertir les coordonnées en valeurs décimales de latitude et de longitude
  const newCoordinates = coordinates
    .split(", ")
    .map((coord) => convertCoordinates(coord))
    .join(",");

  const [data, setData] = useState(null); // weather data state
  const [isLoading, setIsLoading] = useState(false); // loading data state
  const [error, setError] = useState(null); // error state

  const params = {
    access_key: "05b3e6703a94bcc2cd682cd4fd01333b",
    query: newCoordinates,
  };

  useEffect(() => {
    setIsLoading(true);
    console.log("http://api.weatherstack.com/current", { params });
    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger text-center">⚠️ {error} ⚠️</p>}
      {isLoading && !error && <p>Loading...</p>}
      {data && (
        <span>
          {WeatherEmoji(data.current.weather_descriptions[0])}{" "}
          {data.current.temperature}°C
        </span>
      )}
    </>
  );
}

export default Meteo;
