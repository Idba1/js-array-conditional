/**
 * Three Parts
 * condition ? Do something when condition is true : Do something when condition is false
 */


var age= 23;
(age >= 18) ? console.log('Vote dio') : console.log('Boyos hoyni')


// // Simple If Else
let price1 = 1000;
const isLeader1 = true;
if(isLeader1 === true){
    console.log(0);
}
else{
    console.log(price1 +100);
}



// //simple tarnary
price1 = isLeader1 === false? console.log(0) : console.log(price1 +100)



let price = 1200;
const isLeader = true;

if(isLeader === true){
    if (price > 1000){
        price = price/2;
        console.log(price);
    }
    else{
        price = 0;
        console.log(price);
    }
    // price > 1000 ? console.log(price/2) : console.log(0)
}
else{
    price = price + 1000;
    console.log(price);
}




// It's not advance ternary but it's semi-advance ternary
price = isLeader === true? 
    price > 2500 ? 
        console.log(price/2) :  console.log(0) :
console.log(price + 1000);