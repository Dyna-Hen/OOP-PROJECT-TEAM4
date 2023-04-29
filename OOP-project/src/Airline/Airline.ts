import { Airplane } from "../Airplane/Airplane";
import { Passanger } from "../Passanger/Passanger";

export class Airline {
    public airplanes: Airplane[] = [];
    public passangers: Passanger[] = [];
    constructor
    (
        public airlineName: string
    ) {}
    
    addAirline(airplane: Airplane) {
        return this.airplanes.push(airplane);
    }

    addPassanger(passanger: Passanger) {
        return this.passangers.push(passanger);
    }

    getPassanger(){
        return this.passangers;
    }

    countReturnTicket(){
        let numPassanger =0
        let allPassanger = this.passangers;
        for(let passanger of allPassanger){
           return passanger
            
        }
        return numPassanger
    }
}