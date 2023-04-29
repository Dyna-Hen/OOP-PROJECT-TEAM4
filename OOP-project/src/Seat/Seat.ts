
export enum seattypes {
    ECONOMY,
    PREMIUMECONOMY,
    BUSINESS,
    FIRST,
    BULKHEAD,
    EXITROW,
    WINDOW,
    AISLE
}

export class Seat {
    constructor
    (
        public seatNumber: string, 
        seatTypes: seattypes
    ) {}
}