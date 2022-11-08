import React, { useEffect, useState } from "react";
import thuder from '../../assets/images/thunderstorm-day.jpg';
import IMAGES from "../../assets/images/images";

function WeatherCard({weatherInfo}) {
  //  props = weatherInfo;
    const [weatherState, setWeatherState] = useState(`url(${IMAGES.clear})`);
    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        city,
        speed,
        country,
        sunset,
    } = weatherInfo;
    
     //Background image changes as per weather condition
     const watherBackground = {
        backgroundImage: weatherState,
    }
   
    //Time conversion from microseconds to seconds
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()} PM`;
    let currentTime = new Date().getHours();
    console.log(currentTime);

    useEffect(() => {
        if(weatherMood === "Thunderstorm"){
            if(currentTime > 18){
                setWeatherState(`url(${IMAGES.thuderstormNight})`);
            } else{
                setWeatherState(`url(${IMAGES.thuderstormDay})`);
            }
        } else if(weatherMood === "Clouds"){
            if(currentTime > 18){
                setWeatherState(`url(${IMAGES.cloudNight})`);
            } else{
                setWeatherState(`url(${IMAGES.cloudDay})`);
            }
        }
        else if(weatherMood === "Drizzle"){
            setWeatherState(`url(${IMAGES.rainDay})`);
        }
        else if(weatherMood === "Rain"){
            if(currentTime > 18){
                setWeatherState(`url(${IMAGES.rainNight})`);
            } else{
                setWeatherState(`url(${IMAGES.rainDay})`);
            }
        }
        else if(weatherMood === "Snow"){
           setWeatherState(`url(${IMAGES.snowNight})`);
        }

        else if((weatherMood === "Mist") || (weatherMood === "Smoke") || (weatherMood === "Haze") || (weatherMood === "Dust") || (weatherMood === "Fog") || (weatherMood === "Sand") || (weatherMood === "Dust") || (weatherMood === "Ash") || (weatherMood === "Squall") ){
            if(currentTime > 18){
                  setWeatherState(`url(${IMAGES.hazeNight})`);
			 } else{
				 setWeatherState(`url(${IMAGES.hazeDay})`);
            }
        }
        else if(weatherMood === "Tornado"){
            if(currentTime > 18){
                setWeatherState(`url(${IMAGES.hazeNight})`);
            } else{
                setWeatherState(`url(${IMAGES.hazeDay})`);
            }
        } else {
            setWeatherState(`url(${IMAGES.clear})`);
        }
    },[weatherInfo]);

  return (
    <div className="weatherWidget">
        <div className="weather-condition" style={watherBackground}>
        </div>

        <div className="weatherInfo">
            <div className="temp">
                <span className="temperature">{Math.floor(temp)}<sup>&deg; C</sup></span>
            </div>
           
            <div className="description">
                <div className="place">{city}, {country}</div>
                <div className="weatherCondition">{weatherMood}</div>
            </div>
            
            <div className="more-temp-info">
                <div className="temp-minmax info">
                    <i className="wi wi-sunset"></i>
                    <p>
                        {timeStr}<br /> Sunset
                    </p>
                </div>
                <div className="humidity info">
                    <i className="wi wi-humidity"></i>
                    <p>
                        {humidity} <br /> Humidity
                    </p>
                </div>
                <div className="pressure info">
                    <i className="wi wi-strong-wind"></i>
                    <p>
                        {pressure} <br /> Pressure
                    </p>
                </div>
                <div className="wind info">
                    <i className="wi wi-windy"></i>
                    <p>
                        {speed} <br /> Speed
                    </p>
                </div>
            </div>
            <div className="dateTime">{new Date().toLocaleString()}</div>
        </div>
        
    </div>
  );
}

export default WeatherCard;
