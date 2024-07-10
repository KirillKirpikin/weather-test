import styles from "./app.module.scss";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <div className={styles.app}>
            <main>
                <Header />
                <div className="container">
                    <AppRoutes />
                </div>
            </main>
        </div>
    );
}

export default App;
