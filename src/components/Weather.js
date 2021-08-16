const Weather = ({ weather }) => {
    return (
        <>
            {Object.keys(weather).length === 0 ? (
                <h3>Pick a city to display the weather</h3>
            ) : (
                weather.weather?.map((obj) => (
                    <div className="weather-container" key={obj.id}>
                        <h3>{weather.name}</h3>
                        <h4>{obj.main}</h4>
                        <h4 className="temp">
                            {weather.main.temp}
                            <span>&deg;</span>
                        </h4>

                        <img
                            className="weather-icon"
                            src={`https://openweathermap.org/img/wn/${obj.icon}@2x.png`}
                            alt="weather icons"
                        ></img>
                    </div>
                ))
            )}
        </>
    );
};

export default Weather;