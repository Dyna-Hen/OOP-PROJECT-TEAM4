export enum Tickets { 
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
        protected ticket: Tickets, 
        // private boardingPasses: BoardingPass,  
 
    ) {} 
 
    getSeat(){ 
        return this.seats 
    } 
 
    getFlight(){ 
        return this.flights 
    } 
 
    getTrip(): Trip { 
        return this.trips; 
    }; 
    
    // now  
    getTickets(){ 
        return this.ticket 
    } 
    //  

    addFlight(flight: Flight){
        this.flights.push(flight);
    }

    getMeals(){
        let meals: string = "";
        for(let eachMeal of this.passangers){
            meals += eachMeal["meal"] + " "
            
        }
        return meals;
    }
 
    addPassenger(passanger:Passanger){ 
        return this.passangers.push(passanger) 
    } 

    getPassengerDetails(idOfPassenger: number){ 
        let detailOfPassenger : Passanger[]=[] 
        for (let passanger of this.passangers){ 
            if(idOfPassenger == passanger.getID()){ 
                detailOfPassenger.push(passanger) 
                // return passanger.getID() 
            } 
        } 
        return detailOfPassenger 
    } 
     
} 
 
 
 
// let myPassengerTrip = new Trip("Japan", "7 hours"); 
// console.log("She goes to : " + myPassengerTrip.destination + " and spend for : " + myPassengerTrip.duration);