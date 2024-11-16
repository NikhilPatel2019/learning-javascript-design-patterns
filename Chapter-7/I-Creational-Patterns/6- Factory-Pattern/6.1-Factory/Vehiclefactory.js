import { Car, Truck } from './Vehicles.js';

class VehicleFactory {
    constructor(){
        this.vehicleClass = Car;
    }

    createVehicle(options){
        const { vehicleType, ...rest } = options;

        switch(vehicleType){
            case 'car':
                this.vehicleClass = Car;
                break;
            
            case 'truck':
                this.vehicleClass = Truck;
                break;
        }

        return new this.vehicleClass(rest);
    }
}

export default VehicleFactory;
