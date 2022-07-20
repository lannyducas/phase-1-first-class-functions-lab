// Code your solution in this file!
/*const returnFirstTwoDrivers = (function(['Antonia', 'Nuru', 'Amari', 'Mo']){
    const newArray = [...returnFirstTwoDrivers];
    
}) */

const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
    
};

const returnLastTwoDrivers = function(array){
    return array.slice(array.length -2 ,array.length);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (multiplyValue){
    return function(fare){
        return multiplyValue * fare;
    }
}

//createFareMultiplier(multiplyValue)(fare);

//so what I want is to create a function that takes a value (4) 
//and returns a function that takes another value (fare) and calculates the two
//advantage is mutability, I can change either function seperately

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, fn){
    return fn(array);
}
