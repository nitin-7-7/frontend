// task 1:

// alert("Welcome to meri falstu website")
// const name = prompt("naam dalee apnaa!!")
// alert("kese ho bhai "+ name +"!")
// document.write("<h2>Hello " + name + "! KEM CHHO.</h2>");

// task 2:

/*
const age = prompt("AGE BTAAO !")
if(age>18){
    alert("votes deshkta hai bhai tu ")
}else if(age>60){
    alert("You are a senior citizen voter.")
}
else{
    alert("jake POGO dekh!")
}
*/
// task 3 

let arr = [2,3,4,5,6,7,8,8,9,23,5,65657];

//use of map

let triple = arr.map(n => n*3);
console.log(triple);

//use filter (if)
let num30 = arr.filter(n => n>30);
console.log(num30);

//reduce work as sum of arr
let sum = arr.reduce((total,num) => total+num,0);
console.log(sum);

//use of foreach
arr.forEach(num => console.log(num*2));