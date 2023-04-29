// ---------------------test 6-------------------------------------------
// import { Airport } from "./Airport/Airport";
// import { Flight, meals } from "./Flight/Flight";
// import { Gate } from "./Gate/Gate";

// let airport = new Airport("ASAP");

// let gateA1 = new Gate("AA1");
// let gateB2 = new Gate("BB2");

// airport.addGate(gateA1);
// airport.addGate(gateB2);

// let flight1 = new Flight("A10","10 PM ","1 PM","12-05-2023",meals.DIARYFREE);
// let flight2 = new Flight("D11", "3 AM", "12 PM","00-00-00",meals.VEGETARIAN);

// gateA1.assignFlight(flight1);
// gateB2.assignFlight(flight2);

// let flightNumber = "A10";
// let gate = airport.getGateByFlightNumber(flightNumber);

// if (gate) {
//   console.log("Your flight " + flightNumber +" is waiting at gate " + gate.number);
// } else {
//   console.log("We could not find your flight " + flightNumber);
// }

// ----------------------------------------------------------------

// -----------------------test 1-----------------------------------------
// import { Booking, Tickets } from "./Booking/Booking";
// import { meals } from "./Flight/Flight";
// import { Passanger } from "./Passanger/Passanger";
// import { genders } from "./Person/Person";
// import { Seat, seattypes } from "./Seat/Seat";
// import { Trip } from "./Trip/Trip";
// let seat1 = new Seat("10A",seattypes.WINDOW);
// let trip1 = new Trip("Kyoto","7 Hours");

// let booking1 = new Booking(1,300,"USD","11-23-2002",10,"8 PM", "10A",seat1,trip1, Tickets.RETURNTICKET);
// let booking2 = new Booking(2,600,"USD","11-23-2002",20,"10 PM", "11A",seat1,trip1, Tickets.SINGLETICKET);

// let p1 = new Passanger(1,12345,"20/April/2002","10-04-2023","JJ Kiko","jj@gmail.com",89676767,"pp",genders.MALE,"2 baggage",meals.DIARYFREE);
// let p2 = new Passanger(2,77777,"20/April/2002","10-04-2023","kk","kk@gmail.com",1111,"sl",genders.FEMALE,"9 baggage",meals.KOSHER);

// booking1.addPassenger(p1);
// booking2.addPassenger(p2);
// booking2.addPassenger(p1);

// console.log(booking2.getPassengerDetails(2));

// ----------------------------test 2------------------------------------


import { Airport } from "./Airport/Airport";
import { Booking, Tickets } from "./Booking/Booking";
import { meals } from "./Flight/Flight";
import { Passanger } from "./Passanger/Passanger";
import { genders } from "./Person/Person";
import { Seat, seattypes } from "./Seat/Seat";
import { Trip } from "./Trip/Trip";
let seat1 = new Seat("10A",seattypes.WINDOW);
let trip1 = new Trip("Kyoto","7 Hours");

let booking1 = new Booking(1,300,"USD","11-23-2002",10,"8 PM", "10A",seat1,trip1, Tickets.RETURNTICKET);
let booking2 = new Booking(2,600,"USD","11-23-2002",20,"10 PM", "11A",seat1,trip1, Tickets.SINGLETICKET);

let p1 = new Passanger(1,12345,"20/April/2002","10-04-2023","JJ Kiko","jj@gmail.com",89676767,"pp",genders.MALE,"2 baggage",meals.DIARYFREE); 
let p2 = new Passanger(2,77777,"20/April/2002","10-04-2023","kk","kk@gmail.com",1111,"sl",genders.FEMALE,"9 baggage",meals.KOSHER);

booking1.addPassenger(p1);
booking2.addPassenger(p2);


// let airports = new Airport("AirportController");
// // airports.addBookingFlight(bookingFlight)
// airports.addPassenger(p1)
// airports.addPassenger(p2)

// // airports.getBookingFlights()
// airports.getPassanger()
// // bookingFlight.getFlight(),
// // console.log(airports.getPassanger())


// let airline1 = new Airline("airlineManager");
// airline1.addPassanger(passanger1)
// airline1.addPassanger(passanger2)
// airline1.addPassanger(passanger3)
// airline1.getPassanger();
// airline1.countReturnTicket()
// // airline1.countReturnTicket(passanger2)
// // airline1.countReturnTicket(passanger3)
// console.log(airline1.countReturnTicket());