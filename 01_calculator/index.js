const inputs = document.getElementById("display");
function append(value){
    inputs.value += value;
}
function clearDisplay(){
    inputs.value = "";
}
function calculate(){
    inputs.value = eval(inputs.value);
}
function clearLast(){
    inputs.value = inputs.value.slice(0,-1) ;
}
function percent(){
    inputs.value = eval(inputs.value)/100
}