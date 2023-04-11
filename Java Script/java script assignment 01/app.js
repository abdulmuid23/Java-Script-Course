                              // Q1 //

let x= prompt("Enter Value No 1");
 let y= prompt("Enter Value No 2");
if (x>y) {
    console.log("The greater vale is ",x);
    
} else {
    console.log("The greater vale is ",y);
};

                              // Q2 //


let x= prompt("Enter a Value ");
if (x<0) {
    alert("The sign is Negative ")     
}
else{
    alert("The sign is Positive ")
};

                              // Q3 //

let x= prompt("Enter 1st Value ");
let y= prompt("Enter 2nd Value ");
let z= prompt("Enter 3rd Value ");
let a= prompt("Enter 4th Value ");
let b= prompt("Enter 5th Value ");
if (x>y && x>z && x>a && x>b) {
    console.log("The largest No is the First Value that is ",x);     
}
else if(y>z && y>a && y>b) {
    console.log("The largest No is the Second Value that is ",y);
}
else if(z>a && z>b) {
    console.log("The largest No is the Third Value that is ",z);
}
else if(a>b) {
    console.log("The largest No is the Fourth Value that is ",a);
}
else{
    console.log("The largest No is the Fifth Value that is ",b);
};


                              // Q4 //

for (let CurrNum =0; CurrNum<=15; CurrNum++){
    if (CurrNum===0) {
        console.log(CurrNum +" is a even No");

        
    } 
    else if(CurrNum % 2 === 0) {
        console.log(CurrNum +" is a even No");
    }
    else{
        console.log(CurrNum +" is a odd No") ;
    }
};

                              // Q5 //
for (let x=0; x<=4; x++){


let y= prompt("Enter Your Marks");
if (y<60) {
    console.log("Your Marks are " + y);
    console.log("& Your Grade is F");
} 
else if (y<70) {
    console.log("Your Marks are " + y);
    console.log("& Your Grade is D");
    }
else if (y<80) {
    console.log("Your Marks are " + y);
    console.log("& Your Grade is C");
}
else if (y<90) {
    console.log("Your Marks are " + y);
    console.log("& Your Grade is B");
}
else{
    console.log("Your Marks are " + y);
    console.log("& Your Grade is A");
};

}

                              // Q6 //

for(let x=1; x<=100;x++)
{
if((x % 3 === 0) && (x % 5 === 0)){
console.log("FizzBuzz");
}
else if(x % 3 === 0){
console.log("Fizz");
}
else if(x % 5 === 0){
console.log("Buzz");
}
else{
console.log(x);
}
};

                              // Q7 //
let z;
for (let x=0; x<=6; x++){
    for(let y=1; y<x ;y++){
         z=z+("*")
        
    }
    console.log(z);
    z='';
};




