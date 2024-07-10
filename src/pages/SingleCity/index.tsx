import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import Weather from "../../components/Weather";

const SingleCity = () => {
    const { city } = useParams<{ city: string }>();

    return (
        <div>
            <SearchBar />
            {city && <Weather search={city} />}
        </div>
    );
};

export default SingleCity;
