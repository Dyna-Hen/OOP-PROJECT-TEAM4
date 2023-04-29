// // ---------------------test 6------------------------------------------- 
// import { Airline } from "./Airline/Airline"; 
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
 
// // ---------------------------------------------------------------- 
 
// // -----------------------test 1----------------------------------------- 
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
let booking3 = new Booking(2,600,"USD","11-23-2002",20,"10 PM", "11A",seat1,trip1, Tickets.RETURNTICKET); 
 
let p1 = new Passanger(1,12345,"20/April/2002","10-04-2023","JJ Kiko","jj@gmail.com",89676767,"pp",genders.MALE,"2 baggage",meals.DIARYFREE); 
let p2 = new Passanger(2,77777,"20/April/2002","10-04-2023","kk","kk@gmail.com",1111,"sl",genders.FEMALE,"9 baggage",meals.KOSHER); 
booking1.addPassenger(p1);
booking1.addPassenger(p2);

p1.addBooking(booking1) 
p1.addBooking(booking2) 
p1.addBooking(booking3) 

 
console.log(booking1.getPassengerDetails(1));

 
// // ----------------------------test 2------------------------------------ 
 
// import { Airline } from "./Airline/Airline";
// import { Airplane } from "./Airplane/Airplane";
// import { Airport } from "./Airport/Airport";
// import { Booking, Tickets } from "./Booking/Booking"; 
// import { Flight, meals } from "./Flight/Flight"; 
// import { Passanger } from "./Passanger/Passanger"; 
// import { genders } from "./Person/Person"; 
// import { Route } from "./Route/Route";
// import { Seat, seattypes } from "./Seat/Seat"; 
// import { Trip } from "./Trip/Trip"; 
// let seat1 = new Seat("10A",seattypes.WINDOW); 
// let trip1 = new Trip("Kyoto","7 Hours"); 
 
// let flight2 = new Flight("D11", "3 AM", "12 PM","00-00-00",meals.VEGETARIAN);
// let routes = new Route("destination")
// let booking1 = new Booking(1,300,"USD","11-23-2002",10,"8 PM", "10A",seat1,trip1, Tickets.RETURNTICKET); 
// let booking2 = new Booking(2,600,"USD","11-23-2002",20,"10 PM", "11A",seat1,trip1, Tickets.SINGLETICKET); 
// let booking3 = new Booking(2,600,"USD","11-23-2002",20,"10 PM", "11A",seat1,trip1, Tickets.RETURNTICKET); 
 
// let p1 = new Passanger(1,12345,"20/April/2002","10-04-2023","JJ Kiko","jj@gmail.com",89676767,"pp",genders.MALE,"2 baggage",meals.DIARYFREE); 
// let p2 = new Passanger(2,77777,"20/April/2002","10-04-2023","kk","kk@gmail.com",1111,"sl",genders.FEMALE,"9 baggage",meals.KOSHER); 
// p1.addBooking(booking1) 
// p1.addBooking(booking2) 
// p1.addBooking(booking3)
// let airports = new Airport("AirportController"); 
// airports.addPassenger(p1) 
// airports.addPassenger(p2) 
// airports.addPassenger(p1) 
// airports.getPassanger() 
// // console.log(airports.getPassanger()) 
 
// let airplane = new Airplane("airplaneName", "takeOfTime", 4, flight2, routes)
// let airline1 = new Airline("airlineManager", airplane); 
// airline1.addPassanger(p1) 
// airline1.addPassanger(p1) 
 
// airline1.getPassanger(); 
// airline1.countReturnTicket() 
// airline1.countReturnTicket() 
// airline1.countReturnTicket() 
 
// console.log('number ticket have return ==>  : ',airline1.countReturnTicket());

// ------------------------test 5----------------------------------------

// import { Airline } from "./Airline/Airline";
// import { Airplane } from "./Airplane/Airplane";
// import { Employee, skills } from "./Employee/Employee";
// import { Flight, meals } from "./Flight/Flight";
// import { Passanger } from "./Passanger/Passanger";
// import { genders } from "./Person/Person";
// import { Route } from "./Route/Route";
// import { Booking } from "./Booking/Booking";

// let flight2 = new Flight("D11", "3 AM", "12 PM","00-00-00",meals.VEGETARIAN);
// let p1 = new Passanger(1, 12345,"20/April/2002","10-04-2023","JJ Kiko","jj@gmail.com",89676767,"pp",genders.MALE,"2 baggage",meals.DIARYFREE);
// let p2 = new Passanger(2, 77777,"20/April/2002","10-04-2023","kk","kk@gmail.com",1111,"sl",genders.FEMALE,"9 baggage",meals.KOSHER);

// let pilot = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.PILOT, 1000000);
// let coPilot = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.COPILOT, 700000);
// let flightAttendant = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.FLIGHTATTENDANTS, 5000000);
// let flightEngineer = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.FLIGHTENGINEER, 4000000);
// let crew = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.CREW, 3500000);
// let chef = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.CHEFF, 6000000);
// let airportController = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.AIRPORTCONTROLLER, 8000000);

// let routes = new Route("destination")
// let airplane = new Airplane("airplaneName", "takeOfTime", 4, flight2, routes)
// let airlines = new Airline("airlineName", airplane)
// airlines.addEmployee(pilot);
// airlines.addEmployee(coPilot);
// airlines.addEmployee(flightAttendant);
// airlines.addEmployee(flightEngineer);
// airlines.addEmployee(crew);
// airlines.addEmployee(chef);
// airlines.addEmployee(airportController);


// airlines.getEmployeeSalary();
// console.log(airlines.getEmployeeSalary());

// -------------------------test 4---------------------------------------

// import { Booking, Tickets } from "./Booking/Booking";
// import { Flight, meals } from "./Flight/Flight";
// import { Passanger } from "./Passanger/Passanger";
// import { genders } from "./Person/Person";
// import { Seat, seattypes } from "./Seat/Seat";
// import { Trip } from "./Trip/Trip";
// let flight2 = new Flight("D11", "3 AM", "12 PM","00-00-00",meals.VEGETARIAN);

// let seat1 = new Seat("10A",seattypes.WINDOW);
// let trip1 = new Trip("Kyoto","7 Hours");

// let booking1 = new Booking(1,300,"USD","11-23-2002",10,"8 PM", "10A",seat1,trip1, Tickets.RETURNTICKET);
// let booking2 = new Booking(2,600,"USD","11-23-2002",20,"10 PM", "11A",seat1,trip1, Tickets.SINGLETICKET);

// let p1 = new Passanger(1, 12345,"20/April/2002","10-04-2023","JJ Kiko","jj@gmail.com",89676767,"pp",genders.MALE,"2 baggage",meals.DIARYFREE);
// let p2 = new Passanger(2, 77777,"20/April/2002","10-04-2023","kk","kk@gmail.com",1111,"sl",genders.FEMALE,"9 baggage",meals.KOSHER);

// booking1.addPassenger(p1);
// booking1.addPassenger(p2);

// booking1.getMeals()
// console.log(booking1.getMeals());