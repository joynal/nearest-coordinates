import split from "split";
import through from "through2";

import { Coordinate } from "./types"
import { greatCircleDistance, parseToObject } from "./helpers"

// parloa's coordinate
const parloaCoordinate = { lat: 52.493256, long: 13.446082 };

// temp variable for storing nearest customer ids
const customerIds: string[] = [];

// print result after processing it
const end = () => {
    console.log("Nearest customers:", customerIds.sort());
};

// read each line from file as buffer
const transform = (buffer: Buffer, _: BufferEncoding, next: Function) => {
    const customer = parseToObject(buffer.toString());

    if (customer.lat && customer.long) {
        const customerCoordinate: Coordinate = {
            lat: parseFloat(customer.lat),
            long: parseFloat(customer.long),
        }

        if (greatCircleDistance(parloaCoordinate, customerCoordinate) <= 100) {
            customerIds.push(customer.id)
        }
    }

    next();
};

const transformStream = through(transform, end);

process.stdin.pipe(split()).pipe(transformStream).pipe(process.stdout);
