import { IEngine } from "./engine";
import { IMake } from "./make";
import { IModel } from "./model";
import { IYear } from "./year";

export interface ICar{
    id: number,
    name: string,
    photo: string,
    yearId: number,
    price: number,
    makeId: number,
    modelId: number,
    engineId: number,
    mileage: number,
    maxSpeed: number,
    secondSpeed: number,

    make: IMake,
    model: IModel,
    engine: IEngine,
    year: IYear
}

export interface Car{
    id: number,
    name: string,
    photo: string,
    yearId: number,
    price: number,
    makeId: number,
    modelId: number,
    engineId: number,
    mileage: number,
    maxSpeed: number,
    secondSpeed: number,
}