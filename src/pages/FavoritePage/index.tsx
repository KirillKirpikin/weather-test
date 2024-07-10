import { useEffect, useState } from "react";
import WeatherItem from "../../components/WeterItem";

import styles from "./favorite.module.scss";

const FavoritePage = () => {
    const [cityes, setCityes] = useState<string[]>([]);
    const local = localStorage.getItem("citiesWeather");
    useEffect(() => {
        if (local) {
            setCityes(JSON.parse(local));
        }
    }, [local]);

    return (
        <div className={styles.list}>
            {cityes.length > 0 &&
                cityes.map((item, index) => (
                    <WeatherItem key={index} city={item} />
                ))}
        </div>
    );
};

export default FavoritePage;
