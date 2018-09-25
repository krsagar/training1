$("#myButton").click(function(){
	$("#myH1").toggle(500);
});



$(document).ready(function(){
	$("#hidden").hover(function(){
		$(this).css("color", "cyan");
	},
	function(){
		$(this).hide(3000).show(3000);
		//$(this).css("display", "none");
	});
	$("#button2").click(function(){
		alert("I am alerting you");
	});
	$("#button3").click(function(){
        $(".color").css("color", "red");
    });
    $("#button4").click(function(){
        $(".bgcolor").css("background-color", "cyan");
    });
    var count=0;
    $("#dateB").click(function(){
    	
    	addDate();
    });





    function addDate(){
    	if(count%10==0)
    		$("#dateDiv").empty();
    	var r=Math.floor(Math.random()*256);
    	var g=Math.floor(Math.random()*256);
    	var b=Math.floor(Math.random()*256);
    	if(count % 2==0)
    		$("#dateDiv").append("<p class='evenDate' style= 'background-color:rgb("+r+","+g+","+b+")'>"+new Date()+"</p>");
    	else
    	    $("#dateDiv").append("<p class='oddDate' style='background-color:rgb("+r+","+g+","+b+")'>"+new Date()+"</p>");
        count++;
        setTimeout(addDate,1000);
    }
}); 

var data =[];
var nested=document.getElementById('nested');
for(i=0;i<100;i++)
{
	var row=document.createElement("tr")
	nested.append(row);
	
	for(j=0;j<180;j++)
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
	data.push(col);
	row.append(col);
    }
} 
 function colorfulltable(){
 	var tableIndex=Math.floor(Math.random()*data.length)
    var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	data[tableIndex].style.backgroundColor = "rgb("+r+","+g+","+b+")"
	setTimeout(colorfulltable,0.001);
 }
 colorfulltable();
