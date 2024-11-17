import Person from "./Person.js";

class Superhero extends Person {
    constructor(firstname, lastname, powers){
        super(firstname, lastname);
        this.powers = powers;
    }
}

export default Superhero;