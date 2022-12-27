// Exercise 1 : Favorite Color
let sentence = ["my","favorite","color","is","blue"];
sentence.join();

// Exercise 2 : Mixup
let str1 = "mix";
let str2 = "pod";
let last = `${str2.substring(0, str1.length-1)}${str1.substring(str1.length-1)} ${str1.substring(0, str1.length-1)}${str2.substring(str1.length-1)}`;

// Exercice 3 : Calculatrice
let num1 = prompt("Entrer votre premier nombre"); 
let num2 = prompt("Entrer votre second nombre");
alert(`la somme est: ${Number(num1) + Number(num2)}`);
