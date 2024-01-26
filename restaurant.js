const age = 65;
const price = 400;
if (age <= 12){
    console.log('you can eat for free');
}
else if (age >= 50 && age <=59){
    //25% discount
    const discount25 = price * 25 / 100;
    const payAmmount25 = price - discount25;
    //'you get 25% discount. your payable ammount is'
    console.log( payAmmount25 );
}
else if (age > 60  ){
    //50% discount 
    const discount50 = price * 50 / 100;
    const payAmmount50 = price - discount50;
    //'you get 50% discount. your payable ammount is'
    console.log( payAmmount50);
}
else{
    console.log(price);
}