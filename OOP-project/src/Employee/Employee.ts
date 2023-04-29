import { Flight } from "../Flight/Flight";
import { Person, genders } from "../Person/Person";

export enum skills {
    PILOT,
    COPILOT,
    FLIGHTATTENDANTS,
    FLIGHTENGINEER,
    CREW,
    CHEFF,
    AIRPORTCONTROLLER
}

export class Employee extends Person{
    constructor
    (
        public personality: string, 
        name: string, 
        email: string, 
        phoneNumber: number, 
        address: string, 
        gender: genders, 
        flights: Flight, 
        skills: skills
    )
    {
        super
        (
            name, 
            email, 
            phoneNumber, 
            address,
            gender
        )
    }
}