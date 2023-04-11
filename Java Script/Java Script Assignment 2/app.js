//           Q1            ///

// let x=+prompt("Enter Value you want to Add in 5");
// function AddNo(value){

// return function(ghi){
//     console.log(ghi + value)
// }
// }

// let innerfunction = AddNo(x)
// innerfunction(5)

///           Q2            ///


function search(arr,startValue,length,value)
{
    if(length<1){
    return -1
}
    else if(arr[startValue] === value)
    {
        return startValue
    }
   else{
    return search(arr,startValue + 1,value)
   }
}

let arr = [1,2,3,4,5,6,7,8,9]
let length=arr.length;
let index = search(arr,0,0)
if(index >= 0)
{
    console.log("true")
}
else{
    console.log("false")
}


///           Q6            ///