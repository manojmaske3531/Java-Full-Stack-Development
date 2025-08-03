// // console.log('FUNCTIONS');
// // // ! non -paramitrised functon
// // function demo() {
// //     console.log('Hello i am a function');
// // }
// // demo()

// // // parameterised function
// // // parametres : variable declare at the time of functiondeclaration
// // function add(num1,num2){
// //     returnnum1+num2
// // }
// // console.log(add(10,20));

// // Genaretor function : used to generate the values
// // yield : it is the keyword which is used to yeild the values : very similar to return 
// // (return shd be used oly one time in fuction but we can use yield multiple times)

// function* generate(){
//     yield 123
//     yield "Sanvi"
//     yield true
//     yield 30.78

// }
// let res = generate()
// // next() and value
// // console.log(res.next.value);
// // console.log(res.next.value);
// // console.log(res.next.value);

// for (let i=1;i<=4; i++) {
//     console.log(res.next().value);
// }

// function gritUser(user,address) {
//     console.log('Hello i am user ${user} from $ {address}');

// }
// let userName = prompt("Enter the user name:");
// let userAddress = prompt("Enter the your address: ");

// gritUser(userName,userAddress);

//sum function

function sum(a,b) {
    returna+b;
}
const arrowSum=(a,b)=>{
    returna+b;
};