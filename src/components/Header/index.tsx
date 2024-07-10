import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
    const { pathname } = useLocation();
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.logo}>
                        <Link to={"/"}>
                            <div>TestWeather</div>
                        </Link>
                    </div>
                    <div className={styles.navigate}>
                        <Link
                            className={`${styles.nav} ${
                                pathname !== "/favorites" && styles.nav_active
                            }`}
                            to={"/"}
                        >
                            <div>Main</div>
                        </Link>
                        <Link
                            className={`${styles.nav} ${
                                pathname === "/favorites" && styles.nav_active
                            }`}
                            to={"/favorites"}
                        >
                            <div>Favorites</div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
