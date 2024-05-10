let name=prompt("Enter Your name!");
console.log("hello ,",name,"!");
let arr=[1,2,3,4]
let evenarr=arr.filter((val)=>{
   return val%2===0; 
})
console.log(evenarr);