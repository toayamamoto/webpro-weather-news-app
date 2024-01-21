import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [temperatureData, setTemperatureData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('Tokyo');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=1c86505a9c601d9929e5715d63f297c7&units=metric`);
        const data = await response.json();
        setWeatherData(data);

        if (data.list) {
          const temperatures = data.list
            .slice(0, 8) 
            .map((forecast) => ({
              time: forecast.dt_txt.split(' ')[1], 
              temperature: forecast.main.temp,
            }));
          setTemperatureData(temperatures);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <h1>今日の気温</h1>

      <div>
        <label htmlFor="citySelect">都市選択:</label>
        <select id="citySelect" value={selectedCity} onChange={handleCityChange}>
          <option value="Tokyo">東京</option>
          <option value="Osaka">大阪</option>
          <option value="Hokkaido">北海道</option>
        </select>
      </div>

      {weatherData && (
        <div>
          <h2>{weatherData.city.name}</h2>
          <LineChart width={800} height={400} data={temperatureData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
          </LineChart>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;