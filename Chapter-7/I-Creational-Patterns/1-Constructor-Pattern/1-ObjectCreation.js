//===========================
// Ways to create new objects
//===========================

/* 1. Object literal */
const newObject1 = {};

/* 2. Object.create() */
const newObject2 = Object.create(Object.prototype);

/* 3. new Object() */
const newObject3 = new Object();
//---------------------------------------------------

//=====================================
// Assigning keys and values to objects
//=====================================

/* 1. Dot syntax */

// Set Properties
newObject1.someKey = "Hello World!";

// Get Properties
const key1 = newObject1.someKey;

/* 2. Square bracket syntax */

// Set Properties
newObject1["someKey"] = "Hello World!";

// Get Properties
const key2 = newObject1["someKey"];

/* 3. Object.defineProperty() */
Object.defineProperty(newObject3, "someKey", {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true,
});

/* 4. Custom defineProperty() */
var defineProp = function (obj, key, value) {
    var config = {
        value: value,
    };
    Object.defineProperty(obj, key, config);
};

// Create an empty object
var person = Object.create( null );

// Populate the object with properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

/* 5. Object.defineProperties() */
Object.defineProperties(newObject3, {
  "someKey": {
    value: "Hello World!",
    writable: true,
  },

  "anotherKey": {
    value: "Foo bar",
    writable: false,
  },
});

// This method can be used in inheritance as follows:

const driver = Object.create(person);

// set some properties for the driver object
defineProp(driver, "topSpeed", "100mph");

// Get an inherited property (1981)
console.log(driver.dateOfBirth);

// Get the property we set (100mph)
console.log(driver.topSpeed);
