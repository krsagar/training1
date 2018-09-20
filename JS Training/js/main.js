"use strict";
function student(firstName,lastName,age,likesChess){
	this.firstName = firstName,
	this.lastName = lastName,
	this.age = age,
	this.likesChess = likesChess
}

//javascript Data Types

//Numbers
var numberVar = 10;
//console.log(typeof numberVar);

//String
var stringVar = "This is some text";
//console.log(typeof stringVar);
//Boolean
var boolVar = true;
console.log( typeof boolVar);

//Null
var nullVar = null;
//console.log(typeof nullVar);

//undefined --Do not use this
var undVar = undefined;
//console.log(typeof undVar);

//object
var objVar = {
	Name: "sagar",
	age: 24,
	likestocode: true,
	married: null
}
//console.log(objVar.married);
/* if statement:
 if true,run the code otherwise ignore.==,===,<,>, !=*/
if(4>0){
	//console.log("Its true!");
}

//console.log("current count value:"+count);
//for loop
for(var i=0; i<10; i++){
	//console.log(i);
}
var animals = ["tiger","dog","cat","horse","fish"];
//console.log(animals);
for (var j = 0; j<animals.lenght; j++){
	//console.log(animals[j])
}
 function OurFirstFunction(name){
 	//console.log("Hello from:" + name);
 }
 OurFirstFunction("sagar");


 function TimesTen(num){
 	//console.log(num * 10);
 }
 TimesTen(5);
 function multiply(l,b){
 	return l*b;
 }
 	//console.log(multiply(4,5));
 function add(l,b){
 	return l+b;
}
//console.log(add(13,10));
function sub(l,b){
	return l-b;

}
//console.log(sub(10,5));

function div(l,b){
	return l/b;

}
console.log(div(10,5));

var numbers1 = [64,34,45,65,78,67,54,56];
var numbers2 = [64,34,45,65,78,67,54,56];
 
 function sumAll(arr){
 	var sum=0;
 for(var i = 0;i< arr.length;i++){
 	sum +=arr[i];
 	//console.log(sum);
 }
 return sum;
}
sumAll(numbers1)

var numbers1 = [64,34,45,65,78,67,54,56];
function average(arr){
	var sum=0;
	for(var i = 0;i< arr.length;i++){
		sum +=arr[i];
	}
	return sum/arr.length;

}
//console.log(average([20,20,20]));

function area(l,b){
	return l*b;

}
//console.log(area(7,10));
//while loop
var count = 0;
while(count<=10){
	//console.log(count);
count +=5;
}

var count = 0;
while (count<10){
	//console.log(count)
count+=2;
}
 
 var obj=0
 for(i=10;i>=0;i--)
 	//console.log(i);


var sagar = new student ("sagar","gupta",23,true);
var suraj = new student( "suraj","gupta",23, true);
var ujjwal = new student("ujjwal","gupta",11,false);
//concatinate
console.log(sagar.firstName+" "+sagar.lastName);
console.log(suraj);
console.log(ujjwal);

function FullName(obj){
 console.log(obj.firstName+" "+obj.lastName)
}
FullName(ujjwal);

var newMath ={
	areaofsquare : function (num) {
		console.log(num * num);
	},

	evenNumber : function(num){
	    var arr= [];
	    for(var i=0;i<=num;i++){
	    	if(i % 2== 0)
	    	{
	    		arr.push(i);
	        }
		}
		console.log(arr);																					
	},
	max : function(arr){
		var max = -Infinity;
		for(i=0;i<arr.length;i++){
			if(arr[i]> max){
				max = arr[i];
 			}
		}
		console.log(max);
	},
	min: function(arr){
		var min =Infinity;
		for(i=0;i<arr.length;i++){
			if(arr[i]<min){
				min = arr[i];
			}
		}
		console.log(min);
	},
	power: function(base, power){
		var output = base;
		for(var i=1;i<power;i++){
			output *= base;

		}
		console.log(output);
	}

}





newMath.evenNumber(5);
var arr = [0, 1, 2 ,3, 4, 5, 6, 7, 8, 9]
newMath.max([12,15,50]);
newMath.min([12,34,43]);
newMath.power(2,5);
