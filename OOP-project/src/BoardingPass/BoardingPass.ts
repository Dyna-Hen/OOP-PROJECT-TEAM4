
export class BoardingPass {
    constructor
    (
        private flightNumber: string, 
        protected from: string, 
        protected to: string, 
        protected gateNumber: number
    ) {}
};