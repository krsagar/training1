
/*var randarr=[];
for(i=0;i<10;i++){
	randarr.push(Math.floor(Math.random()*101));
}
console.log(randarr);
var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","@","1","2","3"];
 var pass="";
 var iter = Math.floor(Math.random() * 5) + 12;
for(var j=0;j<iter;j++){
	var index=Math.floor(Math.random()*chars.length)
	if(index<26 & Math.random()>0.5){
		pass += chars[index].toUpperCase()
	}else{
    pass+=chars[index];
	}
}
console.log(pass);


for(var row=0;row<5;row++){
	console.log("row" +row);
	for(var col=0;col<10;col++){
	console.log("col" +col);
}
}*/
var nested=document.getElementById('nested');
for(i=0;i<10;i++)
{
	var row=document.createElement("tr")
	nested.append(row);
	
	for(j=0;j<10;j++)
	{
	var col=document.createElement("td")
		if(i%2==0){
			if(j%2==0)
				col.setAttribute("Class","Class1");
			else
			col.setAttribute("Class","Class2");
			}			
		else {
		    	if(j%2 ==0)
             col.setAttribute("Class","Class2");
                 else
				col.setAttribute("Class","Class1");
			}
			
	/*col.setAttribute("Class","tableData")*/
	row.append(col);
    }
}











/*var string="abcd@hrid";
var testarray=string.split("@");
console.log(testarray);

function splitstring(string, splitAt){
	var checkmail=document.getElementById("mailid");
	var arr=[];
	var lastindex=0;
	for(var i=0;i<string.length;i++){
		if(string.charAt(i)==splitAt){
			var addString=string.slice(lastindex,i);
			arr.push(addString);
			lastindex=i+1;

		}
		
	}
	console.log(arr);
}
splitstring("cat@dog@fish","@")*/

//password
var nums=["0","1","2","3","4","5","6","7","8","9"];
var special=["&","%","#","@","$"];
function checkPassword()
 {
 	var passcheck=document.getElementById("passid").value;
 	var conditionsMet=0;
	if(passcheck.length>=8)
	{
		conditionsMet+=1
	}
for(var i=0;i<passcheck.length;i++){
	if(passcheck.includes(nums[i])){
		conditionsMet +=1;
		break;
	}
}
for(var j=0;j<passcheck.length;j++)
{

	if(passcheck.includes(special[j])){
		conditionsMet +=1;
		break;
	}
}
	
if(conditionsMet==3){
	alert("good");
}
else{
	alert("please enter a valid password");
}
}

//mail
function checkmail(string){
	var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	if(string.charAt(0)=="@")
		return false;
	var arr1=string.split("@")
	if(arr1.length !=2)
		return false;
	if(arr1[0].includes("."))
		return false;
	if(!arr1[1].includes("."))
		return false;

	for(var i=0;i<26;i++){
		if(arr1[1].endsWith(chars[i]))
			return true;
	}
	return false;
	}
	function validatemail(){
	var checkMail=document.getElementById("mailid").value;
       if(checkmail(checkMail))
       	alert("good");
       else
       	alert("please enter a valid email");
	}





	var str="sagar,kumar,gupta";
	var middleName=str.slice(6,11);
	document.createElement("name").innerHTML=middleName;
	console.log(middleName);

	function myfunction(){
		var str=document.createElement("name1").innerHTML;
		var txt=str.replace("sagar","kumar");
		document.createElement("name1").innerHTML=txt;

	}



	function indexAt(str,char){
		for(i=0;i<str.length;i++){
			if(str.charAt(i)==char){
				console.log(i);
			    break;
			}  
		}

	}
	indexAt("dogogogogogogog","g");


	function includeschar(str,char){
		for(i=0;i<str.length;i++){
			if(str.charAt(i)==char){
				return true;
			}
		}
              return false;
	} 
	console.log(includeschar("fish","g"));


	function sliceString(str,start,stop){
		var word="";
		for(i=start;i<=stop;i++){
			word+=str[i];

		}
		console.log(word);
	}
	sliceString("apple",1,3);

	function replace(str,index, newlet){
		var string1=str.slice(0,index);
		var string2=str.slice(index+1);
	    console.log(string1+newlet+string2);
	
	}
	replace("butter",1,"e");

function modString(val){
		if(typeof val !="string"){
		   console.log("please use a string");
		    return;
	    }
		this.val=val
		this.modSlice=function(start,stop){
		    var newVal="";
		     for(var i=start;i<stop;i++){
		         newVal+=this.val[i];
	            }
	     this.val=newVal;
	    },
	    this.lastIndex= function(char){
	    	for(var i=this.val.length;i>=0;i--){
	    		if(this.val.charAt(i)==char){
	    			console.log(i);
	    			break;
	    		}
	    	}
	    },
	    this.countlength=function(){
	    	var count=0;
	    	while(this.val[count] != undefined){
	    		count++;
	    	}
	    	console.log(count);
	    }
    }
		var mystring=new modString("this is my string");
	mystring.lastIndex("m")
	    var babyCat=new modString("kittenkitten");
	    babyCat.countlength();
	
$("#cat")
document.getElementById("cat")

$(".dogs")
document.getElementsByClassName("dogs")

$("h1")
document.getElementsByTagName("h1")

$("#myButton").click(function(){
	$("#myH1").toggle(5000);
});





$(document).ready(function(){
	$("#hidden").hover(function(){
		$(this).css("color", "black");
	},
	function(){
		$(this).hide(3000).show(3000).hide(3000).show(3000).hide(3000).show(3000);
		//$(this).css("display", "none");
	});
	$("#button2").click(function(){
		alert("I am alerting you");
	});
});