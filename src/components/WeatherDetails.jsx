export default function WeatherDetails(props) {
  const { name, sys } = props;

  return (
    <div className="flex items-center gap-2 p-2 relative bg-gray-300 rounded-md shadow-xl min-w-[360px]">
      <div className="flex-1 flex flex-col items-center justify-evenly h-full gap-2">
        <h2>
          <span className="font-bold text-xl">{name}</span>, {sys.country}{" "}
          <br />
          {"ADD_WEATHER_DESCRIPTION_HERE"}
        </h2>
        <div>
          <p>
            <span className="font-bold text-3xl">{"ADD_TEMP_HERE"} °C</span>
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-evenly gap-2">
        {/* Here the weather icon has to be added */}
        <img
          className="rounded-lg"
          src={"ADD_IMG_SRC_HERE"}
          alt="Weather Icon"
        />
        <div className="flex flex-col items-center text-sm">
          <p>
            <span className="italic">Feels Like</span> :{" "}
            <span className="font-bold">{"ADD_FEELS_LIKE_HERE"} °C</span>{" "}
          </p>
          <p>
            <span className="italic">Humidity</span> :{" "}
            <span className="font-bold">{"ADD_HUMIDITY_HERE"}%</span>{" "}
          </p>
          <p>
            <span className="italic">Wind Speed</span> :{" "}
            <span className="font-bold">{"ADD_WIND_SPEED_LIKE_HERE"} m/s</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
