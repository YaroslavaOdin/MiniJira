import { Task } from "./task";

export enum Specialization {
    FrontEndDev = "Front-end Developer",
    BackEndDev = "Back-end Developer",
    QAEngineer = "QA Engineer",
}

export interface User {
    id:number,
    name:string,
    surname:string,
    specialization:Specialization | string,
    tasks:Task[]
} 