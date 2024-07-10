import axios from "axios";
import { useState } from "react";
import { AsyncPaginate, LoadOptions } from "react-select-async-paginate";
import { geoApiOptions } from "../../utils/api";
import { IGeoCityApi, OptionType } from "../../types/geocity.type";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [input, setInput] = useState<OptionType | null>(null);
    const navigate = useNavigate();
    const handleOnChange = (search: OptionType | null) => {
        setInput(search);
        if (search) {
            navigate(`/${search.value.toLowerCase()}`);
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const loadOptions: LoadOptions<OptionType, any, any> = async (
        inputValue: string
    ) => {
        try {
            const response = await axios.get<IGeoCityApi>(
                `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefixDefaultLangResults=true&limit=5&namePrefix=${inputValue}`,
                geoApiOptions
            );
            const options = response.data.data.map((city) => ({
                value: city.city,
                label: `${city.city} ${city.countryCode}`,
            }));
            return {
                options,
            };
        } catch (error) {
            return {
                options: [],
            };
        }
    };

    const customStyles = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        option: (provided: any) => ({
            ...provided,
            color: "black",
        }),
    };

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={input}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            styles={customStyles}
        />
    );
};

export default SearchBar;
