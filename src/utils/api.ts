export const geoApiOptions = {
    method: "GET",
    headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_RAPID_KEY,
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    },
};
