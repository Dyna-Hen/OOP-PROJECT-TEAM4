import { BoardingPass } from "../BoardingPass/BoardingPass";
import { Booking } from "../Booking/Booking";
import { Person, genders } from "../Person/Person";
import { meals } from "../Flight/Flight"

export class Passanger extends Person {
    // boardingPasses: BoardingPass[]=[]
    constructor
    (
        private passportNumber: number, 
        private birthDate: string,
        public dateTime: string,
        name: string, 
        email: string, 
        public phoneNumber: number, 
        address: string, 
        gender: genders,
        public baggage: string, 
        public meal: meals, 
    )
    {
        super
        (
            name,
            email,
            phoneNumber,
            address,
            gender
        )
    }
};
let p1 = new Passanger(12345,"20/April/2002","10-04-2023","JJ Kiko","jj@gmail.com",89676767,"pp",genders.MALE,"2 baggage",meals.DIARYFREE);
let p2 = new Passanger(77777,"20/April/2002","10-04-2023","kk","kk@gmail.com",1111,"sl",genders.FEMALE,"9 baggage",meals.KOSHER);

// console.log(p1)
// console.log(p2)