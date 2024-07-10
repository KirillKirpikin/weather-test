import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ICityIP } from "../types/cityIp.type";
import { useEffect } from "react";

const getCityByIP = async () => {
    return axios.get<ICityIP>(
        `https://ipinfo.io/?token=${import.meta.env.VITE_API_IP_TOKEN}`
    );
};

export function useGetCityUser() {
    const { data, isSuccess, isLoading, isError } = useQuery({
        queryKey: ["cityByIp"],
        queryFn: getCityByIP,
        select: (data) => data.data,
    });

    useEffect(() => {
        if (isError) console.log("Error");
    }, [isError]);

    return { data, isSuccess, isLoading };
}
