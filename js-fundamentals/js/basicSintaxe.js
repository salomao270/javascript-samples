/* basics */
var name = "Salomao Ferreira";      //javascript is dynamic type defined at runtime.
var year = 2021;
var n1 = 10;
var n2 = 5;
var totalNumber = n1 + n2;
var phrase = " UK is part of European Union ";

// alert("alert called by main.js file");
console.log(name);      //it is possible to debug it by opening web browser > inspect element > Console tab
console.log(year);
console.log(totalNumber);
console.log(phrase.replace("UK", "France"));
console.log(phrase.replace("UK", "France").toUpperCase());
console.log(phrase.replace("UK", "France").toLowerCase());
console.log(phrase.replace("UK", "France").trim());     //removes space before and after the string


/* arrays */
var lista = ["apple", "melon", "orange"]
console.log(lista);         //it shows every elements on array - "apple", "melon", "orange"
console.log(lista[1]);      //it shows - "melon" element on array.
lista.push("uva");          //add element to array at last position.
console.log(lista);
lista.pop();                // remove element from array from last position. "uva" in this case.
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());   //it changes element positions on oposite order "orange", "melon", "apple"
console.log("Elements on this this list order was inverted: " + lista);

console.log(lista.toString());
console.log(lista.join(" - "));

/* dictionary */
var fruit = {name:"apple", colour:"red"};
console.log(fruit);         //it shows - {name:"apple", colour:"red"}
console.log(fruit.name);    //it shows - "appe"

/* list of dictionary */
var fruits = [ {name:"apple", colour:"red"}, {name:"banana", colour:"yellow"} ];
console.log(fruits);
console.log(fruits[1].name);    //it shows - banana

/*  conditional */
// var age = prompt("How old are you ?")
// if (age >= 18) {
//     alert("You are are permited to enter")
// } else {
//     alert("You are not permited to enter")
// }

/* loop while */
console.log("loop while")
var count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

/* loop for */
console.log("loop for")
var count = 0;
for(count = 0; count <=5; count++) {
    console.log(count);
}

/* date */
console.log("date")
var date = new Date();
console.log(date);
console.log(date.getMonth());
console.log(date.getMonth() +1);
console.log(date.getDate());
console.log(date.getMinutes());

/* function */
function sum(n1, n2) {
    return n1 + n2;
}
console.log("sum function")
console.log(sum(5,10));

//global variable
var isAgeValid = "global variable";

function validateAge(age) {
    //local variable
    var isAgeValid = false;
    if (age >= 18) {
        isAgeValid = true;
    }
    return isAgeValid
}
console.log("validateAge function")
var age = prompt("Enter your age:");
console.log(validateAge(age));
console.log(isAgeValid);