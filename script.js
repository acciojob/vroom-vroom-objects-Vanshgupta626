// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// method on Car prototype
Car.prototype.getMakeModel = function () {
    return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // inherit properties
    this.topSpeed = topSpeed;
}

// inherit from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// method on SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
