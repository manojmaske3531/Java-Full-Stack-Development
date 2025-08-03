// Condditional stmt
// // if
// if else
// else if

let bill = Number(prompt('Enter Bill Amount'))
console.log(typeof bill);
if(bill>=500 && bill<=1000) {
    let dis = 5/100*bill
    alert('you are payable amout is ${bill-dis}');

}
else if(bill>=1001 && bill<=10000){
    let dis = 10/100*bill
    alert('you payable amount is ${bill-dis}');
}
else{
    alert('Discount not applied so your payable amount is $ {bill} ');
}