import styles from "./not-location.module.scss";
const NoLocation = () => {
    return (
        <div className={styles.section}>
            <div>
                <p>Couldn't determine the geolocation,</p>
                <p>please use the city search</p>
            </div>
        </div>
    );
};

export default NoLocation;
