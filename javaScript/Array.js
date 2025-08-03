// // // // ! index based and index starts from 0
// // // // ! lenght ; no.of element

// // // // 2 ways
// // // // !Array literal
// // // // var /let/const arrayname =[val1,val2,val3,vla4]

// // // var arr =[1,2,3,4,5,6,7,8,9]
// // // console.log (arr);
// // // console.log(arr.length);

// // // let std = [123,'Raman','hyd',3578.98]
// // // console.log(std);

// // // //! access--arrayname[index]
// // // console.log(arr[2]);
// // // arr[9] =60
// // // console.log(arr);

// // // // !update -- arrayname[index]=newval
// // // arr[1] = 200
// // // console.log(arr);

// // // delete arr[5]
// // // console.log(arr);

// // // // Array constroctor
// // // nums [0] = 10
// // // nums [1] = 20
// // // nums [2] = 30
// // // nums [3] = 40
// // // console.log(nums);

// // // Array Method
// // let flipkart =['mobile','Tv','toys','cloths']
// // console.log(flipkart);

// // // push(val1,val2,val3....) : add mutiple array elements at the end of the Array

// // flipkart.push('bloetooth','shirt','kurta')
// // confirm.lof('After push');
// // console.log(flipkart);

// // //! unshift(val1,val2,val3...) : add multiple array elements from the starting of the array
// // flipkart.unshift('table','chair','laptop','ring')
// // console.log('After unshift');
// // console.log(flipkart);

// // // ! pop():delete the last element

// // flipkart.pop()
// // flipkart.pop()
// // console.log('After pop');
// // console.log(flipkart);
// // // !shift(): delete the frist element
// //  flipkart.shift()
// //  flipkart.shift()
// //  console.log("After shift");
// //  console.log(flipkart);

// //  // ! splice (Start_index ,delete_count,replacement_elements eliment in middle)

// //  // ['table','chair','laptop,'ring','mobile','tv','ball','toys','cloths','bluetooth','shirt','kurta']

// // // ! Deleting And Adding 
// // flipkart.splice(4,2,'door','crocs','doll')
// // //! only adding 
// // flipkart.splice(3,0,'pen')
// // //! only deleting
// // flipkart.splice(6,1)
// // console.log('After splice')
// // console.log(flipkart)

// // // ! index (eliment) : return index posible of element
// // console.log(flipkart.indexOf('mobile'));
// // console.log(flipkart.indexOf('book'));

// // // ! at (index) : return element present i the special index
// // console.log(flipkart.at(4));
// // console.log(flipkart.at(40));

// // // ! inclue (eliment  ) : to check whether the element is present int the Array
// // console.log(flipkart.includes('tv'));
// // console.log(flipkart.includes('book'));

// // // ! joins() : it is used to join all element of an eliment an array into a string
// // console.log(flipkart.join());
// // console.log(flipkart.join(''));
// // console.log(flipkart.join(""));
// // console.log(flipkart.join(  ));
// // console.log(flipkart.join('--'));

// // // ! tostring() : it is used to join all element of an array into a string
// // console.log(flipkart.joinSting());
// // console.log(flipkart.joinSting(''));
// // console.log(flipkart.joinSting(""));
// // console.log(flipkart.joinSting(  ));
// // console.log(flipkart.joinSting('--'));

// // // ! concat() : merge multiple Array
// // let amazon = ['fruits','veg','books']
// // console.log(flipkart.concat(amazon));
// // console.log(flipkart);
// // console.log(amazon);

// // // ! reverce() : return reverced Array
// // console.log(flipkart.reverse());

// // ! filter() , map () and reduce () : Hof
// let num = [1,2,3,4,5,6,7,8,9,10]

// // ! filter() : tofilter the Array element based upon the condition 
// let nums = [1, 2, 3, 4, 5, 6];

// let filteredArr = nums.filter(function(num, ind) {
//     return num % 2 === 0;  // return true for even numbers
// });

// console.log(filteredArr); // Output: [2, 4, 6]

// // ! map() : to map each array element
// let mappedArr = nums.map((val,ind)=>{
//     returnval*10
// })
// console.log(mappedArr);

// //reuce(): to reduce entire array into single val
// let total = nums.reduce((res,val)=>{
//     returnres+val
// },0)


// function generatePassword(std) {
//     let email = std[3];
//     let contact = std[2];

//     let emailPart = email.substring(0, 4);
//     let contactPart = contact.slice(-4);

//     return emailPart + contactPart;
// }

// let std = [1, 'Mangesh', '5678768987', 'Mangesh123@gmail.com'];
// console.log("Generated Password:", generatePassword(std));

// let heros=["ironman,hulk,thor,batman,spaderman"];

// let marks =[97,98,78,56,78,];

// let info =["ironman",56,"Ravet"];

// console.log(marks);

// let items = [250, 570, 300, 910, 870];

// let i = 0;
// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// Array Methods
leht fooditems=["potato","Apple","lichi","tomato"];