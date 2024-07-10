import { Link } from "react-router-dom";
import { useGetWeather } from "../../hooks/useGetWeather";
import styles from "./item.module.scss";
import SpinerCircle from "../Spiner";
import NotFound from "../NotFound";

const WeatherItem = ({ city }: { city: string }) => {
    const { data, isLoading, isSuccess } = useGetWeather(city);

    return (
        <div className={styles.item}>
            {isLoading ? (
                <SpinerCircle height="200px" />
            ) : isSuccess && data?.name ? (
                <Link to={`/${city}`} className={styles.content}>
                    <div className={styles.top}>
                        <div>
                            <h4>
                                City: {data.name} {data.sys.country}
                            </h4>
                            <h5>{data.weather[0].description}</h5>
                        </div>
                        <div>
                            <div>
                                <img
                                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                    alt="weather img"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <div>
                            <h2>{data.main.temp.toFixed()} °C </h2>
                        </div>
                        <div>
                            <div className={styles.info}>
                                <p>Fils Like:</p>
                                <p>{data.main.feels_like.toFixed()} °C</p>
                            </div>
                            <div className={styles.info}>
                                <p>Wind speed:</p>
                                <p>{data.wind.speed.toFixed()} KPH</p>
                            </div>
                            <div className={styles.info}>
                                <p>Humidity:</p>
                                <p>{data.main.humidity.toFixed()} %</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default WeatherItem;
