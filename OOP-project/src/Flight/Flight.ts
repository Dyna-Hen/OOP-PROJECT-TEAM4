import { Tickets } from "../Booking/Booking";
import { Passanger } from "../Passanger/Passanger";

export enum meals {
    VEGETARIAN,
    VEGAN,
    DIARYFREE,
    HALAL,
    KOSHER,
    FORTH
} 

export class Flight {
    passangers: Passanger[]=[]
    constructor
    (
        public flightNumber: string, 
        public departureTime: string, 
        public arrivalTime: string, 
        public dateTime: string,
        meal: meals
        
    ) {}
    addPassanger(passanger: Passanger){
        this.passangers.push(passanger);
    };
   
};