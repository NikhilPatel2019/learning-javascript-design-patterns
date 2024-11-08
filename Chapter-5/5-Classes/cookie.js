class Cookie {
    constructor(flavour) {
        this.flavour = flavour;
    }

    showFlavour() {
        console.log(`The flavour of the cookie is ${this.flavour}.`);
    }
}

class FavouriteCookie extends Cookie {
    static secretMessageText = "The secret ingredient is love.";
    static cookieName = "Chocolate Chip";

    #secretMessage() {
        return FavouriteCookie.secretMessageText;
    }

    showFlavour() {
        super.showFlavour();
        console.log(`${this.flavour} is amazing.`);
        console.log(this.#secretMessage());
    }
}

export { Cookie, FavouriteCookie };