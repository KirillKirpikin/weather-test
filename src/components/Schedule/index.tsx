import { Line } from "react-chartjs-2";
import { useGetWeatherForSchedule } from "../../hooks/useGetWeatherForSchedule";
import styles from "./schedule.module.scss";

import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { useState } from "react";
import { uniqArrFunc } from "../../utils/uniqArrFunc";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Schedule = ({ city }: { city: string }) => {
    const [cnt, setCnt] = useState<8 | 40>(8);
    const { data, isLoading, isSuccess } = useGetWeatherForSchedule(city, cnt);
    const uniqArr = uniqArrFunc(data?.list);

    return (
        <div>
            <h2 style={{ marginBottom: "30px" }}>Temperature graph</h2>
            <div className={styles.btns}>
                <div
                    className={`${styles.btn} ${
                        cnt === 8 && styles.btn_active
                    }`}
                >
                    <button onClick={() => setCnt(8)}>1 Day</button>
                </div>
                <div
                    className={`${styles.btn} ${
                        cnt === 40 && styles.btn_active
                    }`}
                >
                    <button onClick={() => setCnt(40)}>5 Day</button>
                </div>
            </div>
            {isLoading ? (
                <Line
                    color="white"
                    data={{
                        labels: [""],
                        datasets: [
                            {
                                label: "°C",
                                data: [""],
                            },
                        ],
                    }}
                    options={{
                        color: "white",
                        borderColor: "white",
                        scales: {
                            x: {
                                border: {
                                    color: "white",
                                },
                                ticks: {
                                    color: "white",
                                },
                            },
                            y: {
                                ticks: {
                                    color: "white",
                                },
                                border: {
                                    color: "white",
                                },
                            },
                        },
                    }}
                />
            ) : isSuccess && data?.city ? (
                <>
                    <Line
                        color="white"
                        data={{
                            labels: data.list.map((item) => item.dt_txt),
                            datasets: [
                                {
                                    label: "°C",
                                    data: data.list.map((item) =>
                                        item.main.temp.toFixed()
                                    ),
                                    backgroundColor: "#064FF0",
                                    borderColor: "#064FF0",
                                    borderWidth: 2,
                                },
                            ],
                        }}
                        options={{
                            color: "white",
                            borderColor: "white",

                            scales: {
                                x: {
                                    border: {
                                        color: "white",
                                    },
                                    ticks: {
                                        callback: function (_, index) {
                                            if (cnt === 8) {
                                                return data.list[
                                                    index
                                                ].dt_txt.split(" ")[1];
                                            }
                                            return uniqArr[index];
                                        },
                                        align: "inner",
                                        color: "white",
                                        padding: 10,
                                    },
                                    offset: false,
                                },
                                y: {
                                    ticks: {
                                        color: "white",
                                    },
                                    border: {
                                        color: "white",
                                    },
                                },
                            },
                        }}
                    />
                </>
            ) : (
                "Not found"
            )}
        </div>
    );
};

export default Schedule;
