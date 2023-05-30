// Task 01

let number = [1,2,3,4,5,6,7,8,9,88,42]

function Getevenadded (number){
    let sum = 0;
    

    for (let i = 0; i < number.length; i++) {
        
        if(number[i] % 2 === 0)
        sum = number[i]
        



       
        
         
        
        
    }
    
    console.log (sum)


    
}
Getevenadded(number)
// TASK 02

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

//   Task 04

let alpha = ["a","c","i","b","d","h","f","e"]

alpha.sort();
    

// task 04






// function carmodel1(Carmodel) {
 
//   for (let car in Carmodel) {
//     if (carmodel.hasOwnProperty(Carmodel, car)) {
//       console.log(car+ ":" + Carmodel[car])
      
//     }
//   }
  
// }

// let Carmodel ={
//   make : "Toyota",
//   Model : "Supra",
//   year : 2009,
//   price : 10000000
// }

// carmodel1(Carmodel);
  
function displayCarInfo(car) {
  for (let property in car) {
    if (car.hasOwnProperty(property)) {
      console.log(property + ": " + car[property]);
    }
  }
}

let car = {
  make: "Toyota",
  model: "Supra",
  year: 2009,
  price: 10000000
};

displayCarInfo(car);

