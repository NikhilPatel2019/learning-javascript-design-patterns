class Cake {
    constructor(name, toppings, price, cakeSize) {
        this.name = name;
        this.toppings = toppings;
        this.price = price;
        this.cakeSize = cakeSize;
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    // getter can be defined by declaring get before the method name
    get allToppings() {
        return this.toppings;
    }

    get qualifiesForDiscount() {
        return this.price > 5;
    }

    // setter can be defined by declaring set before the method name
    set size(size) {
        if (size < 0) {
            throw new Error("Cake must be a valid size: " + "either small, medium, or large");
        }
        this.cakeSize = size;
    }

}

export default Cake;