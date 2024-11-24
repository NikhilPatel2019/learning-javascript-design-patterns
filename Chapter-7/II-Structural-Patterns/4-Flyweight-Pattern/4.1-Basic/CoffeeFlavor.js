class CoffeeFlavor {
    constructor(newFlavour) {
        this.flavor = newFlavour;
    }

    getFlavor() {
        return this.flavor;
    }

    serveCoffee(context) {
        console.log(`Serving Coffee flavor ${this.flavor} to table ${context.getTable()}`)
    }

}

export default CoffeeFlavor;