// Exercise 1
// ----------------------------
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// delete banana
fruits.splice(0, 1);
// order array
fruits.sort();
// add kiwi to end
fruits.push("Kiwi");
// delete Apples
let fruits_new = fruits.filter(x => x !== 'Apples')
// reverse order
fruits_new.reverse();

// Exercise 2
// -----------------------------------
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1]);