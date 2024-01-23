import { useState } from "react";
import { getWeatherInfo } from "./services/weather-service";

export default function App() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchWeather = async () => {
    try {
      /*
      Hardcoded location value to check the API_RESPONSE,
       must be a valid location to work 
       */
      const location = `Delhi`;

      const response = await getWeatherInfo(location);
      setSuccess("Successfully Fetched the Data !");
      setError(null);
      console.log(response);
    } catch (error) {
      setError(
        "Error occured while fetching weather data, make sure you have configured the API_KEY correctly !"
      );
      setSuccess(null);
    }
  };

  return (
    <div
      id="app-container"
      className="max-w-7xl mx-auto h-screen grid place-content-center bg-gray-200"
    >
      <main className="flex flex-col items-center gap-4 p-2 m-2">
        <h1 className="font-bold text-2xl">
          Click on the below button to check whether you have correctly
          configured the API_KEY or not
        </h1>

        {success && (
          <div className="text-green-600 text-lg text-center font-bold">
            Data fetched successfully !
          </div>
        )}

        {error && (
          <div className="text-red-600 text-lg text-center font-bold">
            {error}
          </div>
        )}

        <button
          onClick={fetchWeather}
          className="px-2 py-4 rounded-full bg-gray-500 font-bold hover:bg-gray-700 hover:text-white duration-150 ease-in text-black border shadow-lg w-[30%] mx-auto"
        >
          CHECK_API
        </button>
      </main>
    </div>
  );
}
