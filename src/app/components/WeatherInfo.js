import React from 'react';

const WeatherInfo = props => {



    return(

        <div>
            {
            props.error &&
            <div className="alert alert-danger mt-2">
                <p>{props.error}</p>
            </div>
            }

            {
                props.temperature ?
                <div className="card card-body mt-2">
                    <p>
                        Location: {props.city}, {props.country}
                    </p>
                    <p>
                        Temperature: {props.temperature} °C, {props.description}
                    </p>
                    <p> 
                        Humidity: {props.humidity}
                    </p>
                    <p>
                        Wind_speed: {props.wind_speed} Km/s
                    </p>
                </div>
                :
                <div className="card card-body mt-2">
                    <p>Enter a city and country name</p>
                </div>
            }

           
        </div>
    )
}

export default WeatherInfo;