var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
var result=document.getElementById("result");
function sum(){
var box1=num1.value;
var box2=num2.value;
var total=Number(box1)+Number(box2);
result.textContent="Sum = "+total;
console.log(total);
}
function product(){
var box1=num1.value;
var box2=num2.value;
var total=Number(box1)*Number(box2);
result.textContent="Product = "+total;
console.log(total);
}
function division(){
var box1=num1.value;
var box2=num2.value;
var total=Number(box1)/Number(box2);
result.textContent="Division = "+total;
console.log(total);
}
function sub(){
var box1=num1.value;
var box2=num2.value;
var total=Number(box1)-Number(box2);
result.textContent="Subraction = "+total;
console.log(total);
}