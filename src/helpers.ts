import { Coordinate, Customer } from "./types"

const degreesToRadians = (deg: number): number => deg * (Math.PI / 180);

// calculate distance between two coordinate
export const greatCircleDistance = (co1: Coordinate, co2: Coordinate): number => {
    const earthRadius = 6371; // Radius of the earth in km
    const distanceLat = degreesToRadians(co2.lat - co1.lat);
    const distanceLon = degreesToRadians(co2.long - co1.long);
    const a =
        Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
        Math.cos(degreesToRadians(co1.lat)) *
        Math.cos(degreesToRadians(co2.lat)) *
        Math.sin(distanceLon / 2) *
        Math.sin(distanceLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c; // Distance in km
}

// parse each log line to js object
export const parseToObject = (line: string): Customer => {
    const parsed: Customer = {};

    if (line) {
        line.split(",").forEach((item) => {
            const trimmed = item.trim();
            if (trimmed) {
                const pair: string[] = trimmed.split(":");
                parsed[pair[0].trim()] = pair[1].trim();
            }
        });
    }

    return parsed;
};
