export enum ticket {
    SINGLETICKET,
    RETURNTICKET
}
import { Person, genders } from "../Person/Person";
import { BoardingPass } from "../BoardingPass/BoardingPass";
import { Flight, meals } from "../Flight/Flight";
import { Passanger } from "../Passanger/Passanger";
import { Seat, seattypes } from "../Seat/Seat";
import { Trip } from "../Trip/Trip";

export class Booking {
    flights: Flight[]=[];
    passangers: Passanger[]=[];
    constructor
    (
        public bookingID: number,
        private amount: number, 
        private currency: string, 
        public dateTime: string, 
        private numberOfTicket: number, 
        public departureTime: string, 
        protected referenceNumber: string, 
        public seats: Seat, 
        public trips: Trip, 
        // private boardingPasses: BoardingPass, 

    ) {}

    addPassenger(passanger: Passanger){
        this.passangers.push(passanger);
    }

    getPassengerDetails(bookingID: number){
        if(bookingID == this.bookingID){
            for(let passInfo of this.passangers){
                return passInfo;
            }
            // return this.seats;
        }
        return "Not found!"
    };

    getTrip(): Trip {
        return this.trips;
    };

    addFlight(flight: Flight){
        this.flights.push(flight);
    }
}

let seat1 = new Seat("10A",seattypes.WINDOW);
let trip1 = new Trip("Kyoto","7 Hours");

let booking1 = new Booking(1,300,"USD","11-23-2002",10,"8 PM", "10A",seat1,trip1);
let booking2 = new Booking(2,600,"USD","11-23-2002",20,"10 PM", "11A",seat1,trip1);

let p1 = new Passanger(12345,"20/April/2002","10-04-2023","JJ Kiko","jj@gmail.com",89676767,"pp",genders.MALE,"2 baggage",meals.DIARYFREE);
let p2 = new Passanger(77777,"20/April/2002","10-04-2023","kk","kk@gmail.com",1111,"sl",genders.FEMALE,"9 baggage",meals.KOSHER);

booking1.addPassenger(p1);
booking2.addPassenger(p2);

console.log(booking2.getPassengerDetails(2));

// let myPassengerTrip = new Trip("Japan", "7 hours");
// console.log("She goes to : " + myPassengerTrip.destination + " and spend for : " + myPassengerTrip.duration);