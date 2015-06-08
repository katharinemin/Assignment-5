// alert displays as text on the document
document.getElementById("monitor").innerHTML = "Autumn & Bubba!";

// alert as a pop-up window 
alert( "Hello" );

console.log( "Hello :)" );//output = Hello =)

//variable ex.1
var x = 5;
var y = 10;

console.log(x + y);//output = 15
//variable with white space and alert ex.2
var one = "hello";
var two = "Autumn";
var three = one + " " + two;

alert(one + " " + two);//output = hello Autumn

//array
var x=["green", "yellow"]
var y=["red", "blue"]
var colors=[x, y]

console.log(colors[1][0]);//output = red
console.log(colors[0][1]);//output = yellow

//function ex.1
w = 1;
function addItem(){
	w = w+1;
	console.log( w + " " + "apples in the cart.");
}

//function ex.2
function turnPink(){
	document.getElementById("body").style.backgroundColor = "pink";
}

function turnGreen(){
	document.getElementById("body").style.backgroundColor = "green";
}

//function ex.3
function colorSwitch(){
	if(turnPink){
		document.getElementById("body").style.backgroundColor = "green";
		turnPink = false;
	}else{
		document.getElementById("body").style.backgroundColor = "pink";
		turnPink = true;
	}
}



