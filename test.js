
//Defined car Object
var car = {
  type: "Fiat",
  model: 500,
  color: "white",
  //.toString() Override
  toString: function() {
    return this.type;
  }
};

//Various ways to test .toString() Override
console.log(car.toString());
console.log(car);

//Defined carPlus Object
var carPlus = {
  type: "Fiat",
  model: 500,
  color: "white",
  //.toString() Override
  toString: function() {
    return 'type: ' + this.type + ', model: ' + this.model + ', color:  ' + this.color;
  }
};

//Various ways to test .toString() Override
console.log(carPlus.toString());
console.log(carPlus);
