import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { useGetCityUser } from "../../hooks/useGetCityUser";
import SpinerCircle from "../../components/Spiner";
import NoLocation from "../../components/NoLocation";

const HomePage = () => {
    const { data, isLoading } = useGetCityUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (data && data.city) {
            navigate(`/${data.city.toLowerCase()}`);
            if (!localStorage.getItem("citiesWeather")) {
                localStorage.setItem(
                    "citiesWeather",
                    JSON.stringify([data.city.toLowerCase()])
                );
            }
        }
    }, [data]);

    return (
        <div>
            <SearchBar />
            {isLoading ? <SpinerCircle height="400px" /> : <NoLocation />}
        </div>
    );
};

export default HomePage;
