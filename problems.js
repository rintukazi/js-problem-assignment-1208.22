/* 
----------------------------------------------------------
problems for assignment
----------------------------------------------------------

 */

//First problem
function  radianToDegree(radianValue){
    const degreeValue = radianValue*57.2958;
    const result = degreeValue.toFixed(2);
    return result;


}
const radianValue=10;
const result = radianToDegree(radianValue);
// console.log(result);


/* 
Problem no-2
 */

function isJavaScriptFile(fileName){
    if(fileName.includes('.js')){
        return true;
    }
    else{
        return false;
    }

}
const fileName = 'index.js';
const result2 = isJavaScriptFile(fileName);
// console.log(result2);


/* 
-------------------------------------------------------------------
problem-3
-------------------------------------------------------------------
 */

function  oilPrice(dieselQuantity,petrolQuantity,octaneQuantity){
    const dieselPricePerLitre =114;
    const petrolPricePerlitre = 130;
    const octanePricePerLitre = 135;
    const totalDieselPrice = dieselQuantity*dieselPricePerLitre;
    const totalPetrolPrice = petrolQuantity*petrolPricePerlitre;
    const totalOctanePrice = octaneQuantity*octanePricePerLitre;
    const totalFuelPrice = totalDieselPrice+totalPetrolPrice+totalOctanePrice;

    return totalFuelPrice;

}
const dieselQuantity =1;
const petrolQuantity =1;
const octaneQuantity =1;

const totalFuelPrice = oilPrice(dieselQuantity,petrolQuantity,octaneQuantity);
// console.log(totalFuelPrice);


/* 
---------------------------------------------------------------
problem-5
---------------------------------------------------------------
 */

function isBestFriend(friend1,friend2){
    if(friend1.name===friend2.friend && friend2.name===friend1.friend)
    {
        return true;
    }
    else{
        return false;
    }

}
const friend1 = {name:'maxwell',friend:'finch'};
const friend2 = {name:'finch',friend:'maxwell'};
const result5 = isBestFriend(friend1,friend2);
// console.log(result5);

/* 
-------------------------------------------------
problem-4
-------------------------------------------------
 */

function publicBusFair(people){
if(typeof(people)!=='number'){
    return 'Plese Enter a Number';
}
else{
    people%=50; //people=Remaining people after filling bus
    people%=11; //people=Remaining people after filling microbus
    //Rest of the people need public bus now
    const publicBusCost = people*250 //calculate cost for public fair
    return publicBusCost;


}
}
const people =265;
const publicBusCost = publicBusFair(people);
console.log(publicBusCost);