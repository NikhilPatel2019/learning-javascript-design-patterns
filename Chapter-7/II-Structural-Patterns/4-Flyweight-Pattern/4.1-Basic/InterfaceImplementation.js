// utility to stimulate implementation of an interface

// class InterfaceImplementation {
//     static implementsFor(superclassOrInterface){
//         if(superclassOrInterface instanceof Function) {
//             this.prototype = Object.create(superclassOrInterface.prototype);
//             this.prototype.constructor = this;
//             this.prototype.parent = superclassOrInterface.prototype;
//         } else {
//             this.prototype = Object.create(superclassOrInterface);
//             this.prototype.constructor = this;
//             this.prototype.parent = superclassOrInterface;
//         }
//     }
// }

const implementsInterface = (obj, iface) => {
    for (let method of iface) {
      if (typeof obj[method] !== 'function') {
        return false;
      }
    }
    return true;
  };

export default implementsInterface;