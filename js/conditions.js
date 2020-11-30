
var age=prompt("Enter your age");
if(age<18){
    alert("Not eligible for cnic");
}
else{
    alert("eligible for cnic");

}

var num1=prompt("Enter first number");
var num2=prompt("Enter second number");
if (num2==0) {
    alert(num1/num2);
} else {
    alert(num1/num2);
}


var percentage=parseInt(prompt("Enter your percentage"));
if(percentage>100 || percentage<=0){
    alert("INVALID PERCENTAGE");
}
else if(percentage>=90 && percentage<=100){
    alert("A GRADE");
}
else if(percentage>=80){
    alert("B Grade")
}
else if(percentage>=70){
    alert("C Grade")
}
else if(percentage>=60){
    alert("D Grade")
}
else if(percentage>=50){
    alert("E Grade")
}
else{
    alert("Failed");
}


switch (percentage) {
    case 100:
        alert("KUDOS");
        break;
    case 50:
        alert("BETTER LUCK NEXT TIME");
        break;
    case 0:
        alert("BAD LUCK");
        break;
    default:
    alert("WELL DONE");
        break;
}
