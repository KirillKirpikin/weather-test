import { useEffect, useState } from "react";
import { useGetWeather } from "../../hooks/useGetWeather";
import Schedule from "../Schedule";

import styles from "./weather.module.scss";
import SpinerCircle from "../Spiner";
import NotFound from "../NotFound";

const Weather = ({ search }: { search: string }) => {
    const { data, isLoading, isSuccess } = useGetWeather(search);
    const [favorite, setFavorite] = useState<boolean>(false);
    const handleAddToFavorite = () => {
        
        if (data?.name) {
            
            const citiesWeather = JSON.parse(localStorage.getItem("citiesWeather") || "[]");
            const cityIndex = citiesWeather.indexOf(data.name.toLowerCase());

            if (cityIndex === -1) {
                if (citiesWeather.length < 5) {
                    setFavorite(true);
                    citiesWeather.push(data.name.toLowerCase());
                } else {
                    alert("You can have a maximum of 5 favorite cities.");
                    return;
                }
            } else {
                if (citiesWeather.length > 1) {
                    setFavorite(false);
                    citiesWeather.splice(cityIndex, 1);
                } else {
                    alert("You must have at least one favorite city.");
                    return;
                }
            }

            localStorage.setItem(
                "citiesWeather",
                JSON.stringify(citiesWeather)
            );
        }
    };

    useEffect(() => {
        const local = localStorage.getItem("citiesWeather");
        if (local && JSON.parse(local).indexOf(search.toLowerCase()) !== -1) {
            setFavorite(true);
        } else {
            setFavorite(false);
        }
    }, [search]);

    return (
        <div className={styles.section}>
            {isLoading ? (
                <SpinerCircle height="500px" />
            ) : isSuccess && data?.name ? (
                <>
                    <div className={styles.favorite}>
                        <button
                            onClick={handleAddToFavorite}
                            className={`${
                                favorite ? styles.remove : styles.add
                            }`}
                        >
                            {favorite
                                ? "Remove from Favorite"
                                : "Add to Favorite"}
                        </button>
                    </div>
                    <h2>{data.name && `city: ${data.name}`}</h2>

                    <div className={styles.information}>
                        <div className={styles.img}>
                            <img
                                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                alt="weather img"
                            />
                        </div>
                        <p className={styles.temp}>
                            {data.main.temp.toFixed()} °C
                        </p>
                        <div className={styles.informations}>
                            <div className={styles.info}>
                                <p>{data.main.feels_like.toFixed()} °C</p>
                                <p>Fils Like:</p>
                            </div>
                            <div className={styles.info}>
                                <p>{data.wind.speed.toFixed()} KPH</p>
                                <p>Wind speed:</p>
                            </div>
                            <div className={styles.info}>
                                <p>{data.main.humidity.toFixed()} %</p>
                                <p>Humidity:</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ maxWidth: "100%", marginBottom: "400px" }}>
                        <Schedule city={data.name} />
                    </div>
                </>
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default Weather;
