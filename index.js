/* String : Inside of "" means TEXT!
const what = "Hyun";

console.log(what);
*/

/* Boolean : True or False, Always small letter and Without ""
const what = true;
*/

/* Number
const what = 777;
*/

/* Float : In 55 + 0.1, 0.1 is float number
const what = 55.1;
*/

//Array
/*const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true];
console.log(dayOfWeek);*/

//Object
/*const hyunInfo = {
  name: "Hyun",
  age: 26,
  gender: "Male",
  handsome: true,
  favMovies: ["Lorence Anyway", "Kill Bill"],
  favFood: [
    {
      name: "Wopper",
      fatty: false
    },
    {
      name: "Chan",
      fatty: true
    }
  ]
};

console.log(hyunInfo.favFood[0].fatty, hyunInfo.favFood[1].name);*/

/*function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old.`;
}

const greetHyun = sayHello("Hyun", 14);

console.log(greetHyun);*/

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  division: function(a, b) {
    return a / b;
  }
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(2, 3);
const division = calculator.division(345345, 838382);

console.log(division);
