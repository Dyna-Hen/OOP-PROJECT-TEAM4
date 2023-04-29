import { Gate } from "../Gate/Gate";
import { Flight, meals } from "../Flight/Flight";
import { Passanger } from "../Passanger/Passanger";

export class Airport {
    addPassenger(p2: Passanger) {
        throw new Error("Method not implemented.");
    }

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



