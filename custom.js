var cal_buttons = document.querySelectorAll(".cal_buttons button")
var answer = document.getElementById("answer");
var operator = "";
var input = "0";
var result;

const $ = el => document.querySelector(el);
const _ = n => (n % 1 === 0 ? n : n.toFixed(2));

for (let button of cal_buttons){
    button.addEventListener("click", calculator);
}

function calculator(){
    var operation = this.value;
    if(operation == "AC"){
        answer.innerText = "0";
        input = "0";
        operator = "";
        result = 0;
        let gst_disp = document.getElementById("gst_box");
        gst_disp.classList.remove("active");
        $("#actual_price").innerText = 0;
        $("#gst_value").innerText = 0;
        $("#cgst_value").innerText = 0;
        $("#sgst_value").innerText = 0;
    }
    else if(operation =="DEL"){
        if(answer.innerText == "0" || answer.innerText == ""){
            answer.innerText = "0";
        }
        else{
            input = answer.innerText;
            answer.innerText = "";
            for(let str=0; str < (input.length - 1); str++){
                answer.innerText += input[str];
            }
            if(answer.innerText == ""){
                answer.innerText = "0";
            }
        }
    }
    else if(operation == "+"){
       if(operator == ""){
        input = answer.innerText;
        answer.innerText = "0";
        operator = "+";
       }
       else{
           result = evaluate(parseFloat(input), parseFloat(answer.innerText));
           console.log(result);
           input = result;
           answer.innerText = "0";
           operator = "+"
       }
    }
    else if(operation == "-"){
        if(operator == ""){
         input = answer.innerText;
         answer.innerText = "0";
         operator = "-";
        }
        else{
            result = evaluate(parseFloat(input), parseFloat(answer.innerText));
            console.log(result);
            input = result;
            answer.innerText = "0";
            operator = "-";
        }
    }
    else if(operation == "*"){
        if(operator == ""){
         input = answer.innerText;
         answer.innerText = "0";
         operator = "*";
        }
        else{
            result = evaluate(parseFloat(input), parseFloat(answer.innerText));
            console.log(result);
            input = result;
            answer.innerText = "0";
            operator = "*";
        }
    }
    else if(operation == "/"){
        if(operator == ""){
         input = answer.innerText;
         answer.innerText = "0";
         operator = "/";
        }
        else{
            result = evaluate(parseFloat(input), parseFloat(answer.innerText));
            console.log(result);
            input = result;
            answer.innerText = "0";
            operator = "/";
        }
    }
    else if(operation == "%"){
        if(operator == ""){
         input = answer.innerText;
         answer.innerText = "0";
         operator = "%";
        }
        else{
            result = evaluate(parseFloat(input), parseFloat(answer.innerText));
            console.log(result);
            input = result;
            answer.innerText = "0";
            operator = "%";
        }
    }
    else if(operation == "="){
        if (!(operator == "")){
            result = evaluate(parseFloat(input), parseFloat(answer.innerText));
            console.log(result);
            input = result;
            answer.innerText = result;
            operator = "";
        }
    }
    else{
        if(answer.innerText == "0")
            answer.innerText = operation;
        else
            answer.innerText += operation;
    }
}

function evaluate(a, b) { 
    if(operator == "+")
      return a + b;
    else if(operator == "-")
      return a - b;
    else if(operator == "*")
      return a * b;
    else if(operator == "/")
      return a / b;
    else if(operator == "%")
      return a % b;
    else 
        answer.innerHTML = "bye bye";
 }



var gst_button = document.querySelectorAll(".gst_buttonset1 button");


for (let button of gst_button){
    button.addEventListener("click", calgst);
}
function calgst(){
    let gst_disp = document.getElementById("gst_box");
    gst_disp.classList.add("active");
    let gst = parseFloat(this.value);
    let actual_value = parseFloat(answer.innerText);
    let gst_value = (actual_value * gst) / 100;
    $("#actual_price").innerText = _(actual_value);
    $("#gst_value").innerText = _(gst_value);
    $("#cgst_value").innerText = _(gst_value / 2);
    $("#sgst_value").innerText = _(gst_value / 2);
    answer.innerText = _(actual_value + gst_value);
}

var gst_button1 = document.querySelectorAll(".gst_buttonset2 button");

for (let button of gst_button1){
    button.addEventListener("click", incGST);
}

function incGST(){
    let gst_disp = document.getElementById("gst_box");
    gst_disp.classList.add("active");
    let gst = parseFloat(this.value);
    let actual_value = parseFloat(answer.innerText);
    let gst_rate = (actual_value / (100 + gst)) * 100;
    let gst_value = (gst_rate * gst) / 100;
    $("#actual_price").innerText = _(actual_value);
    $("#gst_value").innerText = _(gst_value);
    $("#cgst_value").innerText = _(gst_value / 2);
    $("#sgst_value").innerText = _(gst_value / 2);
    answer.innerText = _(actual_value - gst_value);
}