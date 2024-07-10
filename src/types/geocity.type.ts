export interface IGeoCityApi {
    data: IcityObj[];
}

interface IcityObj {
    id: number;
    city: string;
    countryCode: string;
}

export interface OptionType {
    value: string;
    label: string;
}
