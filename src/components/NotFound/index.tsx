import NotImg from "../../assets/NotFound.png";
import styles from "./not.module.scss";

const NotFound = () => {
    return (
        <div className={styles.content}>
            <div className={styles.img}>
                <img src={NotImg} alt="rain" />
            </div>
            <p>Sory, page Not Found</p>
        </div>
    );
};

export default NotFound;
