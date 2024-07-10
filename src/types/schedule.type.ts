export interface ISchedule {
    city: City;
    list: List[];
}

interface City {
    id: number;
    name: string;
}

export interface List {
    dt: Date;
    main: {
        temp: number;
    };
    dt_txt: string;
}
