import { Gate } from "../Gate/Gate";
import { Flight, meals } from "../Flight/Flight";

export class Airport {

    gates: Gate[] = [];
    constructor(public name: string) {}
  
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

let airport = new Airport("ASAP");

let gateA1 = new Gate("AA1");
let gateB2 = new Gate("BB2");

airport.addGate(gateA1);
airport.addGate(gateB2);

let flight1 = new Flight("A10","10 PM ","1 PM","12-05-2023",meals.DIARYFREE);
let flight2 = new Flight("D11", "3 AM", "12 PM","00-00-00",meals.VEGETARIAN);

gateA1.assignFlight(flight1);
gateB2.assignFlight(flight2);

let flightNumber = "A10";
let gate = airport.getGateByFlightNumber(flightNumber);

if (gate) {
  console.log("Your flight " + flightNumber +" is waiting at gate " + gate.number);
} else {
  console.log("We could not find your flight " + flightNumber);
}

