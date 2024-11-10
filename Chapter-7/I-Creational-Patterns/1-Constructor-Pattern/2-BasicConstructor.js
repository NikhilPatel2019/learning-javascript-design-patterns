class car {
    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    toString() {
        return `${this.model} has done ${this.miles} miles`;
    }
}

// Usage
const civic = new car("Honda Civic", 2009, 20000);
const mondeo = new car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());
