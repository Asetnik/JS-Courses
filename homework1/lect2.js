function firstFunction(num1, num2){
    if(num1 > num2){
        return true;
    }
    else{
        return false;
    }
}

function secondFunction(str){
    return "Вы ввели " + str;
}

function thirdFunction(param){
    switch(param){
        case null:
            return "Получили null";
        case undefined:
            return "Получили undefined";
        default:
            return "Получили не null и не undefined";
    }
}

function fourthFunction(param){
    param.checked = true;
}

function fifthFunction(num){
    for(var i = 0; i <= num; i++){
        console.log(i);
    }
    for(var i = num; i>= 0; i--){
        console.log(i);
    }
}