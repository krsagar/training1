"user strict";

function functionname(parameter1, parameter2)
{
console.log(parameter1);
console.log(parameter2);
}
functionname("Argument 1","Argument 2");
function areaofcube(l,b,h)
{
	console.log(l*b*h);
}
//areaofcube(3,4,5)
function posorneg(num){

var num=window.prompt("Enter a number:")
	if(num>0)
		console.log("positive number");
	else if (num<0){

		console.log("negative number");
	}

	else
		console.log("zero");
}
//posorneg(-3123)
function findsum(arr){
var sum=0;
for(i=0;i<arr.length;i++)
{
	sum+=arr[i];
}
console.log("The sum of the array="+sum);
}
findsum([24,43,12,5])
function findavg(arr){
var sum=0;
for(i=0;i<arr.length;i++)
{
	sum+=arr[i];
}
var avg=sum/arr.length;
console.log("Average="+avg);
}
findavg([24,43,12,5, 5,6,10,20])
function sorecalculator(quescorrect,questotal)
{
return(quescorrect/questotal*100);
}
sorecalculator(7,10);

function gradecalculator(num){
if(num>=90){
	console.log("Grade A");
}
else if(num<89 && num>=80){
console.log("Grade B");
}
else if(num<=79 && num>=70){
	console.log("Grade C");
}
else if(num<=69 && num>=60){
	console.log("Grade D");
}
else{
	console.log("Grade F");
}
}
gradecalculator(sorecalculator(7,10));
//finding Max number
var num=[1,53,4,64,34,76,4];
function findmax(arr){	
var max = -Infinity;
for(var i=0;i<arr.length;i++)
{
	if(arr[i]>max){
		max=arr[i];
	}
}
console.log(max);
}
findmax(num)
//Finding max string
var animals=["Cat","Dog","Monkey","Hippo","Elephant"];
function findlongestword(arr){
var maxlength = -Infinity;
var longestString="";
for(var i=0;i<arr.length;i++){

	maxlength=arr[i].length;
	longestString=arr[i];
}
console.log(longestString);
}
findlongestword(animals);

function celciustof(celcius){

	var f=(celcius*9/5)+32;
	console.log(f);
}
celciustof(25)
function FocusInput(sender){
	sender.style.backgroundColor="lightgray";
}
function BlurInput(sender){
	sender.style.backgroundColor="white";
}
var wordCount=document.getElementById("wordCount")
function CountLetter(sender){
	wordCount.innerHTML="Letter Count:"+sender.value.length;
}
var mainImg = document.getElementById("mainImg");
function ChangePicture(sender){
	mainImg.src=sender.src;
}
var timer=document.getElementById("timer");
var minutes=0;
var seconds=0;
function KeepTime(){
    if(seconds<10){
     var secondstring="0"+seconds;
	} else{
		secondstring=seconds;
    }
    if(seconds>58){
    	minutes++;
    	seconds=0;
    }
	timer.innerHTML="How long i have been here: " + minutes + ":" +secondstring;
	seconds++
	
	
	
	setTimeout(KeepTime,1000);
}
KeepTime();

var subImg=document.getElementsByClassName("smallImg");
var index=0;
function carousel(){
	mainImg.src=subImg[index].src;
	index++;
	if(index>=subImg.length){
		index=0;
	}
setTimeout(carousel,3000);
}
carousel();
