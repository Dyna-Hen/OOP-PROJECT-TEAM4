
export enum genders {
    MALE,
    FEMALE
}

export abstract class Person {
    constructor
    (
        private name: string, 
        private email: string, 
        public phoneNumber: number, 
        private address: string,
        gender: genders
    ) {}
}