import data from './data.json'

export type Place = {
    id: number,
    name: string,
    coords: Array<number>,
    description: string,
    address: string,
}

export function getData() : Array<Place> {
    return data.objects;
}

