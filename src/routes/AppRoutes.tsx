import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SingleCity from "../pages/SingleCity";
import FavoritePage from "../pages/FavoritePage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/:city" element={<SingleCity />} />
            <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
    );
};

export default AppRoutes;
