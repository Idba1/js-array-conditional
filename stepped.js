// const price = 6000;
// console.log(price); 

// if(price >= 5000){
//     //10% discount
//     const discount = price * 10 / 100;
//     console.log(discount); 
//     const payAmmount = price - discount;
//     console.log(payAmmount);
// }
// else{
//     console.log(price);
// }





const price = 2000;
console.log(price); 

if(price >= 5000){
    //10% discount
    const discount = price * 10 / 100;
    console.log(discount); 
    const payAmmount = price - discount;
    console.log(payAmmount);
}
else if (price <= 2500){
    //5% discount
    const discount = price * 5 / 100;
    console.log(discount);
    const payAmmount = price - discount;
    console.log(payAmmount); 
}
else{
    console.log(price);
}