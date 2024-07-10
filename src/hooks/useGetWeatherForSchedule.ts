import axios from "axios";
import { ISchedule } from "../types/schedule.type";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const getSchedule = async (search: string, cnt: number) => {
    return axios.get<ISchedule>(
        `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${search}&cnt=${cnt}&appid=48c4707fccd5780dbbc1b9d36bb576cf`
    );
};

export function useGetWeatherForSchedule(search: string, cnt: number) {
    const { data, isSuccess, isLoading, isError } = useQuery({
        queryKey: ["schedule", search, cnt],
        queryFn: () => getSchedule(search, cnt),
        select: (data) => data.data,
    });

    useEffect(() => {
        if (isError) console.log("Error");
    }, [isError]);

    return { data, isSuccess, isLoading };
}
