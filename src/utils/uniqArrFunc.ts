import { List } from "../types/schedule.type";

export function uniqArrFunc(arr: List[] | undefined) {
    const newArr = [];
    if (arr) {
        const map: Record<string, boolean> = {};
        for (let i = 0; i < arr.length; i++) {
            const dat = arr[i].dt_txt.split(" ")[0].substring(5);
            if (map[dat]) {
                newArr.push(null);
            } else {
                map[dat] = true;
                newArr.push(dat);
            }
        }
    }
    return newArr;
}
