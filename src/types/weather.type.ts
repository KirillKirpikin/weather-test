export interface IWeather {
    weather: Weather[];
    main: IMain;
    wind: IWind;
    name: string;
    sys: {
        country: string;
    };
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface IMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
}

interface IWind {
    speed: number;
    deg: number;
    gust: number;
}
