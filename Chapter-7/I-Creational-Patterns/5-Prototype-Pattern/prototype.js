class VehicalPrototype {
    constructor(model) {
        this.model = model;
    }

    getModel() {
        console.log(`The model of the vehicle is... ${this.model}`);
    }

    clone() {}
}

class Vehicle extends VehicalPrototype {
    constructor(model){
        super(model);
    }

    clone() {
        return new Vehicle(this.model);
    }
}

const car = new Vehicle('Ford Escort');
const car2 = car.clone();
car2.getModel()