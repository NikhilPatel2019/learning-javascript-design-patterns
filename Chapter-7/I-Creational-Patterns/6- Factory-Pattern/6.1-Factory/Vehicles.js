class Car {
    constructor({ doors = 4, state = 'brand new', color= 'silver' } = {}){
        this.doors = doors;
        this.state = state;
        this.color = color;
    }
}

class Truck {
    constructor({state = 'used', wheelSize = 'large', color = 'blue'} = {}){
        this.state = state;
        this.wheelSize = wheelSize;
        this.color = color;
    }
}

export { Car, Truck };