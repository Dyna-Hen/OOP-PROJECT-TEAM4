import { Gate } from "../Gate/Gate";
import { Flight, meals } from "../Flight/Flight";
import { Passanger } from "../Passanger/Passanger";
import { Booking } from "../Booking/Booking";

export class Airport {
    

    gates: Gate[] = [];
    public passangers: Passanger[]=[];
    public bookings: Booking[]=[];
    constructor(public name: string) {}
  
    addPassenger(passenger: Passanger) {
      this.passangers.push(passenger)
    }

    getPassanger() {
      return this.passangers;
    }

    addBooking(booking: Booking) {
      return this.bookings.push(booking)
    }

    getBookings(){
      return this.bookings
    }

    addGate(gate: Gate) {
      this.gates.push(gate);
    }
  
    getGateByFlightNumber(flightNumber: string): Gate | undefined {
      for (const gate of this.gates) {
        if (gate.flight?.flightNumber === flightNumber) {
          return gate;
        }
      }
      return undefined;
    }
  }



