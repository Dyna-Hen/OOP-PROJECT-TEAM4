import { Flight } from "../Flight/Flight";
import { Route } from "../Route/Route";

export class Airplane {
    constructor
    (
        public airplaneName: string, 
        public takeOfTime: string, 
        public numberOfSeat: number, 
        flights: Flight, 
        routs: Route
        
    ) {}
}