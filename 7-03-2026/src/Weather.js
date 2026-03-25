import React, { useState } from "react";

function Weather() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "2bb402d188ff8ef0e18047366b9b72a2";

  const getWeather = async () => {

    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();

      setWeather(data);

    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Get Weather
      </button>

      {loading && <p>Loading...</p>}

      {error && <p style={{color:"red"}}>{error}</p>}

      {weather && (
        <div>

          <h2>{weather.name}</h2>

          <p>Temp: {weather.main.temp} °C</p>

          <p>Humidity: {weather.main.humidity}</p>

          <p>
            {weather.weather[0].description}
          </p>

        </div>
      )}

    </div>
  );
}

export default Weather;