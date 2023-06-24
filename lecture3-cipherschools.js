let array = [5,10,15,20,35,40];
// function functionForMap(ele){
//     return ele*ele;
// }

// let functionForMap=(ele)=>ele*ele;
// let newArray =array.map(functionForMap);
// console.log(newArray);

let newArray =array.map((ele , index)=>{console.log(index,ele); return ele*ele});
console.log(newArray);

let addTwoNumbers= (a,b) => a+b;
let num1 = 3;
let num2 = 4;

array.forEach((element,index)=>{
    element*=element
    console.log(element);
});

console.log(array);

let nArray = array.filter((element)=>  element >=30);
console.log(nArray);

let arr=[40,"50",30,100,20,60];
let sortedArray=arr.sort((el1,el2)=>{el1=Number(el1);
    el2=Number(el2);
    return el2-el1;
});
console.log(sortedArray);

class Animal{
noOfLegs;
color;
family;
sound;

constructor(noOfLegs,color,family,sound){
    this.noOfLegs=noOfLegs;
    this.color=color;
    this.sound=sound;
    this.family=family;
}
showAnimal(){
    console.log(`The animal belongs to family ${this.family}`);
}
}
let animal= new Animal(4,"brown","rodent","pew pew");
console.log(animal);
animal.showAnimal();