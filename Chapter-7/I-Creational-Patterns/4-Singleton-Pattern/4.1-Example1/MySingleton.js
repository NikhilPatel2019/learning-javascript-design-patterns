// Instnce stores reference to the Singleton
let instance;

// Private menthods and variables
const privateMethod = () => {
    console.log('I am private');
}
const privateVariable = 'Im also private';
const randomNumber = Math.random();

// Singleton
class MySingleton {
    constructor(){
        if(!instance){
            this.publicProperty = 'I am also public';
            instance = this;
        }

        return instance;
    }

    // Public Methods
    publicMethod(){
        console.log('The public can see me!');
    }

    getRandomNumber(){
        return randomNumber;
    }
}

export default MySingleton;
