import { Flight } from "../Flight/Flight";
export class Gate {
    constructor(public number: string, public flight?: Flight) {}
  
    assignFlight(flight: Flight) {
      this.flight = flight;
    }
  
    removeFlight() {
      this.flight = undefined;
    }
  }