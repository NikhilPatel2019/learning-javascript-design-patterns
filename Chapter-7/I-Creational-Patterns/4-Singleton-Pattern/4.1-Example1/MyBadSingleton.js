let instance;

// Singleton
class MyBadSingleton {
    constructor(){
        this.randomNumber = Math.random();
        instance = this;
    }

    getRandomNumber(){
        return this.randomNumber;
    }
}

export default MyBadSingleton;