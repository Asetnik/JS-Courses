var display = document.getElementById("display"),
    numbers = document.querySelectorAll(".number"),
    operations = document.querySelectorAll(".operation"),
    equalSign = document.getElementById("equalSign"),
    buttonC = document.getElementById("C"),
    buttonCE = document.getElementById("CE"),
    sqrt = document.getElementById("sqrt"),
    square = document.getElementById("square"),
    myH = document.getElementById("history"),
    decimal = document.getElementById("decimal"),
    firstNumber,
    secondNumber,
    result,
    isSecondNumber = false,
    operation;

document.onkeydown = function(event){
    if(event.key >= 0 && event.key <=9){
        pressButton(event.key);
    }
    if(event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/'){
        pressOperation(event);
    }
    if(event.keyCode == 13){
        calculate();
    }
}

equalSign.addEventListener('click', calculate);
buttonC.addEventListener('click', clearC);
buttonCE.addEventListener('click', clearCe);
sqrt.addEventListener('click', sqrtFunction);
square.addEventListener('click', squareFunction);
decimal.addEventListener('click', decimalFunction);

for (var i=0; i<numbers.length; i++){
    var number = numbers[i];
    number.addEventListener('click', function(event){
        pressButton(event.target.textContent);
    });
};

for (var i=0; i<operations.length; i++){
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function(event){
        pressOperation(event.target.textContent);
    });
};

function pressButton(number){
    if(display.value === "0"){
        display.value = number;
    } else if(isSecondNumber){
        if(display.value == firstNumber){
            display.value = number;
        } else {
            display.value += number;
        }
    } else {
        display.value += number;
    }
}

function pressOperation(op){
    isSecondNumber = true;
    firstNumber = +display.value;
    operation = op;
}

function calculate(){
    secondNumber = +display.value;
    isSecondNumber = false;
    switch(operation){
        case '+':
            result = firstNumber + secondNumber;
            addToHistory(firstNumber + " + " + secondNumber + " = " + result);
            break;
        case '-':
            result = firstNumber - secondNumber;
            addToHistory(firstNumber + " - " + secondNumber + " = " + result);
            break;
        case '*':
            result = firstNumber * secondNumber;
            addToHistory(firstNumber + " * " + secondNumber + " = " + result);
            break;
        case '/':
            result = firstNumber / secondNumber;
            addToHistory(firstNumber + " / " + secondNumber + " = " + result);
            break;
    }
    display.value = result;
}

function sqrtFunction(){
    var buf = Math.sqrt(display.value);
    addToHistory("√" + display.value + " = " + buf);
    display.value = buf;
}

function squareFunction(){
    var buf = Math.pow(display.value, 2);
    var spanSuper = "<sup>2</sup>";
    addToHistory(display.value + spanSuper + " = " + buf);
    display.value = buf;
}

function clearC(){
    display.value = "0";
    firstNumber = undefined;
    secondNumber = undefined;
    operation = undefined;
    isSecondNumber = false;
}

function clearCe(){
    display.value = "0";
}

function decimalFunction(){
    if(display.value.indexOf(".") === -1){
        display.value += ".";
    }
};

var numAdds = 0;

function addToHistory(str){
    var newP = document.createElement('p');
    newP.innerHTML = str;
    if (numAdds === 0){
        myH.appendChild(newP);
        numAdds++;
    } else{
        newP.innerHTML = str;
        if(numAdds > 8){
            myH.removeChild(myH.getElementsByTagName("p")[8]);
            numAdds--;
        }
        myH.insertBefore(newP, myH.getElementsByTagName("p")[0]);
        numAdds++; 
    }
}