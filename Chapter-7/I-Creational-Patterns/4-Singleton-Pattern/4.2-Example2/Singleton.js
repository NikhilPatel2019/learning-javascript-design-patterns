class Singleton {
    constructor(options = {}){
        // set properties for our singleton
        this.name = 'SingletonTester';
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }
}

let instance;

// an emulation of static variables and method
const SingletonTester = {
    name: 'SingletonTester',
    getInstance(options) {
        if(instance === undefined){
            instance = new Singleton(options);
        }
        return instance;
    },
};

export default SingletonTester;