import { useState } from "react";
import { getWeatherInfo } from "./services/weather-service";
import WeatherDetails from "./components/WeatherDetails";

export default function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchWeather(location);
    }
  };

  const fetchWeather = async (location) => {
    try {
      setLoading(true);
      setError(null);

      const response = await getWeatherInfo(location);
      setWeatherData(response);

      /*
      You can use sample-response.json to analyse the response structure, or you can also check out the console after adding the valid API_KEY and searching for valid location
      */

      console.log(response);
    } catch (error) {
      setError(
        "Error occured while fetching weather data, make sure correct location is entered!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto h-screen grid place-content-center bg-gray-200">
        <main className="p-2 m-2 flex flex-col gap-3 items-center justify-center min-w-[400px] min-h-[420px] border border-black rounded-sm  bg-gray-400">
          <h1 className="text-center font-bold text-3xl">Weather App</h1>
          <input
            type="text"
            value={location}
            placeholder="Enter Location"
            className="px-2 py-4 rounded-full text-xl focus:outline-none shadow-lg border border-black/80 bg-gray-300 text-black/80"
            onChange={(e) => setLocation(e.target.value)}
            required
            onKeyDownCapture={handleEnterKeyPress}
          />

          {/* To be displayed when no location is entered */}
          {!location && (
            <div className="text-center p-2 text-red-700 font-bold">
              Enter valid location to get weather details
            </div>
          )}

          {/* Only show button when location is entered */}
          {location && (
            <button
              className="font-bold text-2xl px-4 py-2 rounded-3xl bg-gray-500 mx-auto w-[50%]
            hover:bg-red-500 hover:text-white ease-linear duration-150
            "
              onClick={() => fetchWeather(location)}
            >
              Get Weather
            </button>
          )}

          {/* While request is not resolved*/}
          {loading && (
            <div className="font-bold text-blue-800 underline">
              Loading Weather Details ...
            </div>
          )}

          {/* In case of Error */}
          {error && (
            <div className="text-red-700 font-bold w-[70%]">{error}</div>
          )}

          {/* Request Fetched Successfully, render the weather data */}
          {weatherData && !loading && !error && (
            <WeatherDetails {...weatherData} />
          )}
        </main>
      </div>
    </>
  );
}
