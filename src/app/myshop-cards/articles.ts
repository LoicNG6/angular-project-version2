import { Specification } from "./specifications";

export interface Article {
    id: number,
    img: string,
    name: string,
    specification: Specification,
};