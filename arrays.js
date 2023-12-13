let meals = ["artichokes", 3, "chili", "donuts"];

meals.unshift("tacos");

let firstMeal = meals.shift();

let submeals = meals.slice(1,3)

console.log(submeals)

let spliced = meals.splice(1,2)

console.log(spliced)

const perfectTemp = 125;
let teaTemp = 130;

while(teaTemp > perfectTemp) {
    teaTemp = teaTemp - 1;
    console.log('Tea temp is now', teaTemp)
}


