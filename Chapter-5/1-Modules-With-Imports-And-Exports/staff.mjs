export const baker = {
    bake(item) {
        console.log(`Woo! I just baked a ${item}`);
    }
}

// Collectively export multiple objects
// const baker = {
//       bakeBread: function(type) {
//         console.log(`Baking ${type} bread.`);
//       },
//       prepareDough: function(ingredient) {
//         console.log(`Preparing dough with ${ingredient}.`);
//       },
//   }
  
//   const pastryChef = {
//       makePastry: function(pastryType) {
//         console.log(`Making a ${pastryType} pastry.`);
//       },
//       serveDessert: function(dessertName) {
//         console.log(`Serving ${dessertName} to customers.`);
//       }
//     };
  
//   const assistant = {
//       cleanKitchen: function() {
//         console.log("Cleaning the kitchen.");
//       },
//     };
  
//   export { baker, pastryChef, assistant };