function isUndefined(param){
    if (param === undefined){
        return true;
    } else{
        return false;
    }
}

function isNull(param){
    if (param === null){
        return true;
    } else{
        return false;
    }
}

function isNaN(param){
    if (param !== param){
        return true;
    } else{
        return false;
    }
}

function isEmptyObject(object){
    for (var key in object){
        return false;
    }
    return true;
}

function mapObject(object, mapFunction){
    var resObject = new Object();
    for(var key in object){
        resObject[key] = mapFunction(object[key]);
    }
    return resObject;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function compareObjects(object1, object2){
    var isEqualKeys;
    var equalKey;
    var numKeys1 = 0;
    var numKeys2 = 0;
    for(key1 in object1){
        numKeys1++;
    }
    for(key2 in object2){
        numKeys2++;
    }
    if(numKeys1 !== numKeys2){
        return false;
    }
    for(key1 in object1){
        isEqualKeys = false;
        for(key2 in object2){
            if(key1 === key2){
                isEqualKeys = true;
                equalKey = key1;
                break;
            }
        }
        if(isEqualKeys){
            if (typeof object1[equalKey] == "object"){
                if(compareObjects(object1[equalKey], object2[equalKey]) == false){
                    return false;
                }
            } else if(object1[equalKey] !== object2[equalKey]){
                return false;
            }
        } else{
            return false;
        }
    }
    return true;
}

function deleteProperty(object, chekFunction){
    resObject = new Object();
    for(key in object){
        if(chekFunction(object[key])){
            resObject[key] = object[key];
        }
    }
    return resObject;
}