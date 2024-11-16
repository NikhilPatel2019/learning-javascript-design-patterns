class AbstractVehicleFactory {
    constructor(){
        // Storage of out vehicle Types
        this.types = {};
    }

    getVehicle(type, customizations) {
        const Vehicle = this.types[type];
        return Vehicle ? new Vehicle(customizations) : null;
    }

    registerVehicle(type, Vehicle) {
        const proto = Vehicle.prototype;
        if(proto){
            this.types[type] = Vehicle;
        }
        return this;
    }
}

export default AbstractVehicleFactory;