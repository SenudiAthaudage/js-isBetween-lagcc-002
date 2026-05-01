'use strict';
let num = 5;
let max = 10;
let min = 0;
let isBetween = function(num, min, max){
    
    if(num > min && num < max){
        return true;
    }
    else{
        return false;
    }
};