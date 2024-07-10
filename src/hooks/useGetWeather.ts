import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IWeather } from "../types/weather.type";
import { useEffect } from "react";

const getWeather = async (search: string | null) => {
    return axios.get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?appid=${
            import.meta.env.VITE_API_WHEATER
        }&lang=ukr&q=${search}&units=metric`
    );
};

export function useGetWeather(search: string | null) {
    const { data, isSuccess, isLoading, isError } = useQuery({
        queryKey: ["weater", search],
        queryFn: () => getWeather(search),
        select: (data) => data.data,
        enabled: !!search,
    });

    useEffect(() => {
        if (isError) console.log("Error");
    }, [isError]);

    return { data, isSuccess, isLoading };
}
