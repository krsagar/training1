"use strict"
/*
var header=document.getElementById('header');

header.innerHTML = "changed to javascript";
//get all elements with given tag name.
var h2s=document.getElementsByTagName("h2");
console.log(h2s);

var subHeaders = document.getElementsByClassName("subHeader");
console.log(subHeaders);
for (var i=0 ;i<subHeaders.length; i++){
	subHeaders[i].innerHTML = "sub header number: " + (i);
}

function AddStuff() 
{
	var textNode = document.createTextNode("some text for our function");
	var h3 =document.createElement("h3");
	h3.append(textNode);
	document.body.append(h3);
}
*/
var dateContainer=document.getElementById("dateContainer");
var currentDate= new Date();
function displayDate(num){
	for (var i =0; i < num; i++){
		var currentDate=new Date();
		var dateP=document.createElement("P");
		dateP.append(currentDate);
		dateContainer.append(dateP);
		if(i % 2==0){
		dateP.setAttribute("class","datePeven");
	}
	    else{
	    	dateP.setAttribute("class","datePodd");
	    }
	}
}
displayDate(10);

var animals=["horse", "Hyena","Hippo","Cat","Lion","Fish","Camel"]

function FindTheH(arr){
	for(var i=0;i<arr.length;i++){
		if(animals[i].charAt(0)==="H" || animals[i].charAt(0)==="h"){
			console.log(animals[i])
		}
	}
}

/*var message=document.getElementById("message");
	message.style.display ="block";
setTimeout(function(){
},5000)
*/
function closeMessage(){
	message.style.display="none";
}


function BiggerNumber()
{
	var a = window.prompt("Give me a number");
	if(a==null){
		return;
	}
	while(isNaN(a) ||a.length== 0){
		a=window.prompt("Thait's not a number. Please try again");
	}
	a=parseInt(a);


	var b = window.prompt("give me another number");
	if(b==null){
		return;
	}
	while(isNaN(b) ||b.length== 0){
		b=window.prompt("Thait's not a number. Please try again");
	}
	b=parseInt(b);
	if(a> b){
		console.log(a + " is a bigger number")
	}else if(b>a){
		console.log(b + " is a bigger number")
	}else{
				console.log("they are the same")
			}
}	

var clock=document.getElementById("clock");


function KeepTime(){
	var upDate = new Date();
	clock.innerHTML=(upDate);
	setTimeout(KeepTime,1000);
}

KeepTime();


