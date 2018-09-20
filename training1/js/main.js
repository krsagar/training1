
var randarr=[];
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
/*
for(var row=0;row<5;row++){
	console.log("row" +row);
	for(var col=0;col<10;col++){
	console.log("col" +col);
}
}*/
var nested=document.getElementById('nested');
for(i=0;i<10;i++){
	var row=document.createElement("tr")
	nested.append(row);
	for(j=0;j<10;j++){
	var col=document.createElement("td")
	col.setAttribute("Class","tableData")
	row.append(col);	
	}
}
