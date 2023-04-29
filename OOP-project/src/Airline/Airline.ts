import { Airplane } from "../Airplane/Airplane"; 
import { Employee } from "../Employee/Employee";
import { Passanger } from "../Passanger/Passanger"; 
 
export class Airline { 
    public airplanes: Airplane[] = []; 
    employees: Employee[]=[];
    public passangers: Passanger[] = []; 
    constructor 
    ( 
        public airlineName: string, airplanes: Airplane
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

    addEmployee(employee: Employee){
        this.employees.push(employee);
    };

    getEmplyee(){
        return this.employees;
    };

    getEmployeeSalary(){

        let totalSalaryEmployee: number = 0;

        for(let employee of this.employees){
            totalSalaryEmployee += employee.salary
        }
        return totalSalaryEmployee;
    }
 
    // now 
    countReturnTicket(){ 
        let numPassanger =0 
        let allPassanger = this.passangers; 
        for(let passanger of allPassanger){ 
            for(let booking of passanger.booking){ 
                if( booking.getTickets() === 1){ 
                    numPassanger +=1 
                } 
            } 
            return numPassanger 
        } 
    } 
    //  
}